import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignatureCaptureComponent } from "./signature-capture/signature-capture.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignatureCaptureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'consent-capture-ui';
}
