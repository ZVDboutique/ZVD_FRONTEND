/* eslint-disable react-refresh/only-export-components */
import React, { ReactNode, createContext, useContext, useState } from 'react';

// ========================================================================================//

const AppContext = createContext<any | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
  userData?: any;
  setUserData?: any;
}
interface AppContextProps {
  userData: {
    id: number;
    first_name: string | any;
    last_name: string | any;
    customer_type_id: number;
    primary_contact: string;
    secondary_contact: string;
    primary_email: string;
    secondary_email: string;
    whatsapp_number: string;
    pan_card_number: string;
    is_kyc_done: boolean;
    is_part_of_company: boolean;
    company_id: number;
    isvoid: boolean;
    created_at: string;
    updated_at: string;
    username: string;
    password: string;
    is_notify: boolean;
    isemailconfirmed: boolean;
    ismobilenoconfirmed: boolean;
  };
  setUserData: (d: {
    id: number;
    first_name: string | any;
    last_name: string | any;
    customer_type_id: number;
    primary_contact: string;
    secondary_contact: string;
    primary_email: string;
    secondary_email: string;
    whatsapp_number: string;
    pan_card_number: string;
    is_kyc_done: boolean;
    is_part_of_company: boolean;
    company_id: number;
    isvoid: boolean;
    created_at: string;
    updated_at: string;
    username: string;
    password: string;
    is_notify: boolean;
    isemailconfirmed: boolean;
    ismobilenoconfirmed: boolean;
  }) => void;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
  userData: userDataProp,
  setUserData: setUserDataProp,
}) => {
  const [userDataState, setUserDataState] = useState<{
    id: number;
    first_name: string;
    last_name: string;
    customer_type_id: number;
    primary_contact: string;
    secondary_contact: string;
    primary_email: string;
    secondary_email: string;
    whatsapp_number: string;
    pan_card_number: string;
    is_kyc_done: boolean;
    is_part_of_company: boolean;
    company_id: number;
    isvoid: boolean;
    created_at: string;
    updated_at: string;
    username: string;
    password: string;
    is_notify: boolean;
    isemailconfirmed: boolean;
    ismobilenoconfirmed: boolean;
  }>();

  const userData = userDataProp !== undefined ? userDataProp : userDataState;
  const setUserData = setUserDataProp || setUserDataState;

  const value = { userData, setUserData };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext<AppContextProps>(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

export { AppContextProvider, useAppContext };
