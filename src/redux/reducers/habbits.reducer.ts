import { createAction, createReducer, current, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { create } from 'domain';
import { IState } from '../../utils/interfaces';
import { RootState } from '../store';


const initialState: IState = {
  habbits: [
    {
      id: "1312qw",
      title: "Esdf",
      complete: false,
    },
    {
      id: "131qw2",
      title: "Csdf",
      complete: true,
    },
    {
      id: "13erter12",
      title: "Asdf",
      complete: false,
    }
  ],
  isLoading: false
}


export const setLoading = createAction<boolean>('setLoading')
export const addHabbit = createAction<any>('addHabbit')
export const removeHabbit = createAction<string>('removeHabbit')
export const performedHabbit = createAction<string>('performedHabbit')
export const resetAll = createAction('resetAll')
export const updateHabbit = createAction<any>('updateHabbit')

export default createReducer(initialState, builder =>
  builder.addCase(setLoading, (state, { payload }) => {
    state.isLoading = payload
  }).addCase(addHabbit, (state, { payload }) => {
    state.habbits.push(payload)
    localStorage.setItem('habbits', JSON.stringify({payload}))
    return state
  }).addCase(removeHabbit, (state, {payload}) => {
    return {
      ...state,
      habbits: [
        ...state.habbits.filter(habbit => habbit.id !== payload),
      ]
    }

  }).addCase(performedHabbit, (state, {payload}) => {
    return {
      ...state,
      habbits: [
        ...state.habbits.map(habbit => {
          if(habbit.id === payload) {
            return {
              ...habbit,
              complete: true
            }
          }
          return habbit
        })
      ]
    }
  }).addCase(resetAll, (state) => {
    return {...state, habbits: []}
  }).addCase(updateHabbit, (state, {payload}:any) => {
    return {
      ...state,
      habbits: [
        ...state.habbits.map(habbit => {
          if(habbit.id === payload.id) {
            return {...habbit, title: payload?.value, id: payload.id}
          }
          console.log(habbit)
          return habbit
        })
      ]
    }
  })

)


export const habbitsSelector = (state: RootState) => state.habbits

