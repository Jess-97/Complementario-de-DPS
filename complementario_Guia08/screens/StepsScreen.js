import React, { useState, useEffect } from 'react';
import StepScreen from './StepScreen';
import HomeScreen from './HomeScreen';

export default function StepsScreen({ steps }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  if (currentStep < steps.length) {
    return <StepScreen description={steps[currentStep].description} />;
  }

  return <HomeScreen />;
}