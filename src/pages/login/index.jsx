import * as S from './styles'
import Link from 'next/link'
import { RiUser2Fill, RiUser3Fill } from "react-icons/ri";

export default function Login() {



  return (
    <S.Container>
      <S.ImgContainer>
        <S.Img src='./images/login.png'/>
      </S.ImgContainer>
      <S.LoginContainer>
        <Link href='/'><img src="/images/logoLogin.png" alt="Logo" /></Link>
        <S.ContentLogin>
          <h2>Acesse</h2>
          <span>Entre em sua conta pelo link abaixo.</span>

          <S.ContentRouter>
            <a href="/login/usuario"><RiUser3Fill/>Usuário</a>
            <a href="/login/profissional"><RiUser2Fill/>Profissional</a>
          </S.ContentRouter>
        </S.ContentLogin>
        <p>Não é cadastrado ?<br></br>crie sua conta <Link href="/register">aqui</Link> </p>
      </S.LoginContainer>
      
    </S.Container>
  )
}