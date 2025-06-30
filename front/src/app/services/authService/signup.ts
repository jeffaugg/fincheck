import { sleep } from '../../utils/sleep';
import { httpClient } from '../httpClient';

export interface ISignupParams {
	name: string;
	email: string;
	password: string;
}

interface ISignupResponse {
	accessToken: string;
}

export async function signup(body: ISignupParams) {
	await sleep();
	const { data } = await httpClient.post<ISignupResponse>('/auth/signup', body);

	return data;
}
