import {User} from "./user.types";
import {createReducer, on} from "@ngrx/store";
import {Login, Logout} from "./user.action";

export interface State {
  user: User | undefined;
  authIsLoading: boolean
}

export const initialState: State = {
  user: undefined,
  authIsLoading: false
};

export const userReducer = createReducer(
  initialState,
  on(Login, state => ({ ...state, user: state.user })),
  on(Logout, state => ({ ...state, user: undefined })),
);
