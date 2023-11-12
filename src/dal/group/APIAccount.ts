import { AxiosResponse } from 'axios';
import APIGroup from './APIGroup';

interface APISignUpRequest {
	email: string,
	password: string,
	username: string,
}

interface APISignUpResponse {
	token: string,
}

interface APISignInRequest {
	email: string,
	password: string,
}

interface APISignInResponse {
	token: string,
}

class APIAccount extends APIGroup {
	private readonly URI_ACCOUNT = 'account';
	private readonly URI_SIGN_UP = `${this.URI_ACCOUNT}/sign-up`;
	private readonly URI_SIGN_IN = `${this.URI_ACCOUNT}/sign-in`;

	public signUp = (
		data: APISignUpRequest,
	): Promise<APISignUpResponse> => this.axios(this.URI_SIGN_UP, {
		method: 'post',
		data,
	})
		.then((response: AxiosResponse<APISignUpResponse>) => response.data);

	public signIn = (
		data: APISignInRequest,
	): Promise<APISignInResponse> => this.axios(this.URI_SIGN_IN, {
		method: 'post',
		data,
	})
		.then((response: AxiosResponse<APISignInResponse>) => {
			localStorage.setItem('token', response.data.token);
			return response.data;
		});
}

export default APIAccount;
