import * as S from './styles'

export function Input({value,onChange,error,onBlur, name, label, type}) {
  
  return (
    <S.ContainerInput>
      
      <S.InputStyles
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={type}
        error={error}
      />
      <label htmlFor={name}>{label}</label>
      {error && <p>{error}</p>}
    </S.ContainerInput>
    
  )
}