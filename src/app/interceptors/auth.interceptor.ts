import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('LLEGO A ENTRAR??=??????????????')
        if (error.status === 401 || error.status === 403) {
          // Aquí manejas la respuesta 401 (No autorizado)
          // Borra el localStorage u otras acciones necesarias
          localStorage.removeItem('_jwt');

          // Redirige a la página de dashboard
          this.router.navigate(['/login']);

          // Puedes retornar un Observable vacío para interrumpir la cadena de errores
          alert('No autorizado')
          return throwError('No autorizado');
        }
        
        // Propaga el error para que sea manejado por el suscriptor
        return throwError(error);
      })
    );
  }
}
