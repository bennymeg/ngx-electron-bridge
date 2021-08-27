import { InjectionToken } from '@angular/core';

export const ElectronBridge = new InjectionToken<Window | undefined>(
  'ElectronBridgeToken',
  typeof window !== 'undefined' && window.document
    ? { providedIn: 'root', factory: () => window['ElectronBridge'] }
    : { providedIn: 'root', factory: () => undefined }
);

export const isElectronApp: boolean = 
  typeof window !== 'undefined' && !!window.navigator.userAgent.match(/Electron/);

export const isBridgeExposed: boolean = 
  typeof window !== 'undefined' && typeof window !== 'undefined' && window['ElectronBridge'] !== undefined;
