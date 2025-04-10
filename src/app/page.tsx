'use client'


import { useState } from "react";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import PersonalInfo from "./form/personalinfo/page";
import AddressInfoStep from "./form/adressInfo/page";
import AccountSetupStep from "./form/accountInfo/page";
import Summary from "./form/summary/page";

export default function Page() {
  const [data, setData] = useState({});
  const updateData = (newData: any) => setData(prev => ({ ...prev, ...newData }));

  const { step, currentStepIndex, isFirstStep, isLastStep, next, back } = useMultiStepForm([
    <PersonalInfo key="1" onNext={(d) => { updateData(d); next(); }} defaultValues={data} />,
    <AddressInfoStep key="2" onNext={(d) => { updateData(d); next(); }} defaultValues={data} />,
    <AccountSetupStep key="3" onNext={(d) => { updateData(d); next(); }} defaultValues={data} />,
    <Summary key="4" data={data} onSubmit={() => console.log("Submitted:", data)} />
  ]);

  return (
    <div className="bg-gradient-to-br from-sky-100 to-white">
      <div className="max-w-lg mx-auto p-4">
      {step}
      {!isFirstStep && currentStepIndex < 4 && (
        <button onClick={back} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition w-full mt-4">Previous</button>
      )}
    </div>
    </div>
  );
}
