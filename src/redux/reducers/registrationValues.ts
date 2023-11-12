import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RegistrationState {
	email: string,
	isEmailValid: boolean | null,
	username: string,
	password: string,
}

const initialState: RegistrationState = {
	email: '',
	username: '',
	isEmailValid: null,
	password: '',
};

const registration = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		updateRegistrationEmail: (state, action: PayloadAction<string>) => {
			state.isEmailValid = action.payload.length <= 5;
			state.email = action.payload;
		},
		updateRegistrationPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
		updateRegistrationUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
	},
});

export const { updateRegistrationEmail, updateRegistrationPassword, updateRegistrationUsername } = registration.actions;

export default registration.reducer;
