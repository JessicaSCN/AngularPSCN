import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
 })
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  isAutenticado(): boolean {

    return this.auth.isAutenticado();

  }

  logout() {

    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  buscarProductos(termino: string) {

    console.log(termino);

  }

}
