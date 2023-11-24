/* eslint-disable no-unused-vars */
import {Flex, Box, Spacer, Text, Input, Image, Button, Heading } from "@chakra-ui/react";
import {BsCheck2, BsThreeDots} from "react-icons/bs";
import Flier from "../assets/images/bg.png";
import { useState } from "react";
import Divine from "../assets/images/manvote.png";
import {Link } from "react-router-dom";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react';
import { Colors } from "../assets/constants/colors";

  export const MoreInfo = () =>{
    return(
        <div className="body"> 
            <Flex flexDirection={"row"}  justifyContent={"center"} alignItems={"center"} pt={"1.2rem"} backgroundImage={Flier} w={"full"} h={"100vh"}>
                <FormControl display={"flex"} flexDirection={"column"} justifyContent={"center"} p={"2rem"} alignItems={"center"} w={{base:"90%", lg: "75%"} } h={"fit"} bgColor={"white"}>
                   <Text as={"h2"}  fontWeight={"normal"} fontSize={"1.6rem"}>Kindly input your electoral details</Text>
                   <Flex flexDirection={"row"} alignItems={"top"}>
                        <Box display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                            <Box borderWidth={"1px"} p={"1"} rounded={"full"} w={"fit"} h={"fit"}>
                                <BsCheck2></BsCheck2>
                            </Box>
                            <Text fontSize={"12px"}>Welcome</Text>
                        </Box>   
                        <Box borderTopWidth={"1px"} width={"10rem"} mt={"0.7rem"}></Box>
                        <Box display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                            <Box bg={"#0C8B28"} borderWidth={"1px"} p={"1"} rounded={"full"} w={"fit"} h={"fit"}>
                                <BsThreeDots color="white"></BsThreeDots>
                            </Box>
                            <Text fontSize={"12px"}>Electoral Details</Text>
                        </Box>
                   </Flex>
                   <Flex width={"75%"} justifyContent={"space-between"}>
                        <Box w={"full"} mr={"1.6rem"}>
                            <Box my={"0.7rem"}>
                                <FormLabel mb={"0.3rem"}>Date of Birth</FormLabel>
                                <Input mt={"0"} w={"full"} type="date"  _placeholder={"gray.600"}></Input>
                            </Box>
                            <Box my={"0.7rem"}>
                                <FormLabel mb={"0.3rem"}>State</FormLabel>
                                <Input w={"full"} type="text" placeholder="Abia"  _placeholder={"gray.600"}></Input>
                            </Box>
                            <Box my={"0.7rem"}>
                                <FormLabel mb={"0.3rem"}>Marital Status</FormLabel>
                                <Input w={"full"} type="text" placeholder="Single"  _placeholder={"gray.600"}></Input>
                            </Box>
                            
                        </Box>
                        <Spacer w={"3rem"}>

                        </Spacer>
                        <Box w={"full"}>
                            <Box my={"0.7rem"}>
                                <FormLabel mb={"0.3rem"}>Gender</FormLabel>
                                <Input w={"full"} type="text" placeholder="Female"  _placeholder={"gray.800"}></Input>
                            </Box>
                            <Box my={"0.7rem"}>
                                <FormLabel mb={"0.3rem"}>L.G.A.</FormLabel>
                                <Input w={"full"} type="text" placeholder="Umuahia"  _placeholder={"gray.600"}></Input>
                            </Box>
                            <Box my={"0.7rem"}>
                                <FormLabel mb={"0.3rem"}>Occupation</FormLabel>
                                <Input w={"full"} type="text"  _placeholder={"gray.600"}></Input>
                            </Box>
                        </Box>
                   </Flex>
                   <Box my={"0.7rem"} w={"75%"}>
                        <FormLabel mb={"0.3rem"}>Occupation</FormLabel>
                        <Input w={"full"} type="text"  _placeholder={"gray.600"}></Input>
                    </Box>
                    <Box my={"0.7rem"} w={"75%"}>
                        <FormLabel mb={"0.3rem"}>NIN</FormLabel>
                        <Input w={"full"} type="text"  _placeholder={"gray.600"}></Input>
                    </Box>
                    <Flex w={"75%"}>
                        <Button bg={"white"} borderWidth={"1px"} borderColor={Colors.primary} color={Colors.primary}>
                            Back
                        </Button>
                        <Spacer></Spacer>
                        <Button bg={Colors.primary} borderWidth={"1px"} borderColor={Colors.primary} color={"white"}>
                            Done
                        </Button>
                    </Flex>
                </FormControl>
                
            </Flex>
        </div>
       
    )
  }