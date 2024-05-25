import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search:'',
};

export const SearchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        searchitm:(state,action)=>{
            state.search = action.payload;
        }
    }
})
 export const {searchitm} = SearchSlice.actions;
 export default SearchSlice.reducer;