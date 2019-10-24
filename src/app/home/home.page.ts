import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private authService: AuthenticationService,
    private route: Router,
    private menuCtrl: MenuController
  ) {}

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  logout(){
    this.authService.logout();
        this.route.navigate(["authentication/login"]);
  }

}
