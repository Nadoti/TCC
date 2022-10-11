import styled from "styled-components";



export const NameClient = styled.h2`
font-size: 1.125rem;
`

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`

export const BtnSettings = styled.button`
  background: none;
  border: none;
`

export const Image = styled.img`
  width: 50px;
`


export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 50px;
  text-align: center;
  background: #8FBCB1;
  border-radius: 5px;
  animation: show-up .3s forwards;


  @keyframes show-up {
    from {
      transform: translate3d(0,30px,0);
    }
    to {
      transform: translate3d(0,0,0);
    }
  }

  a {
    width: 100%;
    padding: 10px 30px;
    &:hover {
      color: white;
      background: #1F6051;
    }
  }


`