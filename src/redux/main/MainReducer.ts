import axios from 'axios';
import { BaseThunkType, InferActionsTypes } from '../store';


const MainInitialState = {
    users: null as UserType[] | null | undefined,
}

export const MainActions = {
    addUsers: (users: UserType[]) => ({type: 'ADD_USERS', users} as const),
    changeUserData: (userData: UserType | undefined) => ({type: 'CHANGE_USER_DATA', userData} as const),
    addNewUser: (userData: UserType) => ({type: 'ADD_NEW_USER', userData} as const),
}

export const MainReducer = (state = MainInitialState, actions: MainActionsType): MainInitialStateType => {
    switch (actions.type) {
        case 'ADD_USERS':
            return {
                ...state,
                users: actions.users,
            }
        case 'CHANGE_USER_DATA':
            return {
                ...state,
                users: state.users?.map((user: UserType) => {
                    if (user.id === actions.userData?.id) {
                        user = actions.userData;
                    }
                    return user;
                }),
            }
        case 'ADD_NEW_USER':
            return {
                ...state,
                users: [...state.users as UserType[], actions.userData]
            }
        default: return state;
    }
}


// Thunks
export const getUsers = (): ThunkType => {
    return async (dispatch) => {
        try {
            const users: UserType[] = (await axios.get('https://jsonplaceholder.typicode.com/users')).data;
            dispatch(MainActions.addUsers(users));
        } catch (error) {
            console.log(error);
        }
    }
}


// Types
export type UserType = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AdressType;
    phone: string;
    website: string;
    company: CompanyType;
}

type AdressType = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
};

type CompanyType = {
    name: string;
    catchPhrase: string;
    bs: string;
}

// Тип store-а
export type MainInitialStateType = typeof MainInitialState;
// Тип для action-ов
type MainActionsType = InferActionsTypes<typeof MainActions>;
// Тип для thunk-ов
type ThunkType = BaseThunkType<MainActionsType>;