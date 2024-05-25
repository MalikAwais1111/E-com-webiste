import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category:'',
};

export const CategorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        categorytxt:(state,action)=>{
            state.category = action.payload;
        }
    }
})
 export const {categorytxt} = CategorySlice.actions;
 export default CategorySlice.reducer;