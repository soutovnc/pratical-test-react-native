import { TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Container } from './styles'
import theme from '../../global/theme'

export function SearchInput() {
  return (
    <Container>
      <TextInput placeholder='Qual livro você gostaria de ler hoje?' />
      <MaterialIcons name='search' size={24} color={theme.colors.gray400} />
    </Container> 
  )
}