import React from 'react';
import Toast from '../components/Toast';


export const PositionType = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

const ToastContext = React.createContext({
  callToast: (text, { position, isWhiteText, duration, shake, onPress }) => {},
});

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = React.useState(null);

  React.useEffect(() => {
    if (!toast) return;
    const { duration = 1000 } = toast;
    const timeoutId = setTimeout(() => {
      clearTimeout(timeoutId);
      setToast(null);
    }, duration);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [toast]);

  const callToast = React.useCallback((text, options) => {
    setToast({ text, onPress: () => setToast(), ...options });
  }, []);

  const value = React.useMemo(() => {
    return { callToast };
  }, [callToast]);

  return (
    <>
      {toast && <Toast {...toast} />}
      <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
    </>
  );
};

export const useToast = () => {
  return React.useContext(ToastContext);
};
