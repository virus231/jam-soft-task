import { RootState } from './../store';
import { createAction, createReducer } from '@reduxjs/toolkit';


interface IInfoAlert {
    visible: boolean,
    text: string,
    type: string
}

const initialState: IInfoAlert = {
    visible: false,
    text: '',
    type: ''
}

export const showAlert = createAction('showAlert')
export const hideAlert = createAction('hideAlert')


export default createReducer(initialState, builder => 
    builder.addCase(showAlert, (state, {payload}) => {
        state.visible = true
    }).addCase(hideAlert, (state, {payload}) => {
        state.visible = false
    }) 
    
    
)

export const alertsSelector = (state: RootState) => state.alerts
