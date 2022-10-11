import * as S from './styles'
import React from 'react'
import {BsBell} from 'react-icons/bs'
import {BsBellFill} from 'react-icons/bs'

export function Notification() {
  const [dropdownNotification, setDropdownNotification] = React.useState(false)

  function handleOpenDropdownNotification() {
    setDropdownNotification(!dropdownNotification)
  }


  return (
    <S.Container>
      <S.NotificationButton background={dropdownNotification} onClick={handleOpenDropdownNotification}>
        {dropdownNotification 
          ? (<BsBellFill fontSize="25px"/>) 
          : (<BsBell fontSize="25px"/>)}
      </S.NotificationButton>

      {dropdownNotification 
        && 
        (<S.NotificationDropdown>
          <S.TitleNotificationContainer>
            <h2>Suas notificações</h2>
            <S.ClearNotification>Clear all</S.ClearNotification>
          </S.TitleNotificationContainer>

          <S.Teste>
            teste
          </S.Teste>
        </S.NotificationDropdown>)}
    </S.Container>
  )
}