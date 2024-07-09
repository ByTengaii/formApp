import React, { createContext, useContext, useState } from 'react';
import {  FormData } from '../../models/index';

const FormContext = createContext(
  {} as {
    formData: FormData| Partial<FormData> | undefined;
    setForm: React.Dispatch<React.SetStateAction<Partial<FormData> | undefined>>;
  }
);

interface Props {
  children: React.ReactNode;
}

const FormDataProvider = (props:Props) => {
  const [formData, setForm] = useState<Partial<FormData>>();
  return ( 
    <FormContext.Provider value={{ formData, setForm }}>
      {props.children}
    </FormContext.Provider>
  );
};

const getFormData = () => {
  return useContext(FormContext);
};

const appendForm = (data: Partial<FormData>) => {
  const { formData, setForm } = getFormData();
  setForm({
    ...formData,
    ...data,
  });
}

export { FormDataProvider, getFormData , appendForm  };
