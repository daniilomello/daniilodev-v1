import HeaderComponent from './header.styled'

import Avatar from '../Avatar/avatar.component'
import Link from '../Link/link.component'

function Header(){
  return(
    <HeaderComponent>
      <Avatar />
      <Link url="/" texto="Agende uma ligação" corTexto="#CCD6F6" />
    </HeaderComponent>
  )
}

export default Header