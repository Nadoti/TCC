import * as S from './styles'
import Link from 'next/link'
import { Input } from '../forms/input/Input'
import useForm from '../../hooks/useForm'
import { Button } from '../forms/button/Button'
import { RiArrowLeftLine, RiLoginBoxLine } from "react-icons/ri";

export function LoginComponent({text, img}) {

  const email = useForm('email')
  const password = useForm('password')

  return (
    <S.Container>
      <S.ImgContainer>
        <S.Img src={img} alt='Login Usuario'/>
      </S.ImgContainer>
      <S.LoginContainer>
        
        <Link href='/' ><img src="/images/logoLogin.png" alt="Logo" /></Link>
        <S.ContentLoginUser>
          <S.Back href="/login" className='back'><RiArrowLeftLine /></S.Back>
          <h2>Entrar como {text}</h2>
          <p>Informe seu email e senha para acessar sua conta.</p>
          <S.Login>
            <Input 
              type="text" 
              value={email.value} 
              onChange={email.onChange} 
              onBlur={email.onBlur}
              name='email'
              label="Email"
              error={email.error}
            />
            <Input 
              type="password"
              value={password.value} 
              onChange={password.onChange} 
              onBlur={password.onBlur}
              name='password'
              label="Senha"
              error={password.error}
            />
            <Button><RiLoginBoxLine />Entrar</Button>
          </S.Login>
          <S.Register>Não é cadastrado? crie sua conta <Link href="/register/usuario">aqui</Link> </S.Register>
        </S.ContentLoginUser>
        
      </S.LoginContainer>
    </S.Container>
  )
}