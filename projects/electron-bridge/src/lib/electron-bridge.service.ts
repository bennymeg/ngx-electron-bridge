import { contextBridge, ipcRenderer } from 'electron';

export class ContextBridgeService {
  static bridge: Map<string, () => Promise<any>> = new Map([
    [ "platform", platformBridge ],
    [ "arch", arcBridge ]
  ]);

  constructor() { }

  static addIpcBridge(exposedName: string, ipcName: string): ContextBridgeService {
    ContextBridgeService.bridge.set(exposedName, (...args) => {
      if (args) {
        return ipcRenderer.invoke(ipcName, ...args);
      } else {
        return ipcRenderer.invoke(ipcName);
      }
    });   

    return this;
  }

  static expose(): void {
    const bridgeObject: any = {};

    for (const item of [...ContextBridgeService.bridge]) {
      const [key, value] = item;
      bridgeObject[key] = value;
    }

    contextBridge.exposeInMainWorld('ElectronBridge', bridgeObject);
  }
}

// private helper function that are exported as a hack solution

export function platformBridge(): Promise<string> {
  return Promise.resolve(process.platform);
}

export function arcBridge(): Promise<string> {
  return Promise.resolve(process.arch);
}
