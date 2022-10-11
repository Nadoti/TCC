import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  position: relative;
`

export const NotificationButton = styled.button`
  border: none;
  background: none;
`

export const NotificationDropdown = styled.div`
  position: absolute;
  text-align: center;
  background: #26282C;
  opacity: .9;
  border-radius: 5px;
  margin-left: 20px;
  box-shadow: 4px 4px 20px 5px rgba(0, 0, 0, 0.25);
  width: 300px;
  height: 300px;
  animation: show-up .3s forwards;
  



  @keyframes show-up {
    from {
      transform: translate3d(0,30px,0);
    }
    to {
      transform: translate3d(0,0,0);
    }
  }

  h2 {
    color: #999B9F ;
    
    font-size: 1rem;
    
    font-family: Roboto;
    text-align: left;
  }

`

export const TitleNotificationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #EAE7EC;
  width: 100%;
  padding: 10px;
`

export const ClearNotification = styled.button`
  border: none;
  background: none;
  color: #377A6B;
  font-weight: bold;
  font-family: roboto;

  &:hover {
    text-decoration: underline;
  }
`

export const Teste = styled.div`
  padding: 10px 0;
  width: 100%;
`