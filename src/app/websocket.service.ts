import { Injectable } from '@angular/core';
// import Stomp from '@stomp/stompjs'
import { Client, IFrame, IMessage } from '@stomp/stompjs';
import { BehaviorSubject } from 'rxjs';

import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService  {
  private stompClient: Client;
  private messageSource = new BehaviorSubject<any>(null);
  consentData = this.messageSource.asObservable();
  constructor() {
    this.stompClient = new Client({
      // Use SockJS for better browser compatibility
      webSocketFactory: () => new SockJS('http://localhost:8081/ws'),
      reconnectDelay: 5000, // Auto reconnect after 5s
      debug: (str:any) => {
        console.log('[STOMP DEBUG]', str);
      }
    });

    this.stompClient.onConnect = (frame: IFrame) => {
      console.log('Connected to WebSocket:', frame);
      this.stompClient.subscribe('/topic/consent-saved', (message: IMessage) => {
        const receivedData = JSON.parse(message.body);
        this.messageSource.next(message.body);
        console.log('📩 Received WebSocket Message:', receivedData);
      });
    };

    this.stompClient.onStompError = (frame:any) => {
      console.error('STOMP Error:', frame);
    };
  }

  public connect(): void {
    this.stompClient.activate(); // Starts the connection
  }

  public disconnect(): void {
    this.stompClient.deactivate();
  }
  public sendMessage(destination: string, body: any): void {
    if (this.stompClient.connected) {
      this.stompClient.publish({
        destination: destination,
        body: JSON.stringify(body)
      });
    } else {
      console.warn('STOMP client not connected.');
    }
  }
}

