import React, { createContext, useContext, useState } from 'react';
import {  UserData } from '../../models/index';

const UserContext = createContext(
  {} as {
    userData: UserData ;
    setUser: React.Dispatch<React.SetStateAction<UserData>>;
  }
);

interface Props {
  children: React.ReactNode;
}

const UserProvider = (props:Props) => {
  const [userData, setUser] = useState<UserData>({} as UserData);

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
