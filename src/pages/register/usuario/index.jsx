import * as S from './styles'
import Link from 'next/link'
import {Input} from '../../../components/forms/Input/Input'
import useForm from '../../../hooks/useForm'



export default function RegisterUser() {

  const email = useForm('email')

  return (
    <S.Container>
      
      <S.RegisterContainer>
        <Link href='/'><img src="/images/logoLogin.png" alt="Logo" /></Link>
        
        <S.ContentLogin>
         <S.Title>
          <h2>Registra-se como Usuário</h2>
         </S.Title>
          <S.BundlerInput>
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
              type="text" 
              value={email.value} 
              onChange={email.onChange} 
              onBlur={email.onBlur}
              name='email'
              label="Email"
              error={email.error}
            />
          </S.BundlerInput>
          <S.BundlerInput>
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
              type="text" 
              value={email.value} 
              onChange={email.onChange} 
              onBlur={email.onBlur}
              name='email'
              label="Email"
              error={email.error}
            />
          </S.BundlerInput>
          
        </S.ContentLogin>
        <p>Já é cadastrado ? Entre <Link href="/login">aqui</Link> </p>
      </S.RegisterContainer>


      <S.ImgContainer>
        <S.Img src='/images/register.png' alt='Registrar'/>
      </S.ImgContainer>

    </S.Container>
  )
}