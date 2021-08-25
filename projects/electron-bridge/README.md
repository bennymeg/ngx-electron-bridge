<br/>
<p align="center">
  <a href="https://github.com/bennymeg/ngx-electron-bridge">
    <img src="https://raw.githubusercontent.com/bennymeg/ngx-electron-bridge/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">NGX Electron Bridge</h3>

  <p align="center">
    Custom bridge library for Electron & Angular applications
    <br/>
    <br/>
    <a href="https://github.com/bennymeg/ngx-electron-bridge/issues">Report Bug</a>
    .
    <a href="https://github.com/bennymeg/ngx-electron-bridge/issues">Request Feature</a>
  </p>

  <br/>
  <div align="center">

  ![License](https://img.shields.io/github/license/bennymeg/ngx-electron-bridge)
  ![NPM](https://img.shields.io/npm/v/ngx-electron-bridge)
  
  </div>
</p>

<hr>

## About The Project

Isolated context bridge library for Electron & Angular applications.

## Getting Started

This project work with Electron application that are powered by Angular. We suggest using [Nx Electron](https://github.com/bennymeg/nx-electron) for this purpose.

### Installation

```sh
npm install ngx-electron-bridge
```

## Usage

1. Expose you desired context - _[main process - preload script]_ 
```ts
    import { ContextBridgeService } from 'ngx-electron-bridge';

    ContextBridgeService.addIpcBridge("myExposedFunctionSignature", "my-exposed-function");
    ContextBridgeService.expose();
```

2. Handle IPC call (in case of IPC execution) - _[main process]_
```ts
    import { ipcMain } from 'electron';

    ipcMain.handle("my-exposed-function", (event, ...args) => {
        console.log(args);
    });
```

3. Invoke the exposed context - _[renderer process]_
```ts
import { Component, Inject } from '@angular/core';
import { ElectronBridge } from 'ngx-electron-bridge';

@Component({...})
export class AppComponent {
  constructor(@Inject(ElectronBridge) private _electronBridge: any) {
    _electronBridge.myExposedFunctionSignature(...args);
  }
}
```

## Default bridges
- **platform()**: returns a promise of the platform name.
- **arch()**: returns a promise of the system architecture.

## Roadmap

See the [open issues](https://github.com/bennymeg/ngx-electron-bridge/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/bennymeg/ngx-electron-bridge/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/bennymeg/ngx-electron-bridge/blob/master/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the Apache 2.0 License. See [LICENSE](https://github.com/bennymeg/ngx-electron-bridge/blob/master/LICENSE.md) for more information.

## Authors

* **[Benny Megidish](https://github.com/bennymeg/)**
