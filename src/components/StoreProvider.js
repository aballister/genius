'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store'

export default function StoreProvider({ children }) {
    const storeRef = useRef(null)
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = configureStore;
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}