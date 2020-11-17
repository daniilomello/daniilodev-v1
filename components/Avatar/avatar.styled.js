import styled from 'styled-components'
import Image from 'next/image'

export const Link = styled.a`
  width: 60px;
  height: 60px;
  display: block;
  transition: all 1s ease;
  &:hover{
    transform: translateY(-10px);
    transition: all 1s ease;
  }
`

export const AvatarComponent = styled(Image)`
  border-radius: 60px; 
`

