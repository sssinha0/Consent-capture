import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  startSession(){
    this.httpClient.post('http://localhost:8081/api/session/start?timeoutSeconds=120',null).subscribe((res:any)=>{
      sessionStorage.setItem('session',JSON.stringify(res))
        });
  }
}
