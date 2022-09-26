import { StatusBar } from "react-native";
import {
  Container,
  HeaderHome,
  ContainerTextHeader,
  TextHeader,
  ContainerAvatarHeader,
  Avatar
} from "./styles"

export function Home() {
  return (
    <Container>
      <StatusBar 
        backgroundColor="#FFF"
        translucent
        barStyle="dark-content"
      />

      <HeaderHome>
        <ContainerTextHeader>
          <TextHeader>Olá, Vínicius!</TextHeader>
        </ContainerTextHeader>
        <ContainerAvatarHeader>
          <Avatar 
            source={{
              uri: "https://avatars.githubusercontent.com/u/54877403?v=4"
            }}
          />
        </ContainerAvatarHeader>
      </HeaderHome>
    </Container>
  )
}