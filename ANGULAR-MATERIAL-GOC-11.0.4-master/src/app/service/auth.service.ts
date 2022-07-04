import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private API_SIGNUP = environment.API_LOCAL + 'signup';


    constructor(private http: HttpClient) {}
    signUp(signUp: SignUpForm): Observable<any>{
        return this.http.post<any>(this.API_SIGNUP, signUp);
    }
}
