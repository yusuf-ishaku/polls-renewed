/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
    Text, Box, Flex, Spacer,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure
} from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react';
import { Field, Form, Formik } from "formik";
import { Ballot } from './Ballot';
import { Colors } from "../assets/constants/colors";
import OLiner from "../assets/images/oldLineer.png";
import axiosCalls from '../axiosCalls';
// import { useAsyncValue } from 'react-router-dom';
// import Liner from "../assets/images/newLiner.png"m1
// import { useGetPollsQuery } from '../assets/app/api/pollsSlice';
export const Elections = (props) =>{
    const {isOpen, onOpen, onClose } = useDisclosure();
    const [regState, setRegState] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [selectedPoll, setSelectedPoll] = useState(null);
    console.log(polls)
    const userNameValidate = (value) => {
        let error;
        value = value.trim();
        if (value === "") {
            error = "Username is required"
        } else if (value.length <= 2) {
            error = "Username should be more than 2 characters long"
        }
        else {
            error = "";
        }
        return error
    }
    const emailValidate = (value) => {
        // let error;
        let myRegex = /[a-z+|0-9+]@[a-z]+.com/ig
        let error = myRegex.test(value);
        value = value.trim();
        if (value === "" || value.length <= 2) {
            return "Email is required"
        }
        else if (error) {
            return ""
        } else {
            return "Email is invalid"
        }
    }
   
    // console.log(data);
     return(
        <>
        <Modal isOpen={isOpen} size={'4xl'}  onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <Flex h={'10rem'} dir="column" alignItems={'end'} bgSize={'cover'} bgImage={OLiner} p="1rem">
                <Text textTransform={'uppercase'} fontSize={"3xl"} color={'white'} fontWeight="bold">
                    Election
                </Text>
            </Flex>
          <ModalHeader>
            <Text fontSize={"20px"} fontWeight={"bold"}>{props.title}</Text>
            <Text fontSize={"16px"}>ID : {props.id}</Text>
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
           <Flex flexDir={"column"} alignItems={'center'} >
                {registered && <Ballot></Ballot>}
                { regState &&
                <Formik
                initialValues={{
                    email: "",
                    username: '',
                    password: ""
                }}
                validateOnChange={true}
                >
                    {(props) => (
                        <Form
                        style={{width: '50%', marginBottom: "1rem"}}
                        >
                            <Field name="email" validate={emailValidate}>
                                {(props) =>(
                                    <FormControl isInvalid={
                                        props.form.errors.email && props.form.touched.email
                                    }>
                                        <FormLabel
                                            ml={"0.3rem"}
                                            fontWeight={"semibold"}
                                            fontSize={"16px"}
                                         >
                                            Email
                                        </FormLabel>
                                        <Input
                                        {...props.field}
                                        autoComplete={"true"}
                                        type="email"
                                        placeholder="gethan@gmail.com"
                                        >
                                        </Input>
                                        <FormErrorMessage w={"full"} textColor={"red"}>
                                            {props.form.errors.email}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field 
                            name="username"
                            validate={userNameValidate}
                            >
                                {(props) =>(
                                    <FormControl 
                                    isInvalid = {props.form.errors.username && props.form.touched.username}
                                    >
                                        <FormLabel
                                        ml={'0.3rem'}
                                        fontWeight={'semibold'}
                                        fontSize={'16px'}
                                        >
                                            Username
                                        </FormLabel>
                                        <Input
                                        {...props.field}
                                        type="text"
                                        placeholder="Gethan"
                                        autoComplete={"false"}
                                        >
                                        </Input>
                                        <FormErrorMessage w="full" textColor="red">
                                            {props.form.errors.username}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="password">
                                {(props)=>(
                                    <FormControl
                                    isInvalid={props.form.errors.password && props.form.touched.password}
                                    >
                                        <FormLabel
                                        ml={'0.3rem'}
                                        fontWeight={'semibold'}
                                        fontSize={'16px'}
                                        >
                                            Password
                                        </FormLabel>
                                        <Input
                                        {...props.field}
                                        type="password"
                                        placeholder="--------"
                                        autoComplete={"false"}
                                        >
                                        </Input>
                                    </FormControl>
                                )}
                            </Field>
                        </Form>
                    )}
                </Formik>
                }
                <Button onClick={ regState ? () =>{
                        return console.log('aarg')
                        }
                    :
                () => setRegState(!regState)
                } width={'15rem'} color={'white'} bgColor={Colors.primary}>
                    Register for this election
                </Button>
                <Flex flexDir={'row'} alignItems={'center'} justifyContent={'center'}>
                    <Box bgColor={'limegreen'} w='10px' h={'10px'} rounded={'full'}> 

                                </Box>
                                <Text fontWeight={'light'} color={'green.300'} mt={'2px'} fontSize={'md'}>
                                    Special code will be sent to your email
                                </Text>
                            </Flex>

                        </Flex>

                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color={'white'} bgColor={Colors.primary} mr={3} onClick={onClose}>
              Close
            </Button> */}
            <Text w={'full'} mt={"10rem"} textAlign={'center'} textTransform={'uppercase'} color={"limegreen"}>
                Note: no voting if you are not registered
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <Box p={"0.8rem"} w={"full"} h={"fit"} >
            <Flex direction={"column"} onClick={onOpen} _hover={{cursor: 'pointer'}} w={"100%"} rounded={"lg"} p={"3"} h={"fit"} bgColor={Colors.pinkish}>
                <Text>Elections</Text>
                <Spacer></Spacer>
                <Box mt={"20"} w={"50%"}>
                    <Text fontSize={"20px"} fontWeight={"bold"}>{props.title}</Text>
                    <Text fontSize={"16px"}>ID : {props.id} </Text>
                    
                </Box>
                <Text mt={"4"} lineHeight={"1rem"}>Register now election starts soon..........</Text>
            </Flex>
        </Box>
        </>
    )
}