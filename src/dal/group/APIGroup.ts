import { AxiosInstance } from 'axios';

class APIGroup {
	protected axios: AxiosInstance;

	public constructor(axios: AxiosInstance) {
		this.axios = axios;
	}
}

export default APIGroup;
