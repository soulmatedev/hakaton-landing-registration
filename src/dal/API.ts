import axios, { AxiosInstance } from 'axios';
import APIAccount from './group/APIAccount';

class APIInstance {
	private readonly axios: AxiosInstance;
	private readonly baseURL = 'http://localhost:8081/api';

	public readonly account: APIAccount;

	constructor() {
		this.axios = axios.create({
			baseURL: this.baseURL,
			withCredentials: true,
			headers: {
				Authorization: localStorage.getItem('token'),
			},
		});

		this.account = new APIAccount(this.axios);
	}
}

const API = new APIInstance();
export default API;
