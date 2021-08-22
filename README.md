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
    <a href="https://github.com/bennymeg/ngx-electron-bridge"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://bennymeg.github.io/ngx-electron-bridge/">View Demo</a>
    .
    <a href="https://github.com/bennymeg/ngx-electron-bridge/issues">Report Bug</a>
    .
    <a href="https://github.com/bennymeg/ngx-electron-bridge/issues">Request Feature</a>
  </p>

  ![License](https://img.shields.io/github/license/bennymeg/ngx-electron-bridge)
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

1. expose you desired context in the main process
```ts
    import { ipcMain } from 'electron';
    import { ContextBridgeService } from 'ngx-electron-bridge';

    ContextBridgeService.addIpcBridge("myExposedFunctionSignature", "my-exposed-function");
    ContextBridgeService.expose();

    ipcMain.handle("my-exposed-function", (event, ...args) => {
        console.log(args);
    });
```

2. invoke the exposed context in your renderer process
```ts
import { Component, Inject } from '@angular/core';
import { ElectronBridge } from 'ngx-window-bridge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(ElectronBridge) _electronBridge: any) {
    _electronBridge.myExposedFunctionSignature(...args);
  }
}
```

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
