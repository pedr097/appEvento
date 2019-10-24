import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes = [
  {
      path: 'login',
      component: LoginComponent
  }
];

@NgModule({
  declarations: [
      LoginComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]  
})
export class AuthenticationModule {}
