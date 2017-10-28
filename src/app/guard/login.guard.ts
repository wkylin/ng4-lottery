import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import swal from 'sweetalert2';

export class LoginGuard implements CanActivate {
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isLogin: boolean = sessionStorage.getItem('user_id') ? true : false;
        if (!isLogin) {
            swal({
                title: '需要登录才可以访问',
                confirmButtonText: '确定'
            }).then(function () {
                location.href = location.origin + '#login';
            });
        }
        return isLogin;
    }
}
