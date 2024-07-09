import React, { createContext, useContext, useState } from 'react';

const StatusBarContext = createContext(
  {} as {
    activeIndex: number | undefined;
    setActiveIndex: React.Dispatch<React.SetStateAction< number >>;
  }
);

interface Props {
  children: React.ReactNode;
}

const StatusBarProvider = (props:Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return ( 
    <StatusBarContext.Provider value={{ activeIndex, setActiveIndex }}>
      {props.children}
    </StatusBarContext.Provider>
  );
};

const useStatusBarContext = () => {
  return useContext(StatusBarContext);
};

export { StatusBarProvider, useStatusBarContext  };
