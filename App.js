import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './src/db';

export default function App() {

  init()
    .then(() => console.log("Database initializated"))
    .catch((tx, error) => console.log(error.message))

  const [fontLoaded] = useFonts({
    'Barlow-Regular': require('./assets/fonts/Barlow-Regular.ttf'),
    'Barlow-Bold': require('./assets/fonts/Barlow-Bold.ttf'),
    'Barlow-Light': require('./assets/fonts/Barlow-Light.ttf'),
    'Whisper-Regular': require('./assets/fonts/Whisper-Regular.ttf'),
    'Silkscreen-Bold': require('./assets/fonts/Silkscreen-Bold.ttf'),
    'Silkscreen-Regular': require('./assets/fonts/Silkscreen-Regular.ttf'),
    'Oswald-ExtraLight': require('./assets/fonts/Oswald-ExtraLight.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
