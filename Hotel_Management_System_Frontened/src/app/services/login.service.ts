import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Owner } from '../model/owner.model';
import { catchError, of, throwError } from 'rxjs';


@Injectable()
export class LoginService {

  constructor(private http:HttpClient) { }
  baseUrl:string = 'https://localhost:44359/api';



login(email:string ,pwd:string)
{

  return this.http.get<Owner>(this.baseUrl+'/login/'+email+'/'+pwd)
                  .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(()=> alert("Http failure responce!" || "Server Error!"))
  }
}
