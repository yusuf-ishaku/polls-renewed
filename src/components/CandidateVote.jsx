import {GridItem, Box, Image, Text,Button} from "@chakra-ui/react";

export const CandidateVote = () =>{
    return(
        <GridItem
        // bg={'yellow'}
        height={'9rem'}
        rounded='md'
        borderWidth='2px'
        p={'2'}
        display={'flex'}
        >
            <Box
             borderWidth={"2px"}
             width={"40%"}
             h={'full'}
             rounded="md"
            >
               <Image>
                
               </Image>
            </Box>      
            <Box
            pl={'3'}
            width={"60%"}
            >
                <Text
                fontSize={'md'}
                fontWeight={"bold"}
                >
                    Adeniyi
                </Text>
                <Text
                fontSize={"sm"}>Male</Text>
                <Text  fontSize={"sm"}>400 Level</Text>
                <Text  fontSize={"sm"}>Computer Science</Text>
                <Button  fontSize={"sm"} fontWeight={"normal"} w={"100%"} h={"1.5rem"} p={"0"} bg={"green"} color={"white"}>Vote</Button>
            </Box>
        </GridItem>
    )
}