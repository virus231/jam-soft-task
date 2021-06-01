import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { IState } from '../../utils/interfaces';


const initialState: IState = {
  id: 0,
  desc: "",
  isComplete: false,
  isLoading: false
}


export const todosSlice = createSlice({
  name: 'todos', // name used in action types
  initialState, // initial state for the reducer
  reducers: {
    setLoading: (state, { payload }:PayloadAction) => {
      console.log(state, payload, "state payload")
    },
  },
});

export default todosSlice;