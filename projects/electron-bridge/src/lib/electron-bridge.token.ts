import { InjectionToken } from '@angular/core';

let electronBridgeScope: string = 'ElectronBridge';

export function ElectronBridgeFactory(scope: string = 'ElectronBridge'): InjectionToken<Window | undefined> {
  electronBridgeScope = scope;

  return new InjectionToken<Window | undefined>(
    'ElectronBridgeToken',
    typeof window !== 'undefined' && window.document
      ? { providedIn: 'root', factory: () => window[electronBridgeScope] }
      : { providedIn: 'root', factory: () => undefined }
  );
}

export const ElectronBridge = new InjectionToken<Window | undefined>(
  'ElectronBridgeToken',
  typeof window !== 'undefined' && window.document
    ? { providedIn: 'root', factory: () => window['ElectronBridge'] }
    : { providedIn: 'root', factory: () => undefined }
);

export const isElectronApp: boolean = 
  typeof window !== 'undefined' && !!window.navigator.userAgent.match(/Electron/);

export const isBridgeExposed: boolean = 
  typeof window !== 'undefined' && typeof window !== 'undefined' && window[electronBridgeScope] !== undefined;
