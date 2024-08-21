import { useState } from "react";


// os steps é para gerenciar os passos nos forms, 
//temos esse argumento na inicilização do hook
// para enviar para o usuário o passo correto

export function useForm(steps) { 
    // em qual etapa do form está?
    const [currentStep, setCurrentStep] = useState(0)

    function changeStep(i, e) { // índice vai ser passado e o evento da ação 
        if (e) e.preventDefault()

        if(i < 0 || i>= steps.length) return

        setCurrentStep(i)
    }

    return {
        currentStep,
        currentComponent: steps[currentStep], 
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false,

    }
}