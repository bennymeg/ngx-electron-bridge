import { TestBed } from '@angular/core/testing';

import { ContextBridgeService } from './electron-bridge.service';

describe('ElectronBridgeService', () => {
  let service: ContextBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContextBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
