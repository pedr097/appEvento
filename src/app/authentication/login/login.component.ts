import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  rotaDefault = "/home";
  loginForm: FormGroup;
  
  constructor( private menuCtrl: MenuController,
    private authService: AuthenticationService,
    private route: Router,
    private _formBuilder: FormBuilder,
    private toastController: ToastController) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      usuario: ["", [Validators.required]],
      senha: ["", Validators.required]
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  entrar() {
    if (!this.loginForm.valid) return;
    this.authService
        .login(
            this.loginForm.controls.usuario.value,
            this.loginForm.controls.senha.value
        )
        .pipe(first())
        .subscribe(
            data => {
              if(data){
                this.alerta('Bem vindo ' + this.authService.currentUserValue.nome)
                this.route.navigate([this.rotaDefault]);
              }
              else{
                this.alerta('Usuário ou senha incorretos')  
              }
            },
            error => {
              this.alerta('Usuário ou senha incorretos')
            }
        );
  }

    async alerta(message: string) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000,
        position: 'top'
    });
    toast.present();
    }
}
