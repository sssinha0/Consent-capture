import { Component, OnInit } from '@angular/core';
import { SignatureCaptureComponent } from "./signature-capture/signature-capture.component";
import { ConsentAcknowledgeComponent } from "./consent-acknowledge/consent-acknowledge.component";
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  imports: [ SignatureCaptureComponent, ConsentAcknowledgeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'consent-capture-ui';
  consentProvided: boolean = false;
  constructor(private websocketService: WebsocketService){

  }
  ngOnInit(){
    this.websocketService.consentData.subscribe((res:any) => {
      if(res){
      this.consentProvided = true;  
      console.log('Received:',res);
      }
      });
  }
}
