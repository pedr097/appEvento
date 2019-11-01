import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    CanActivate,
    Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {
    rotaDefault: string = "authentication/login";

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate() {
        const currentUser = this.authenticationService.currentUserValue;
        console.log(currentUser);
        if (currentUser) {
            // logged in so return true
            console.log("esta logado");
            return true;
        }

        console.log("nao está logado");
        // not logged in so redirect to login page with the return url
        this.router.navigate(
            [this.rotaDefault] /*, { queryParams: { returnUrl: state.url } }*/
        );
        return false;
    }

}
