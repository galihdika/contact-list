import { createContext, startTransition, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { User } from "../../../lib/types/user";

type ContactsContextType = {
  data?: User[];
  isLoading: boolean;
  onFilter: (value: string) => void;
}

const DEFAULT_CONTEXT_VALUE: ContactsContextType = {
  isLoading: true,
  onFilter: () => {},
}

const ContactsContext = createContext(DEFAULT_CONTEXT_VALUE)

export const ContactsProvider: React.FC<Props> = ({ children }) => {
  const [filter, setFilter] = useState<string>('');
  
  const {data, isLoading} = useQuery<User[]>(
    ['contact-list'], 
    () => fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
  );

  const onFilter = (value: string) => {
    startTransition(() => {
      setFilter(value);
    });
  } 

  const filteredData = filter ? data?.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase())) : data;

  const contextValue: ContactsContextType = {
    data: filteredData,
    isLoading,
    onFilter,
  }
  
  return (
    <ContactsContext.Provider value={contextValue}>
      {children}
    </ContactsContext.Provider>
  )
}

export const useContactsContext = () => {
  return useContext(ContactsContext);
}