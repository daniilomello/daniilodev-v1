import { Link, AvatarComponent } from './avatar.styled'

function Avatar() {
  return(
    <Link href="/">
      <figure>
        <AvatarComponent 
          src="/eu.jpg" 
          alt="Foto do Danilo de Perfil olhando para baixo"
          width={60}
          height={60}
        />
      </figure>
    </Link>
  )
}

export default Avatar