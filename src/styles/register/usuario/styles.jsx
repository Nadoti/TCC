import styled from "styled-components";


export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: #E0EDE6;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`

export const RegisterContainer = styled.div`
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  img {
    cursor: pointer;
    margin-bottom: 40px;
  }

  p {
    font-size: 18px;
    font-family: sans-serif;
    color: #969997;
    margin-top: 20px;
    

    a {
      text-decoration: underline;
      color: #21A980;
      transition: all .2s ease;

      &:hover {
        color: #000;
      }
    }
  }
  
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  
`


export const ContentLogin = styled.div`
  
  border: 2px solid #B4E4CA;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  
`

export const Title = styled.div`
  margin-bottom: 40px;
  text-align: center;
  h2 {
    font-size: 40px;
    font-family: sans-serif;
    color: #21A980;
    padding: 40px 80px 0 20px;
    margin-bottom: 20px;
  }
`

export const BundlerInput = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 0 10px;
  margin-bottom: 40px;
  
`