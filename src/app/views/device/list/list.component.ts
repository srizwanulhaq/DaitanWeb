import { Component,ViewEncapsulation  } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/models/device.model';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent {
  devices: Device[];

  selectedDevice: Device = null;
  displayDialog: boolean = false;

  constructor(private service: DeviceService) {}

  ngOnInit() {
    
    this.service.getall().subscribe((data) => {
      this.devices = data;

      // console.log(this.devices);
    });
  }

  editDevice(device: Device) {
    this.selectedDevice = { ...device }; // Clone to avoid direct reference changes
    this.displayDialog = true;
  }

  saveDevice() {

  }


}
