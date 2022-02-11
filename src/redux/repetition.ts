import { createSlice } from '@reduxjs/toolkit'

export interface repetitionState {
  value: number
}

const initialState: repetitionState = {
  value: 0,
}

export const repetitionSlice = createSlice({
  name: 'repetition',
  initialState,
  reducers: {
    repetitionIncrement: (state) => {
      state.value += 1
    },
  },
})

export const { repetitionIncrement } = repetitionSlice.actions
export default repetitionSlice.reducer
