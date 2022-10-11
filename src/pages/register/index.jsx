import * as S from './styles'
import Link from 'next/link'
import { RiUser2Fill, RiUser3Fill } from "react-icons/ri";

export default function Register() {


  return (
    <S.Container>
      
      <S.RegisterContainer>
        <Link href='/'><img src="/images/logoLogin.png" alt="Logo" /></Link>
        <S.ContentLogin>
          <h2>Registra-se</h2>
          <span>Registre em sua conta pelo link abaixo.</span>

          <S.ContentRouter>
            <a href="/register/usuario"><RiUser3Fill/>Usuário</a>
            <a href="/register/professional"><RiUser2Fill/>Profissional</a>
          </S.ContentRouter>
        </S.ContentLogin>
        <p>Já é cadastrado ? Entre <Link href="/login">aqui</Link> </p>
      </S.RegisterContainer>
      <S.ImgContainer>
        <S.Img src='./images/register.png' alt='Registrar'/>
      </S.ImgContainer>
    </S.Container>
  )
}