import { Injectable } from '@angular/core';
import Stomp from '@stomp/stompjs'
import  SockJS from 'sockjs-client';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService  {
  private stompClient: any;
  private sessionStatusSubject = new Subject<any>();

  constructor() {}

  connect() {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.Stomp.over((socket));
    this.stompClient.connect({}, (frame: any) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/session', (message: any) => {
        if (message.body) {
          this.sessionStatusSubject.next(JSON.parse(message.body));
        }
      });
    });
  }

  sendMessage(destination: string, body: any) {
    if (this.stompClient) {
      this.stompClient.send(destination, {}, JSON.stringify(body));
    }
  }

  getSessionStatus() {
    return this.sessionStatusSubject.asObservable();
  }
}

