import * as S from './styles'
import {Notification} from '../notification/Notification'
import React from 'react'

export function MenuSettings() {
  const [dropdownMenu, setDropdownMenu] = React.useState(false)

  function handleOpenDropdownMenu() {
    setDropdownMenu(!dropdownMenu)
  }

  return (
    <S.Container>
      <S.NameClient>Mariana Santos</S.NameClient>
      <S.BtnSettings onClick={handleOpenDropdownMenu}>
        <S.Image src="/images/foto.png" alt="" />
      </S.BtnSettings>
      <Notification />

    {dropdownMenu && (<S.DropdownMenu>
        <a href="">Painel</a>
        <a href="">Configurações</a>
      </S.DropdownMenu>)}
      
    </S.Container>
  )
}