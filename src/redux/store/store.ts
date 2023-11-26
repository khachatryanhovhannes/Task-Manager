import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasksReducer'
import userReducer from '../features/userReducer'


export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        users: userReducer
    },
})


