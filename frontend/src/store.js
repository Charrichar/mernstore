import {  combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({})

const initialState = {}

const store = configureStore({
    reducer, initialState
})