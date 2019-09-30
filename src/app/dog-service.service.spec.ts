import { TestBed } from '@angular/core/testing';

import { DogServiceService } from './dog-service.service';

describe('DogServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogServiceService = TestBed.get(DogServiceService);
    expect(service).toBeTruthy();
  });

  it('should get all dog data from file', () => {
    const service: DogServiceService = TestBed.get(DogServiceService);
    expect(service.all()).length > 0;
  });

  it('should get dog data by id', () => {
    const service: DogServiceService = TestBed.get(DogServiceService);
    expect(service.get("UlQI7xt5R2iuk").name).toEqual("bull dog sleeping GIF");
  });


});
