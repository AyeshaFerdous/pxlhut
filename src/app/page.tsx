'use client'



import { useState } from "react";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import PersonalInfo from "./form/personalinfo/page";
import AddressInfoStep from "./form/adressInfo/page";
import AccountSetupStep from "./form/accountInfo/page";


export default function Page() {
  const [data, setData] = useState({});
  const updateData = (newData: any) => setData(prev => ({ ...prev, ...newData }));

  const { step, currentStepIndex, isFirstStep, isLastStep, next, back } = useMultiStepForm([
    <PersonalInfo key="1" onNext={(d) => { updateData(d); next(); }} defaultValues={data} />,
    <AddressInfoStep key="2" onNext={(d) => { updateData(d); next(); }} defaultValues={data} />,
    <AccountSetupStep key="3" onNext={(d) => { updateData(d); next(); }} defaultValues={data} />,
    
  ]);

  return (
    <div className="max-w-lg mx-auto p-4">
      {step}
      {!isFirstStep && currentStepIndex < 3 && (
        <button onClick={back} className="btn mt-4">Previous</button>
      )}
    </div>
  );
}
