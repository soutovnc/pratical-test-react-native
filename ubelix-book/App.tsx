
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { Lato_900Black, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato'

import { ThemeProvider } from 'styled-components'
import theme from './src/global/theme'

import { Home } from './src/screens/Home'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
