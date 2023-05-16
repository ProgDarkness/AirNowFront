import React from 'react'
import Home from './src/pages/home'
import { NativeRouter } from 'react-router-native'
import { NativeBaseProvider } from 'native-base'

export default function App() {
  return (
    <NativeRouter>
      <NativeBaseProvider>
        <Home />
      </NativeBaseProvider>
    </NativeRouter>
  )
}
