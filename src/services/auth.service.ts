import axios, {AxiosInstance} from 'axios';

export class AuthService{
    protected readonly axios: AxiosInstance; 

    public constructor(url: string){
        this.axios = axios.create({
            baseURL: url, 
            headers: {
                'Content-Type': 'application/json'
            }, 
            timeout: 3000
        })
    }

    public async  login(email: string, password: string): Promise<any> {
        const response = await await this.axios.post('login', {username: email, password});
        return response.data;
    }
}