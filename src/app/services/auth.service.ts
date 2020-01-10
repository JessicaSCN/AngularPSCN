import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Register
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';

  private apiKey = 'AIzaSyBep2yU2A8D6YzJXCY1wb6ebZD_cI8cfpU';

  userToken: string;

  constructor(private http: HttpClient) {

    this.leerToken();
  }

  logout() {

    localStorage.removeItem('token')

  }

  login(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
     };

    return this.http.post(
       `${this.url}signInWithPassword?key=${this.apiKey}`,
       authData
     ).pipe(
      map( resp => {
        console.log('Se entró al map');

        this.guardarToken(resp['idToken']);
        return resp;

      })
     );



  }

  register(usuario: UsuarioModel) {
    const authData = {
     email: usuario.email,
     password: usuario.password,
     returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signUp?key=${this.apiKey}`,
      authData
    ).pipe(
      map( resp => {
        console.log('Se entró al map');
        this.guardarToken(resp['idToken']);
        return resp;

      })
    );
  }

  private guardarToken( idToken: string) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime.toString());


  }

  private leerToken() {

    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {

      this.userToken = '';

    }

    return this.userToken;

  }


  isAutenticado(): boolean {

    if (this.userToken.length < 2) 
    {
      return false;
    } 
    return true;
  }

}
