import React, { createContext, useContext, useState } from 'react';
import Alert from '../components/Alert';

const AlertContext = createContext();

export function AlertProvider({ children }) {
  const [alertState, setAlertState] = useState({ 
    show: false, 
    title: '',
    message: '' 
  });

  const showAlert = (title, message) => {
    setAlertState({ show: true, title, message });
    setTimeout(() => {
      setAlertState({ show: false, title: '', message: '' });
    }, 5000);
  };

  const closeAlert = () => {
    setAlertState({ show: false, title: '', message: '' });
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alertState.show && (
        <Alert 
          title={alertState.title}
          message={alertState.message} 
          onClose={closeAlert}
        />
      )}
    </AlertContext.Provider>
  );
}

export const useAlert = () => {
  return useContext(AlertContext);
}; 