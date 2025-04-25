import { Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { SignaturePadModule } from 'angular-signature-pad-v2';
import { SignaturePad } from 'angular-signature-pad-v2';
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
  constructor(){

  }
  ngOnInit(): void {

  }
  

  ngAfterViewInit() {
    // this.signaturePad is now available
    // this.signaturePad.set('minWidth', 1);
    // this.signaturePad.set('color','red') // set szimek/signature_pad options at runtime
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
  clearSignature() {
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API

  }
  submitConsent() {
      const signatureData = this.signaturePad.toDataURL();
      const consent = { sessionId: this.sessionId, signatureData };

      // fetch('http://localhost:8081/api/consent', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(consent),
      // })
      //   .then(response => {
      //     if (response.ok) {
      //       alert('Consent Submitted');
      //       this.websocketService.sendMessage('/app/consent', { sessionId: this.sessionId });
      //     } else {
      //       alert('Failed to submit consent');
      //     }
      //   })
      //   .catch(error => {
      //     console.error('Error:', error);
      //   });
    }
}
