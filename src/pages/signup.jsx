/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Flex, Box, Spacer, Text, Input, Image, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Divine from "../assets/images/manvote.png";
import {Link, Navigate } from "react-router-dom";
import { login } from "../assets/app/slices/authSlice";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
// import { useLoginUserMutation } from "../assets/api/apiSlice";
import { useRegisterUserMutation } from "../assets/app/api/authApiSlice";
import { useSelector, useDispatch } from "react-redux";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react';
  import { Field, Form, Formik } from "formik";
export const SignUp = () =>{
    const [eyeopen, setEyeOpen] = useState(false);
    const [eyeopen2, setEyeOpen2] = useState(false);
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState(JSON.parse(sessionStorage.getItem("pollsAuthState") || null));
    const [fetchState, setFetchState] = useState("");
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    useEffect(() =>{
      setAuth(sessionStorage.getItem("pollsAuthState") || null);
      
      // return sessionStorage.removeItem("pollsAuthState")
    }, [])
    const textValidate = (value) =>{
        let error;
        if(value.length < 1){
            error = "This input is required";
        }
        return error
    }
    const validateEmail = (value) =>{
        let error; 
        if(value.length < 1){
            error = "This input is required";
        }
        return error
    };
    const passwordValidate = (value) =>{
        let error;
        setPassword(value)
        if(!value){
            error = "Password is required"
        }
        else if(value.length < 5){
            error = "Password must be more than 5 characters long"
        }
        return error
    }
    const [createUser, result]= useRegisterUserMutation();
    const HandleSubmit = async (values) =>{
        let packet = {
          firstname: values.firstName.trim(),
          lastname: values.lastName.trim(),
          username: values.userName.trim(),
          password: values.password.trim(),
        }
        await createUser(packet).then((result) =>{
          console.log(result);
          if(result?.data?.message === "User registered successfully"){
           sessionStorage.setItem("pollsAuthState", JSON.stringify(true));
           setAuth(JSON.parse(sessionStorage.getItem("pollsAuthState")));
           let {username, password} = packet;
            dispatch(login({username, password}));
          }
          if(result.error){
            setFetchState("Poor network connectivity, check your internet settings!")
          }
        });
    }
    if(auth){
      return <Navigate replace to={"/dashboard"}/>
    }else{
        return (
          <>
            <div className="body">
              <Flex h={"100vh"} w={"100vw"}>
                <Flex
                  w={{ base: "100%", lg: "50%" }}
                  mb={"2rem"}
                  h={{base:"fit-content", sm: "auto"}}
                  m={{base:"2rem", sm:"2rem", lg:"5rem"}}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text
                    w={"100%"}
                    textAlign={"left"}
                    mb={"0.4rem"}
                    fontSize={"28px"}
                  >
                    Welcome!
                  </Text>
                  <Text
                    w={"100%"}
                    textAlign={"left"}
                    color="gray.400"
                    mb={"1.5rem"}
                    fontSize={"16px"}
                  >
                    We just need a little more information to set up your
                    account. Get ready to make a choice of a life time. Vote
                    wisely!!
                  </Text>
                  <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      userName: "",
                      password: "",
                    }}
                    validateOnChange={true}
                    onSubmit={HandleSubmit}
                  >
                    {(props) => (
                      <Form style={{width: "100%"}}>
                        {fetchState !== '' &&  <Text color={'red'} border={"1px"} w={'full'} borderColor={"red"} p={'0.5rem'}>{fetchState}</Text>}
                        <Box display={"flex"} flexDirection={{base:"column", sm: "row", md: "row"}} w="100%">
                            <Field name="firstName" validate = {textValidate}>
                                {(props) =>(
                                    // <FormErrorMessage></FormErrorMessage>
                                    <FormControl w={"auto"} isInvalid= {props.form.errors.firstName && props.form.errors.firstName}>
                                        <Flex direction="column" mb="1.5rem">
                                            <FormLabel
                                                ml={"0.3rem"}
                                                fontWeight={"semibold"}
                                                fontSize={"16px"}
                                            >
                                                First name
                                            </FormLabel>
                                            <Input
                                                {...props.field}
                                                type="text"
                                                w={"100%"}
                                            placeholder={"Enter name"}
                                                ></Input>
                                                 <FormErrorMessage color={"red.500"}>{props.form.errors.firstName}</FormErrorMessage>
                                        </Flex>
                                    </FormControl>
                                )}
                            </Field>
                          <Spacer></Spacer>
                          <Field  name={"lastName"} validate={textValidate}>
                            {(props)=>(
                                <FormControl w={"auto"} isInvalid={props.form.errors.lastName && props.form.touched.lastName}>
                                    <Flex direction="column">
                                        <FormLabel
                                            ml={"0.3rem"}
                                            fontWeight={"semibold"}
                                            fontSize={"16px"}
                                        >
                                            Last name
                                        </FormLabel>
                                        <Input
                                            {...props.field}
                                            type="text"
                                            w={"100%"}
                                            placeholder={"Enter name"}
                                        >
                                        </Input>
                                        <FormErrorMessage color={"red.500"}>{props.form.errors.lastName}</FormErrorMessage>
                                     </Flex>
                                </FormControl>
                            )}
                          </Field>
                        </Box>
                        <Field name="userName" validate={textValidate}>
                        {(props) => (
                            <FormControl isInvalid={props.form.errors.userName && props.form.touched.userName}>
                                <FormLabel
                                    ml={"0.3rem"}
                                    fontWeight={"semibold"}
                                    fontSize={"16px"}
                                >
                                    Username
                                </FormLabel>
                                <Input
                                    {...props.field}
                                    type="text"
                                    w={"100%"}
                                    placeholder={"Enter your Username"}
                                >
                                </Input>
                                <FormErrorMessage color={"red.500"}>{props.form.errors.userName}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        <Field name = "password" validate = {passwordValidate} >
                            {(props) =>(
                                <FormControl isInvalid={props.form.errors.password && props.form.touched.password}>
                                    <FormLabel
                                        mt={"1.4rem"}
                                        ml={"0.3rem"}
                                        fontWeight={"semibold"}
                                        fontSize={"16px"}
                                    >
                                        Password
                                    </FormLabel>
                                    <Flex alignItems="center" w={'100%'}>
                                        <Input
                                        {...props.field}
                                            zIndex="0"
                                            type={eyeopen ? "text" : "password"}
                                            w={"100%"}
                                            placeholder={"............"}
                                        ></Input>
                                        {eyeopen ? (
                                            <AiFillEye
                                            onClick={() => setEyeOpen(false)}
                                            size={"30px"}
                                            style={{
                                                paddingRight: "0.6rem",
                                                color: "#0C8B28",
                                                cursor: "pointer",
                                                zIndex: "10",
                                            }}
                                            ></AiFillEye>
                                            ) : (
                                            <AiFillEyeInvisible
                                            onClick={() => setEyeOpen(true)}
                                            size={"30px"}
                                            style={{
                                                paddingRight: "0.6rem",
                                                color: "#0C8B28",
                                                cursor: "pointer",
                                                zIndex: "10",
                                            }}
                                            ></AiFillEyeInvisible>)
                                        }
                                    </Flex>
                                    <FormErrorMessage>{props.form.errors.password}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name = "confirmPassword" validate={(value)=>{
                            let error;
                            if(value !== password){
                                error= "Passwords do not match"
                            }
                            return error;
                        }}>
                            {(props) =>(
                                <FormControl isInvalid={props.form.errors.confirmPassword && props.form.touched.confirmPassword}>
                                    <FormLabel
                                 mt={"1.4rem"}
                                 ml={"0.3rem"}
                                 fontWeight={"semibold"}
                                 fontSize={"16px"}
                               >
                                 Confirm Password
                               </FormLabel>
                               <Flex alignItems="center" w={"100%"} >
                                 <Input
                                 {...props.field}
                                   zIndex="0"
                                   type={eyeopen2 ? "text" : "password"}
                                   w={"full"}
                                   placeholder={"............"}
                                 ></Input>
                                 {eyeopen2 ? (
                                   <AiFillEye
                                     onClick={() => setEyeOpen2(false)}
                                     size={"30px"}
                                     style={{
                                       paddingRight: "0.6rem",
                                       color: "#0C8B28",
                                       cursor: "pointer",
                                       zIndex: "10",
                                     }}
                                   ></AiFillEye>
                                 ) : (
                                   <AiFillEyeInvisible
                                     onClick={() => setEyeOpen2(true)}
                                     size={"30px"}
                                     style={{
                                       paddingRight: "0.6rem",
                                       color: "#0C8B28",
                                       cursor: "pointer",
                                       zIndex: "10",
                                     }}
                                   ></AiFillEyeInvisible>
                                 )}
                               </Flex>
                               <FormErrorMessage>{props.form.errors.confirmPassword}</FormErrorMessage>
                                </FormControl>       
                            )}
                        </Field>
                        <Text
                          w="100%"
                          color={"gray.400"}
                          my="1rem"
                          textAlign="right"
                          fontSize="14px"
                        >
                          <Link>Forgot Password?</Link>
                        </Text>
                          <Button
                            _active={{ bg: "#0C8B28", color: "white" }}
                            _hover={{
                              bg: "white",
                              color: "#0C8B28",
                              borderColor: "#0C8B28",
                              borderWidth: "1px",
                            }}
                            w="100%"
                            bg="#0C8B28"
                            color="white"
                            type="submit"
                          >
                            Sign Up
                          </Button>
                       
                      </Form>
                    )}
                  </Formik>
                </Flex>
                <Box w="50%" display={{ base: "none", lg: "block" }}>
                  <Image w="100%" h="100%" src={Divine}></Image>
                </Box>
              </Flex>
            </div>
          </>
        );
    }
}