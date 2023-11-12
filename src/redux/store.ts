import { configureStore} from "@reduxjs/toolkit";
import registrationValues from "./reducers/registrationValues";
import authorizationValues from "./reducers/authorizationValues";

export const store = configureStore({
	reducer: {
		registration: registrationValues,
		authorization: authorizationValues,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

