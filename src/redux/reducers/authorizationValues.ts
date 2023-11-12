import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthorizationState {
	email: string,
	isEmailValid: boolean | null,
	password: string,
}

const initialState: AuthorizationState = {
	email: '',
	isEmailValid: null,
	password: '',
};

const authorization = createSlice({
	name: 'authorization',
	initialState,
	reducers: {
		updateAuthorizationEmail: (state, action: PayloadAction<string>) => {
			state.isEmailValid = action.payload.length <= 5;
			state.email = action.payload;
		},
		updateAuthorizationPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
	},
});

export const { updateAuthorizationEmail, updateAuthorizationPassword } = authorization.actions;

export default authorization.reducer;
