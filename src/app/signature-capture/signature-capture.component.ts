import { Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { SignaturePadModule } from 'angular-signature-pad-v2';
import { SignaturePad } from 'angular-signature-pad-v2';
import { SessionService } from '../session.service';
@Component({
  selector: 'app-signature-capture',
  standalone: true,
  imports: [SignaturePadModule],
  templateUrl: './signature-capture.component.html',
  styleUrls: ['./signature-capture.component.css']

})
export class SignatureCaptureComponent implements OnInit {
  date = new Date().toDateString();
  @ViewChild(SignaturePad) signaturePad!: SignaturePad;
  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'maxWidth': 1,
    'canvasWidth': 550,
    'canvasHeight': 150,
    penColor: 'red'
  };
  sessionId: any;
  constructor(private webScketService: WebsocketService, private session: SessionService) {

  }
  ngOnInit(): void {
  }


  ngAfterViewInit() {
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
    
    this.webScketService.connect();

  }
  clearSignature() {
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API

  }
  async submitConsent() {
    await this.session.startSession();

    const signatureData = this.signaturePad.toDataURL();
    let data = JSON.parse(sessionStorage.getItem("session") ?? '');
    // const consent = { sessionId: data.id, signatureData };
    const consentData = {
      sessionId: data.id,
      signatureData: signatureData
    };
          this.webScketService.sendMessage('/app/send-consent',consentData);
  }
}
