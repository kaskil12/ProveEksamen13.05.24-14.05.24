import React from 'react';
import ContactForm from '../../prefabs/skjema.tsx';

const App: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default App;
