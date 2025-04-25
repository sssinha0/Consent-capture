import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-consent-acknowledge',
  templateUrl: './consent-acknowledge.component.html',
  styleUrls: ['./consent-acknowledge.component.css'],
})
export class ConsentAcknowledgeComponent implements OnInit {
  public sessionId: string = ''; // this will be set dynamically

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.connect();
    this.websocketService.getSessionStatus().subscribe((status: any) => {
      if (status.type === 'SESSION_STARTED') {
        this.sessionId = status.sessionId;
      } else if (status.type === 'CONSENT_RECEIVED') {
        alert('Consent received');
      }
    });
  }

  acknowledgeConsent() {
    alert('Thank you for acknowledging!');
  }
}
