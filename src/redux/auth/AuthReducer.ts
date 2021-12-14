import { InferActionsTypes } from "../store";


export const AuthInitialState = {
    data: {
        email: null as string | null,
        password: null as string | null,
    },
    isAuth: false,
    role_id: null as number | null,
};


export const AuthActions = {
    setAuthData: (authData: AuthDataType) => ({type: 'SET_AUTH_DATA', authData})
};


export const AuthReducer = (state = AuthInitialState, actions: AuthActionsType): AuthInitialStateType => {
    switch (actions.type) {
        case 'SET_AUTH_DATA':
            const isUser = actions.authData.password === '12345' && actions.authData.email === 'hello@user.com';
            const isAdmin = actions.authData.password === '54321' && actions.authData.email === 'hello@admin.com';
            return {
                ...state,
                data: actions.authData,
                role_id: isUser ? 1 : isAdmin ? 0 : null,
                isAuth: (isUser || isAdmin) ? true : false,
            }
        default:
            return state;
    }   
};


// Types
export type AuthDataType = {
    email: string;
    password: string;
};

// Тип store-а
export type AuthInitialStateType = typeof AuthInitialState;
// Тип для action-ов
type AuthActionsType = InferActionsTypes<typeof AuthActions>;