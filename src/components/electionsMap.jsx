import { useGetPollsQuery } from "../assets/app/api/pollsSlice";
import { Elections } from "./Elections";
import {Grid, GridItem} from "@chakra-ui/react"
export const ElectionsMap = () =>{
    const { data } = useGetPollsQuery(); 
    console.log(data)
    return(
        <>
        <Grid width={'100%'} gap={3} gridTemplateColumns={'repeat(2, 50%)'}>
        {data?.map((x, y) =>{
            return (
                <GridItem>
                    <Elections 
                    key={y} 
                    title={x.title}
                    id={x.id}
                    >
                    </Elections>
                </GridItem>
               
            )
        })}
        </Grid>
       
        </>
    )
}