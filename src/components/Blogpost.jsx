import { Flex, Box, Image, Text } from "@chakra-ui/react";
import Blogpost from "../assets/images/blogpost.png"
export const BlogPost = () =>{
    return (
        <>
        <Flex w={"full"} direction={"row"} mt={"0.5rem"} h={"fit"} p={"2"} borderRadius={"0"} borderBottomWidth={"1px"}>
            <Image src={Blogpost} w={"34%"} h={"5rem"}></Image>
            <Box ml={"0.5rem"}>
                <Text as={"article"} fontWeight={"semibold"} fontSize={"lg"} lineHeight={"1.4rem"}>
                History of nigerian elections and advantages of electoral systems
                </Text>
                <Text as={"h3"} fontSize={"sm"}>Author</Text>
            </Box>
        </Flex>
        </>
    )
}