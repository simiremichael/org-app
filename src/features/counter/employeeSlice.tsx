import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { EmployeeModel } from '../../model/EmployeeModel';


interface EmployeeState {
    employee: null | EmployeeModel | undefined;
}

const initialState: EmployeeState = {
    employee: null
   
}


export const employeeSlice = createSlice({
  name: '   EmployeeAuth',
  initialState,
  reducers: {
    setEmployee: (state: any, action: PayloadAction<{ employee: undefined | null | EmployeeModel }>) => {
       state.employee = action.payload.employee;
    }
  }
})
export const selectCurrentEmployee = (state: RootState) => state.employeeState
export const {setEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
