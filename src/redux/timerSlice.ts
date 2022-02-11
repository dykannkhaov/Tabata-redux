import { createSlice } from '@reduxjs/toolkit'

export interface TimerState {
  value: number
}

const initialState: TimerState = {
  value: 60,
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    timerDecrement: (state) => {
      state.value -= 1
    },

    timerReset: (state) => {
      state.value = initialState.value
    },
  },
})

export const { timerDecrement, timerReset } = timerSlice.actions
export default timerSlice.reducer
