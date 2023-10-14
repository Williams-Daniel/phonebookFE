import { createSlice } from '@reduxjs/toolkit'

const initialState = {
phoneContact:{} || null
}

const GlobalState = createSlice({
  name: "Global",
  initialState,
  reducers: {
    changeContactState: (state:any,{payload}:any)=>{
        state.phoneContact = payload 
    }
  }
});

export const {changeContactState} = GlobalState.actions

export default GlobalState.reducer