import {createAction, props} from "@ngrx/store";
import {User} from "./user.types";

export const Login = createAction(
  '[Login Page] Login',
  props<User>()
);

export const Logout = createAction(
  '[Login Page] Logout'
);

