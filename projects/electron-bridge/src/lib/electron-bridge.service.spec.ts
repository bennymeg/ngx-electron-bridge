import { TestBed } from '@angular/core/testing';

import { ElectronBridgeService } from './electron-bridge.service';

describe('ElectronBridgeService', () => {
  let service: ElectronBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
