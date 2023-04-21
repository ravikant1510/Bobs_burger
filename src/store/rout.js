import { createSlice, configureStore } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
    name :"bobs",
    initialState : {
        users:null,
        skip:0,
        limit:10,
        btnState:1,
    },
    reducers:{
        setData(state,action){
            state.users = action.payload;
        },
        setNext(state){
            state.skip = +state.skip + +state.limit;
        },
        setPrev(state){
            state.skip = +state.skip - +state.limit;
            if(state.skip < 0){
                state.skip =0;
            }
        },
        setLimit(state, action){
            state.limit = action.payload;
        },
        setSkip(state , action){
            state.skip = action.payload;
        }
    }
})

const store = configureStore({
    reducer:cartSlice.reducer
});

export const cartActions = cartSlice.actions;
export default store;
