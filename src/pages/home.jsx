import React, { useState, useEffect } from 'react'
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Alert,
  Box
} from 'native-base'
import NativeBaseIcon from '../components/NativeBaseIcon'
import { fetchFastAPIHome } from '../APis/fastAPIs'

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark'
}

// extend the theme
export const theme = extendTheme({ config })

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  )
}

const Home = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = fetchFastAPIHome()
    fetchData.then((res) => {
      setData(res.data.mensaje)
    })
  }, [])

  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <Text>Probando Render</Text>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Box
              _web={{
                _text: {
                  fontFamily: 'monospace',
                  fontSize: 'sm'
                }
              }}
              px={2}
              py={1}
              _dark={{ bg: 'blueGray.800' }}
              _light={{ bg: 'blueGray.200' }}
            >
              App.js
            </Box>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={'xl'}>
              Learn NativeBase
            </Text>
          </Link>
          <Alert
            maxW="400"
            status="info"
            colorScheme="info"
            _dark={{ bg: '#01A9D7' }}
            _light={{ bg: '#39CEF7' }}
          >
            <Text>{data}</Text>
          </Alert>
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  )
}

export default Home
