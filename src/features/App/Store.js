import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../App/counterslice';


export const store = configureStore({
    reducer: {
        counter:counterReducer,
    },
  })

  