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

const FormProvider = (props:Props) => {
  const [formData, setForm] = useState<Partial<FormData>>();
  return ( 
    <FormContext.Provider value={{ formData, setForm }}>
      {props.children}
    </FormContext.Provider>
  );
};

const getForm = () => {
  return useContext(FormContext);
};

const appendForm = (data: Partial<FormData>) => {
  const { formData, setForm } = getForm();
  setForm({
    ...formData,
    ...data,
  });
}

export { FormProvider, getForm, appendForm  };
