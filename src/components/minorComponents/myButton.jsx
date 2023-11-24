/* eslint-disable react/prop-types */
import {Button, Text, Flex} from "@chakra-ui/react";
import { RiAddFill } from "react-icons/ri";
import  {Colors} from "../../assets/constants/colors.js";
export const MyButton = (props) =>{
    return(
        <>
        <Button w={"full"} _hover={{bg: "white", borderColor: Colors.primary, color: Colors.primary, borderWidth: "1px"}} flex={"row"} justifyContent={"center"} h={"3.5rem"} color={"white"} alignItems={"center"} mb={"1.5rem"} bg={props.bgCol}>
            
                <Flex  direction={"row"} alignItems={"center"}  w={"fit"} > 
                    {props.add ? <RiAddFill size={"23px"}></RiAddFill>: ""}<Text ml={"0.4rem"}>{props.textInfo}</Text>
                </Flex>
            
        </Button>
        </>
        
    )
}