import { useFonts } from 'expo-font'
import Navigator from './routes/homeStack'

export default function App() {
  const [loaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito/static/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito/static/Nunito-Bold.ttf'),
  })
  if (!loaded) return
  return <Navigator />
}
