import { AuthAction, AuthActionEnum, AuthState } from './types';

const initialState: AuthState = {
  isAuth: false
}

export default function authReducer(state = initialState, action: AuthAction) {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, isAuth: action.payload }
    default:
      return state;
  }
}
