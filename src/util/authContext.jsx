import { createContext, useContext, useReducer } from 'react'

const initilaState = { auth : false};

const authContext = createContext(initilaState);

export function reducer(state, action){
    switch (action.type){
        case 'login':
            return { auth : true };
        case 'logout':
            return { auth : false };
        default:
            throw new Error()
    }
}


export function AuthProvider({ children }){

    const [authed, dispatch] = useReducer(reducer, initilaState)

    return <authContext.Provider value={[authed, dispatch]}>{children}</authContext.Provider>
}

export default function AuthConsumer(){
    return useContext(authContext)
}
