import {
    Flex,
    Box,
    Spacer,
    Text,
    Input,
    Image,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Grid
} from "@chakra-ui/react";
import { useState, useEffect } from "react"
import { useDisclosure } from "@chakra-ui/react";
import { Colors } from "../assets/constants/colors.js"
import Liner from "../assets/images/newLiner.png"
import { CandidateForm } from "../components/CandidateForm.jsx";
import { useCreateElectionMutation } from "../assets/app/api/pollsSlice.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const AddElectoralDetails = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [candidateCount, setCandidateCount] = useState(2);
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [options, setOptions] = useState([]);
    const [emailError, setEmailError] = useState("");
    const [titleError, setTitleError] = useState("");
    const navigation = useNavigate()
    let [braddish, setBraddish] = useState([1, 2])
    const emailValidate = (value) => {
        // let error;
        let myRegex = /[a-z+|0-9+]@[a-z]+.com/ig
        let error = myRegex.test(value);
        value = value.trim();
        if (value === "" || value.length <= 2) {
            // setUniveralError("Email is required")
            return "Email is required"
        }
        else if (error) {
            return ""
        } else if (!error) {
            return "Email is invalid"
        }
    };
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
    const [createElection,] = useCreateElectionMutation();
    let candidateValue = useSelector((state) => state.candidate);
    const userData = JSON.parse(localStorage.getItem("userInfo"))
    console.log({ userData });
    // let [numers, setNumers] = useState(candidateValue);
    // console.log(numers);


    const HandleSubmit = async (value) => {

        // createElection(value)
        // console.log(value)
        let data = {
            email,
            title,
            endDate,
            startDate,
            options: value,
            userId: userData?.data.user._id
        }
        // console.log(numers)
        // data.options = numers
        console.log({ data })
        // console.log(value)
        await createElection(data).then((result) => {
            console.log(result)
        })
        onOpen();
    }
    return (
        <>
            <Modal isOpen={isOpen} size={'4xl'} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <Flex h={'10rem'} dir="column" alignItems={'end'} bgSize={'cover'} bgImage={Liner} p="1rem">
                        <Text textTransform={'uppercase'} fontSize={"3xl"} color={'white'} fontWeight="bold">
                            creators dashboard
                        </Text>
                    </Flex>
                    {/* <ModalHeader>Modal Title</ModalHeader> */}
                    {/* <ModalCloseButton /> */}
                    <ModalBody display={'flex'} dir={"row"} alignItems={"center"} justifyContent={"center"}>
                        <Text textTransform={'capitalize'} fontWeight={'bold'} fontSize={'2xl'} my={'10px'}>
                            Election creation successful
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button color={'white'} bgColor={Colors.primary} mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Box className="body" w={'full'} height="fit-content" >
                <Flex h={'16rem'} w={'full'} flexDir={'column'} justifyContent={'end'} p={'1rem'} bgSize={'cover'} bgImage={Liner}>
                    <Text as={'h4'} color={'white'} fontSize={'xl'} fontWeight={'bold'}>
                        Create Upcoming Elections
                    </Text>
                </Flex>
                <Box w="full" p={'2rem'} px={'4rem'}>
                    <Flex flexDir={'row'} justifyContent={'space-between'}>
                        <Text w={'50%'}>Election Enhancement</Text>

                        <Flex w={'50%'} flexDir={'column'}>

                            <FormLabel>Creators Email</FormLabel>
                            <Input
                                _hover={{ borderColor: Colors.primary }}
                                _focus={{ borderWidth: '1px', outline: 'none' }}
                                borderColor={Colors.primary} w={'90%'}
                                borderRadius={'xl'}
                                type="email" placeholder=""
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    setEmailError(emailValidate(e.target.value))
                                }}
                            ></Input>
                            <FormLabel color="red">
                                {emailError}
                            </FormLabel>


                        </Flex>
                    </Flex>
                    <Flex flexDir={'row'} mt={'2rem'} justifyContent={'space-between'}>
                        <Text w={'50%'}>Election Enhancement</Text>

                        <Flex w={'50%'}>
                            <FormControl w={'100%'}>
                                <FormLabel>Election name</FormLabel>
                                <Input
                                    _hover={{ borderColor: Colors.primary }}
                                    borderColor={Colors.primary}
                                    w={'90%'}
                                    borderRadius={'xl'}
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => {
                                        setTitle(e.target.value);
                                        setTitleError(userNameValidate(e.target.value))
                                    }}
                                ></Input>
                                <FormLabel color="red">
                                    {titleError}
                                </FormLabel>
                                <Text as={'h3'} mt={'1rem'} color={'gray.300'} fontSize={'1.2rem'} my={'0.4rem'}>Registration Dates and Times</Text>
                                <Flex flexDir={'row'} w={'100%'}>
                                    <Box w={'50%'}>
                                        <FormLabel>Start Date</FormLabel>
                                        <Input onChange={(e) => {
                                            setStartDate(e.target.value)
                                        }} type="date" w={'100%'} _hover={{ borderColor: Colors.primary }} _focus={{ borderWidth: '1px', outline: 'none' }} borderColor={Colors.primary} borderRadius={'xl'} placeholder=""></Input>
                                    </Box>
                                    <Box w={'50%'}>
                                        <FormLabel>End Date</FormLabel>
                                        <Input onChange={(e) => {
                                            setEndDate(e.target.value);
                                        }} type="date" w={'100%'} _hover={{ borderColor: Colors.primary }} _focus={{ borderWidth: '1px', outline: 'none' }} borderColor={Colors.primary} borderRadius={'xl'} placeholder=""></Input>
                                    </Box>
                                </Flex>
                                <Text as={'h3'} color={'gray.300'} my={'0.4rem'} mt={'2rem'} fontSize={'1.2rem'} >Election Dates and Times</Text>
                                <Flex flexDir={'row'} w={'100%'}>
                                    <Box w={'50%'}>
                                        <FormLabel>Date</FormLabel>
                                        <Input type="date" w={'100%'} _hover={{ borderColor: Colors.primary }} _focus={{ borderWidth: '1px', outline: 'none' }} borderColor={Colors.primary} borderRadius={'xl'} placeholder=""></Input>
                                    </Box>
                                </Flex>
                            </FormControl>

                        </Flex>
                    </Flex>

                    <Text as={'h3'} mt={'2rem'}>Candidates/Participants</Text>
                    <Grid
                        templateRows={"repeat(2, 50%)"}
                        templateColumns={"repeat(2, 50%)"}
                        gap={7}
                        width={'80%'}
                        // height={'10rem'}
                        mb={"2rem"}
                        bg='white'
                    >
                        {braddish.map((x, y) => {
                            return (
                                <CandidateForm key={y} par={x}></CandidateForm>
                            )
                        })}
                    </Grid>
                    <Flex flexDir={'row'} justifyContent={'center'} alignItems={'center'} w={'full'} mt={'4rem'}>
                        <Button
                            bg={'white'}
                            w={'fit-content'}
                            borderColor={Colors.primary}
                            px={'1rem'}
                            color={Colors.primary}
                            borderWidth={'1px'}
                            onClick={() => setBraddish([...braddish, braddish.length])}
                        >
                            Add Candidates
                        </Button>
                    </Flex>
                    <Flex flexDir={'row'}  >
                        <Button onClick={() => navigation("/dashboard")} bg={'white'} pr={'auto'} w={'fit-content'} borderColor={Colors.primary} px={'1rem'} color={Colors.primary} borderWidth={'1px'}>
                            Back
                        </Button>
                        <Spacer />
                        <Button onClick={() => HandleSubmit(candidateValue)}
                            bg={Colors.primary} w={'fit-content'} borderColor={Colors.primary} px={'1rem'} color={'white'} borderWidth={'1px'}>
                            Done
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}