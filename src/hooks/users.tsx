import { createContext, ReactNode, useContext, useState } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { UsersProps } from '../dtos/usersDTO';


interface UsersProviderProps {
    children: ReactNode;
}

interface IUsersContextData {
    users: UsersProps[];
    setUsers: (users : UsersProps[]) => void;

}

const UsersContext = createContext({} as IUsersContextData,);

function UsersProvider({ children }: UsersProviderProps) {


    const [users, setUsers] = useState<UsersProps[]>([] as UsersProps[]);


    
    
    return (
        <UsersContext.Provider value={{users, setUsers}}>
            { children }
        </UsersContext.Provider>

    )
}

function useUsers() {
    const context = useContext(UsersContext);

    return context
}

 async function moreUsers (results:number) {


    const response = await fetch(`https://randomuser.me/api/?seed=foobar&results=${results > 50? "50" : results}`)
    const usersApi = await response.json();

    return (usersApi.results)
    
} 

export { UsersProvider, useUsers, moreUsers }


