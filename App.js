import CategoriesScreen from './src/screens/CategoriesScreen'
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen'
import { useFonts } from 'expo-font'

export default function App() {
  const [fontLoaded] = useFonts({
    'Barlow-Regular': require('./assets/fonts/Barlow-Regular.ttf'),
    'Barlow-Bold': require('./assets/fonts/Barlow-Bold.ttf'),
    'Whisper-Regular': require('./assets/fonts/Whisper-Regular.ttf'),
    'Silkscreen-Bold': require('./assets/fonts/Silkscreen-Bold.ttf'),
    'Silkscreen-Regular': require('./assets/fonts/Silkscreen-Regular.ttf'),
  })

  return (
    <ProductsByCategoryScreen />
  );
}
