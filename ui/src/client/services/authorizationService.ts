import axios from 'axios';
import { BASE_URL } from '../globals';
import { User } from '../models';

interface RegisterProps {
    username: string;
    email: string;
    password: string;
}

interface Authentication {
    user: User;
    jwt: string;
}



const register = async ({ username, email, password }: RegisterProps) => {
    return await axios
        .post<Authentication>(`${BASE_URL}/api/auth/local/register`, {
            username,
            email,
            password,
        });
};

interface LoginProps {
    identifier: string; // username || email
    password: string;
}

const login = async ({ identifier, password }: LoginProps) => {
    return await axios
        .post<Authentication>(`${BASE_URL}/api/auth/local`, {
            identifier,
            password,
        });
};

export const AuthorizationService = {
    register,
    login,
}

export default AuthorizationService;
