import {State} from "./user.reducer";
import {createSelector} from "@ngrx/store";

export const selectState = (state: State) => state;

export const selectUser = createSelector(
  selectState,
  (state: State) => state.user
)
