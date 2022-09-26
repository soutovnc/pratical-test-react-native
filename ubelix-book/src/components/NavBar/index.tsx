import { NavBarContainer, NavBarIcon } from './styles'

export function NavBar() {
  return (
    <NavBarContainer>
      <NavBarIcon source={require("../../assets/home.png")}/>
      <NavBarIcon source={require("../../assets/books.png")}/>
      <NavBarIcon source={require("../../assets/favorite.png")}/>
      <NavBarIcon source={require("../../assets/audio.png")}/>
    </NavBarContainer>
  )
}