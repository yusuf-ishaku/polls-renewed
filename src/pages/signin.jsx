/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useLoginUserMutation } from "../assets/app/api/authApiSlice";
import { Flex, Box, Spacer, Text, Input, Image, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Divine from "../assets/images/liner.png";
import { Link, Navigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { Field, Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../assets/app/slices/authSlice";
export const SignIn = () =>{
    const [eyeopen, setEyeOpen] = useState(false);
    const [auth, setAuth ] = useState(false);
    const[fetchState, setFetchState] = useState('');
    const [clicked, setClickedState] = useState(true);
    // let navigate = useNavigate();
    let dispatch = useDispatch();
    useEffect(() =>{
      setAuth(sessionStorage.getItem("pollsAuthState") || null);
      
      // return sessionStorage.removeItem("pollsAuthState")
    }, [])
    const usernameValidation = (value) =>{
        let error;
        if(value === '' || !value){
            error = "Username is required";
            // alert(error)
        }else{
            error = "";
            // alert(error)
        }
        return error;
    }
    const passwordValidate = (value) =>{
      let error;
      if(value < 5){
        error = "Password is more than five characters";
      }else if(!value){
        error = "Password is required";
      }
      return error;
    }
    const [addNewUser, {isLoading, data}] = useLoginUserMutation();
    const HandleSubmit = async (value) => {
      let packet = {
        username: value.username.trim(),
        password: value.password.trim(),
     
      }
      await addNewUser(packet).then((result) =>{
        // console.log(result)
        if(data?.message == "Login successful"){
          sessionStorage.setItem("pollsAuthState", JSON.stringify(true));
           setAuth(JSON.parse(sessionStorage.getItem("pollsAuthState")));
           dispatch(login(packet));
        }
      });
    }
    // console.log(result.isLoading)
    if(auth){
        return  <Navigate replace to="/dashboard"/> 
    }else{
    return (
      <>
        <div className="body">
          <Flex h={"100vh"} w={"100vw"}>
            <Flex
              w={{ base: "100%", lg: "50%" }}
              m={"10rem"}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                w={"100%"}
                mb={"0.6rem"}
                textAlign={"left"}
                fontSize={"14px"}
              >
                New Here?{" "}
                <Link
                  style={{ textDecoration: "underline", color: "green" }}
                  to={"/signup"}
                >
                  Create an account
                </Link>
              </Text>
              <Text
                w={"100%"}
                textAlign={"left"}
                mb={"1.5rem"}
                fontSize={"28px"}
              >
                Welcome Again!
              </Text>
              <Formik
                initialValues={{ username: "", password: "" }}
                validateOnChange={true}
                onSubmit={HandleSubmit}
              >
                {(props) => (
                  <Form style={{ width: "100%" }}>
                    {fetchState !== '' && <Text color={'red'} border={"1px"} w={'full'} borderColor={"red"} p={'0.5rem'}>{fetchState}</Text>}
                    <Field name="username" validate={usernameValidation}>
                      {(props) => (
                        <FormControl
                          isInvalid={
                            props.form.errors.username && props.form.touched.username
                          }
                        >
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
                          ></Input>

                          <FormErrorMessage w={"full"} textColor={"red"}>
                            {props.form.errors.username}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password" validate={passwordValidate}>
                      {(props) => (
                        <FormControl isInvalid={props.form.errors.password && props.form.touched.password}>
                          <FormLabel
                            mt={"1.4rem"}
                            ml={"0.3rem"}
                            fontWeight={"semibold"}
                            fontSize={"16px"}
                          >
                            Password
                          </FormLabel>

                          <Flex alignItems="center" justifyContent="right">
                            <Input
                              {...props.field}
                              zIndex="0"
                              position="absolute"
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
                              ></AiFillEyeInvisible>
                            )}
                          </Flex>
                          <FormErrorMessage>{props.form.errors.password}</FormErrorMessage>
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
                    {isLoading ? <Button
                        _active={{ bg: "#0C8B28", color: "white" }}
                        _hover={{
                            bg: "grey",
                            color: "white",
                            // borderColor: "#0C8B28",
                            borderWidth: "1px",
                        }}
                        isLoading
                        w="100%"
                        bg="#0C8B28"
                        color="white"
                        // h={"4rem"}
                        type="submit"
                    >
                        Log In
                    </Button>
                    :
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
                        // h={"4rem"}
                        type="submit"
                    >
                        Log In
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