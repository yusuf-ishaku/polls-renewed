import {createSlice} from "@reduxjs/toolkit";

export const candidateSlice = createSlice({
    name: 'candidate',
    initialState: [],
    reducers: {
        updateCandidate: (state, action) =>{
            state.push(action.payload);
            console.log(state);
        }
    }
});
export const {updateCandidate} = candidateSlice.actions;