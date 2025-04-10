import { useState } from "react";

export const useMultiStepForm = (steps: React.ReactNode[]) => {
  const [step, setStep] = useState(0);
  return {
    currentStepIndex: step,
    step: steps[step],
    isFirstStep: step === 0,
    isLastStep: step === steps.length - 1,
    next: () => setStep((s) => s + 1),
    back: () => setStep((s) => s - 1),
    goTo: (index: number) => setStep(index),
  };
};
