import * as S from '../../../styles/register/usuario/styles'
import Link from 'next/link'
import useForm from '../../../hooks/useForm'
import { Input } from '../../../components/forms/input/Input'
import { Button } from '../../../components/forms/button/Button'
import React from 'react'




export default function RegisterUser() {
  const senha = useForm('password')
  const senhaConfirma = useForm('confirmaPassword')

  const inputRegister = [
    {
      id: 1,
      mode: useForm('name'),
      type: 'text',
      label: 'Nome'
    },
    {
      id: 2,
      mode: useForm('email'),
      type: 'email',
      label: 'Email'
    },
    {
      id: 3,
      mode: useForm('dataNascimento'),
      type: 'date',
      label: 'Data de Nascimento'
    },
    {
      id: 4,
      mode: useForm('cep'),
      type: 'text',
      label: 'Cep'
    },
    {
      id: 5,
      mode: useForm('rua'),
      type: 'text',
      label: 'Rua'
    },
    {
      id: 6,
      mode: useForm('numero'),
      type: 'text',
      label: 'Número'
    },
    {
      id: 7,
      mode: useForm('bairro'),
      type: 'text',
      label: 'Bairro'
    },
    {
      id: 8,
      mode: useForm('cidade'),
      type: 'text',
      label: 'Cidade'
    },
    {
      id: 9,
      mode: useForm('estado'),
      type: 'text',
      label: 'Estado'
    },
    {
      id: 10,
      mode: senha,
      type: 'password',
      label: 'Senha'
    },
    {
      id: 11,
      mode: senhaConfirma,
      type: 'password',
      label: 'Confirmar Senha',
      pattern: senha.value
    },
  ]
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRegister)
    console.log(inputRegister[0].mode.valueRef)
  };

  console.log(inputRegister)

  return (
    <S.Container>
      
      <S.RegisterContainer>
        <Link href='/'><img src="/images/logoLogin.png" alt="Logo" /></Link>
        
        <S.ContentLogin onSubmit={handleSubmit}>
         <S.Title>
          <h2>Registra-se como Usuário</h2>
         </S.Title>
          <S.BundlerInput>
            {inputRegister?.map(valor => (
              <Input 
                key={valor.id}
                {...valor.mode}
                label={valor.label}
                placeholder={valor.label}
                type={valor.type}
                pattern={valor?.pattern}
              />
              
            ))}
            
          </S.BundlerInput>
          <Button> Cadastrar </Button>
          
        </S.ContentLogin>
        <p>Já é cadastrado ? Entre <Link href="/login">aqui</Link> </p>
      </S.RegisterContainer>


      <S.ImgContainer>
        <S.Img src='/images/register.png' alt='Registrar'/>
      </S.ImgContainer>

    </S.Container>
  )
}