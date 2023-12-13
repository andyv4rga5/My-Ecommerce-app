import { ActivityIndicator } from 'react-native'
import CategoriesScreen from './src/screens/CategoriesScreen'
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen'
import { useFonts } from 'expo-font'
import { useState } from 'react';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')

  console.log("Categoria Seleccionada:", categorySelected)

  const [fontLoaded] = useFonts({
    'Barlow-Regular': require('./assets/fonts/Barlow-Regular.ttf'),
    'Barlow-Bold': require('./assets/fonts/Barlow-Bold.ttf'),
    'Whisper-Regular': require('./assets/fonts/Whisper-Regular.ttf'),
    'Silkscreen-Bold': require('./assets/fonts/Silkscreen-Bold.ttf'),
    'Silkscreen-Regular': require('./assets/fonts/Silkscreen-Regular.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  return (
    // <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
    <>{
      categorySelected
        ?
        <ProductsByCategoryScreen category={categorySelected} />
        :
        <CategoriesScreen onSelect Category Event={onSelectCategory} />
    }
    </>
  );
}
