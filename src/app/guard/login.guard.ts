import { CanActivate } from '@angular/router';
import swal from 'sweetalert2';

export class LoginGuard implements CanActivate {
    canActivate() {
        const isLogin: boolean = sessionStorage.getItem('user_id') ? true : false;
        if (!isLogin) {
            swal('需要登录才可以访问');
        }
        return isLogin;
    }
}
