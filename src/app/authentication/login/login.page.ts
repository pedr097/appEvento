import { Component, OnInit } from '@angular/core';
import { ToastController, MenuController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  rotaDefault = "/menu/home";
  loginForm: FormGroup;
  
  constructor(
    private authService: AuthenticationService,
    private route: Router,
    private _formBuilder: FormBuilder,
    private menuCtrl: MenuController,
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
              if(data != null){
                console.log(data);
                this.alerta('Bem vindo ' + this.authService.currentUserValue.nome);
                if(data.descricaoGrupo==="ADMINISTRADOR"){
                  this.route.navigate([this.rotaDefault + '/adm']);
                }
                else{
                  //console.log(this.rotaDefault + '/empresa');
                  this.route.navigate([this.rotaDefault + '/empresa']);
                }
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