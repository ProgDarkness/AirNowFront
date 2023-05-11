Aplicacion desarrollada con ReactNative con ambiente en Expo y Framework NativeBase

# NativeBase Expo Template

The official NativeBase template for [NativeBase](https://docs.nativebase.io/getting-started)
The official Expo template for [Expo](https://docs.expo.dev/)
The official ReactNative template for [ReactNative](https://reactnative.dev/docs/getting-started)

# CREATE PROJECT

# Instalar Expo

```sh
npm install -g expo-cli
```

Este recurso solo se ejecutara una vez al crear el ambiente (en este caso ya esta instalados los paquetes).

# Created Template

```sh
npx create-expo-app AirNow --template @native-base/expo-template
```

Este recurso solo se ejecutara una vez al crear el ambiente (en este caso ya esta instalados los paquetes).

# Actualizar Expo

```sh
expo upgrade
```

Este recurso solo se ejecutara una vez al crear el ambiente (en este caso ya esta instalados los paquetes).

# Si hay error con react native

```sh
npx expo install react-native@0.71.7
```

Este recurso solo se ejecutara una vez al crear el ambiente (en este caso ya esta instalados los paquetes).

# Si hay errores con el Empaquetado Web

Recuerde ejecutar los comandos uno por uno para no causar errores.

```sh
npm uninstall native-base
npx expo install native-base@3.4.28
npm install react-router-native
npm install react-native-web
npm install @expo/webpack-config -D
```

Crear el archivo [webpack.config.js] con la siguiente configuracion

```sh
const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)

  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: [path.join(__dirname, 'node_modules/react-router-native')]
  })

  return config
}
```

Este recurso solo se ejecutara una vez al crear el ambiente (en este caso ya esta instalados los paquetes).
