import { useFonts } from 'expo-font'
import About from './screens/About'
import Home from './screens/Home'

export default function App() {
  const [loaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito/static/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito/static/Nunito-Bold.ttf'),
  })
  if (!loaded) return
  return <Home />
}
