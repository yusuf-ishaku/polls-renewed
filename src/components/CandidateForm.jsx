import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';

import { Input, Button } from '@chakra-ui/react';
import { Colors } from '../assets/constants/colors';
import { useDispatch, useSelector } from "react-redux";
import { useState, } from "react";
// import createCand
import { updateCandidate } from '../assets/app/slices/candidateSlice';
import ImageUploader from './imageUploader';
export const CandidateForm = ({ par }) => {
    // console.log(par)

    let value = useSelector((state) => state.candidate);
    // console.log(value);
    let dispatch = useDispatch();
    let [packet, setPacket] = useState({});
    let updatePacket = (name, value) => {
        packet[name] = value;
        setPacket(packet)
    }
    return (
        <FormControl mt={'2rem'} w={'100%'}>
            <FormLabel>Name of Candidate</FormLabel>
            <Input
                type="text"
                _hover={{ borderColor: Colors.primary }}
                _focus={{ borderWidth: '1px', outline: 'none' }}
                borderColor={Colors.primary} w={'100%'}
                borderRadius={'md'}
                placeholder=""
                onChange={(e) => updatePacket("name", e.target.value)}
            ></Input>
            <FormLabel>Gender</FormLabel>
            <Input
                type="text"
                _hover={{ borderColor: Colors.primary }}
                _focus={{ borderWidth: '1px', outline: 'none' }}
                borderColor={Colors.primary} w={'100%'}
                borderRadius={'md'}
                placeholder=""
                onChange={(e) => updatePacket("gender", e.target.value)}
            ></Input>
            <FormLabel>Region/Level</FormLabel>
            <Input
                type="text"
                _hover={{ borderColor: Colors.primary }}
                _focus={{ borderWidth: '1px', outline: 'none' }} borderColor={Colors.primary}
                w={'100%'} borderRadius={'md'} placeholder=""
                onChange={(e) => updatePacket("level", e.target.value)}
            ></Input>
            <FormLabel>Party Affiliation/Department/Group</FormLabel>
            <Input
                type="text" _hover={{ borderColor: Colors.primary }}
                _focus={{ borderWidth: '1px', outline: 'none' }} borderColor={Colors.primary}
                w={'100%'} borderRadius={'md'} placeholder=""
                onChange={(e) => updatePacket("department", e.target.value)}
            ></Input>
            <ImageUploader onImageUpload={(e) => updatePacket("imageUrl", e)} />
            <Button display={'block'} mt={'1.5rem'} bgColor={'white'} width={'50%'} borderColor={Colors.primary} borderWidth={'1px'}>
                Insert Image
            </Button>
            <Button mt="3"
                onClick={() => {
                    console.log(packet);
                    dispatch(updateCandidate(packet));

                }}
            >
                Update Candidate
            </Button>
        </FormControl>
    )
}