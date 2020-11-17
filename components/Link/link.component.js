import LinkComponent from './link.styled'

function Link({url, texto, corTexto}){
  return(
    <LinkComponent href={url} corTexto={corTexto}>{texto}</LinkComponent>
  )
}

export default Link