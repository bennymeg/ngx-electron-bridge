import { Component, Inject } from '@angular/core';
import { ElectronBridge } from 'projects/electron-bridge/src/lib/electron-bridge.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(ElectronBridge) _electronBridge: any) {
    // _electronBridge.myExposedFunction();
  }

  title = 'ngx-electron-bridge';
}
