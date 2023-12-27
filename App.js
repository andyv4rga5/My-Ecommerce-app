import { ActivityIndicator } from 'react-native'
import { useFonts } from 'expo-font'
import TabNavigator from './src/navigation/TabNavigator'
 
export default function App() {

  const [fontLoaded] = useFonts({
    'Barlow-Regular': require('./assets/fonts/Barlow-Regular.ttf'),
    'Barlow-Bold': require('./assets/fonts/Barlow-Bold.ttf'),
    'Whisper-Regular': require('./assets/fonts/Whisper-Regular.ttf'),
    'Silkscreen-Bold': require('./assets/fonts/Silkscreen-Bold.ttf'),
    'Silkscreen-Regular': require('./assets/fonts/Silkscreen-Regular.ttf'),
    'Oswald-ExtraLight': require('./assets/fonts/Oswald-ExtraLight.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  return (
      <TabNavigator />
  );
}
