import { View } from 'react-native'
import theme from '../../global/theme'
import { CategoryName, ContainerCategories } from './styles'

export function Category() {
  return (
    <ContainerCategories>
      <View style={
        {
          marginRight:12,
          height: 74,
          width: 74,
          backgroundColor: theme.colors.orange,
          borderRadius: 4,
          elevation: 5
        }
      }/>
      <CategoryName>Biologia</CategoryName>
    </ContainerCategories>
  )
}