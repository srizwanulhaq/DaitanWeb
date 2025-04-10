import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private http: HttpClient) {}

  getall(): Observable<Device[]> {
    return this.http.get<Device[]>(
      environment.baseUrl + '/gatewaydevice/getall'
    );
  }
}
