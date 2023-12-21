import { ActivityIndicator } from 'react-native'
// import CategoriesScreen from './src/screens/CategoriesScreen'
// import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen'
// import ProductDetailScreen from './src/screens/ProductDetailScreen'
import Navigator from './src/navigation/Navigator';
import { useFonts } from 'expo-font'
import { useState } from 'react';
 
export default function App() {
  const [categorySelected, setCategorySelected] = useState('')
  const [productIdSelected, setProductIdSelected] = useState(null)

  console.log("Categoria Seleccionada:", categorySelected)

  const [fontLoaded] = useFonts({
    'Barlow-Regular': require('./assets/fonts/Barlow-Regular.ttf'),
    'Barlow-Bold': require('./assets/fonts/Barlow-Bold.ttf'),
    'Whisper-Regular': require('./assets/fonts/Whisper-Regular.ttf'),
    'Silkscreen-Bold': require('./assets/fonts/Silkscreen-Bold.ttf'),
    'Silkscreen-Regular': require('./assets/fonts/Silkscreen-Regular.ttf'),
    'Oswald-ExtraLight': require('./assets/fonts/Oswald-ExtraLight.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  const onSelectProductId = (productId) => {
    setProductIdSelected(productId)
  }

  return (
    <>
      <Navigator />
    </>
  );
}
