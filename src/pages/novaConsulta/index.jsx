import React from 'react'
import { Step } from '../../components/novaConsulta/step/Step'
import { StepControl } from '../../components/novaConsulta/stepControll/StepControl'
import * as S from '../../styles/novaConsulta/styles'

export default function NovaConsulta() {
  const [currentStep, setCurrentStep] = React.useState(1)

  
  const steps = [
    "Formulário Pessoal",
    "Escolha a Data",
    "Pagamento",
    "Confirmar Consulta"
  ]

  function stepDisplayChose(step) {
    switch(step) {
      case 1:
        return "<Account />"
      case 2:
        return "<Details />"
      case 3:
        return "<Final />"
      case 4:
      return "<Confirmar Consulta />"
      default:
    }
  }
  
  const handleClick = (direction) => {
    let newStep = currentStep

    direction === 'next' ? newStep++ : newStep--
    console.log(newStep)
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }

  return (
    <S.NovaConsultaContainer>
      <S.NovaConsultaContent>
        <Step 
          steps={steps}
          currentStep={currentStep}
        />
        <S.MainOptions>
          {stepDisplayChose(currentStep)}
        </S.MainOptions>
      </S.NovaConsultaContent>
      <StepControl 
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </S.NovaConsultaContainer>
  )
}