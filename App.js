import CategoriesScreen from './src/screens/CategoriesScreen'
import { useFonts } from 'expo-font'

export default function App() {
  const [fontLoaded] = useFonts({
    'Barlow-regular': require('./assets/fonts/Barlow-Regular.ttf'),
    'Barlow-Bold': require('./assets/fonts/Barlow-Bold.ttf'),
  })

  console.log(fontLoaded)
  
  return (
    <CategoriesScreen />
  );
}
