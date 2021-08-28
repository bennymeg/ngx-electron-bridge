import { contextBridge, ipcRenderer } from 'electron';

export class ContextBridgeService {
  exposed: boolean = false;
  bridges: Map<string, () => Promise<any>> = new Map([
    [ "platform", platformBridge ],
    [ "arch", arcBridge ]
  ]);

  constructor() { }

  addIpcBridge(exposedName: string, ipcName: string): ContextBridgeService {
    this.assertNegativeExposure('Adding new bridge after exposing the context is not allowed');

    this.bridges.set(exposedName, (...args) => {
      if (args) {
        return ipcRenderer.invoke(ipcName, ...args);
      } else {
        return ipcRenderer.invoke(ipcName);
      }
    });

    return this;
  }

  expose(scope: string = 'ElectronBridge'): ContextBridgeService {
    this.assertNegativeExposure('Context bridge can be exposed only once');

    const bridgeObject: any = {};

    for (const item of [...this.bridges]) {
      const [key, value] = item;
      bridgeObject[key] = value;
    }

    contextBridge.exposeInMainWorld(scope, bridgeObject);
    this.exposed = true;

    return this
  }

  private assertNegativeExposure(errorMessage: string) {
    if (this.exposed) throw new Error(errorMessage);
  }
}

// private helper function that are exported as a hack solution

export function platformBridge(): Promise<string> {
  return Promise.resolve(process.platform);
}

export function arcBridge(): Promise<string> {
  return Promise.resolve(process.arch);
}
