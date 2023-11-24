import { Grid, GridItem, Box, Text, Button} from "@chakra-ui/react"
import { CandidateVote} from "./CandidateVote"
export const Ballot = () =>{
    return (
        <Grid
        templateRows={"repeat(2, 50%)"}
        templateColumns={"repeat(2, 50%)"}
        gap={4}
        width={'80%'}
        // height={'10rem'}
        mb={"2rem"}
        bg='white'
        >
            <CandidateVote></CandidateVote>
            <CandidateVote></CandidateVote>
            <CandidateVote></CandidateVote>
            <CandidateVote></CandidateVote>
        </Grid>
    )
};