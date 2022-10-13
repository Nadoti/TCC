import * as S from './styles'
import React from 'react'

export function Input({value,onChange,error,onBlur, name, label, type,pattern, typeMain}) {
  const [focus, setFocus] = React.useState(false)

  return (
    <S.ContainerInput>
      
      <S.InputStyles
        maxLength="10"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={() => {
          if(typeMain === 'confirmaPassword') {
            setFocus(true)
            return
          } else {
            onBlur()
          }
          
        }}
        placeholder={type}
        error={error}
        onFocus={() => {
          if(typeMain === 'confirmaPassword' && value.length > 0) {
            setFocus(true)
          }
          //typeMain === 'confirmaPassword' && setFocus(true)
        }}
      />
      <label htmlFor={name}>{label}</label>
      {error && <p>{error}</p>}
      {focus && typeMain === 'confirmaPassword' && (pattern !== value) && <p>A confirmação de senha não confere.</p>}
    </S.ContainerInput>
    
  )
}