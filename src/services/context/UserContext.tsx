import React, { createContext, useContext, useState } from 'react';
import {  UserData } from '../../models/index';

const UserContext = createContext(
  {} as {
    userData: UserData | undefined;
    setUser: React.Dispatch<React.SetStateAction<UserData | undefined>>;
  }
);

interface Props {
  children: React.ReactNode;
}

const UserProvider = (props:Props) => {
  const [userData, setUser] = useState<UserData>();

  return ( 
    
    <UserContext.Provider value={{ userData, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser  };
