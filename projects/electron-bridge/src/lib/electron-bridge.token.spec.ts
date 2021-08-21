import { TestBed, inject } from '@angular/core/testing';

import { ElectronBridge } from './electron-bridge.token';

describe('Service token: ElectronBridge', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    });
  });
  
  it('should service work', inject([ElectronBridge], electronBridge => {
    expect(electronBridge).toBeTruthy();
  }));
});