import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { IMessage } from '@stomp/stompjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consent-acknowledge',
  templateUrl: './consent-acknowledge.component.html',
  styleUrls: ['./consent-acknowledge.component.css'],
  imports:[CommonModule]
})
export class ConsentAcknowledgeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {

  }
}
