import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  this.usuario = new UsuarioModel();

  }

  onSubmit(form: NgForm) {


    if (form.invalid) {return; }

    Swal.fire(
      {
        allowOutsideClick: true,
        icon: 'info',
        text: 'Espere por favor...'
      });
    Swal.showLoading();

    this.auth.register(this.usuario).subscribe( resp => {

      console.log(resp);
      Swal.close();
      this.router.navigateByUrl('/home');

    }, (err) => {
      console.log(err.error.error.message);

      Swal.fire(
        {
          icon: 'error',
          text: err.error.error.message
          , title: 'Error al autenticar'
        });
    });

  }

}
