import React from 'react';
import StepsScreen from './screens/StepsScreen';

export default function App() {
  const steps = [
    { step: 1, description: '🚫 Rechazar: Evitar productos innecesarios' },
    { step: 2, description: '📉 Reducir: Minimizar consumo' },
    { step: 3, description: '🔁 Reutilizar: Dar segunda vida' },
    { step: 4, description: '♻️ Reciclar: Transformar residuos' },
    { step: 5, description: '⚡ Recuperar: Generar energía' },
  ];

  return <StepsScreen steps={steps} />;
}