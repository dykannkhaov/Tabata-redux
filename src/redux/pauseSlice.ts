import { createSlice } from '@reduxjs/toolkit'

export interface pauseState {
  value: number
}

const initialState: pauseState = {
  value: 30,
}

export const pauseSlice = createSlice({
  name: 'pause',
  initialState,
  reducers: {
    pauseDecrement: (state) => {
      state.value -= 1
    },

    pauseReset: (state) => {
      state.value = initialState.value
    },
  },
})

export const { pauseDecrement, pauseReset } = pauseSlice.actions
export default pauseSlice.reducer
