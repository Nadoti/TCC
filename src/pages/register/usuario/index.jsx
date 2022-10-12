import * as S from '../../../styles/register/usuario/styles'
import Link from 'next/link'
import useForm from '../../../hooks/useForm'

// {
//   "extends": ["next/babel","next/core-web-vitals"]
// }
// {
//   "presets": ["next/babel"],
//   "plugins": [["styled-components", { "ssr": true,"displayName": true,
//     "preprocess": false }]]
//  }  


export default function RegisterUser() {

  //const email = useForm('email')

  return (
    <S.Container>
      
      <S.RegisterContainer>
        <Link href='/'><img src="/images/logoLogin.png" alt="Logo" /></Link>
        
        <S.ContentLogin>
         <S.Title>
          <h2>Registra-se como Usuário</h2>
         </S.Title>
          <S.BundlerInput>
            
          </S.BundlerInput>
          <S.BundlerInput>
            
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