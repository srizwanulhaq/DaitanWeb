import { Component, Input, OnInit } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { Device } from 'src/app/models/device.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  visible: boolean = false;
  @Input() jsonData: Device;

  id: string;

  ngOnInit(): void {
   // alert('test');
   console.log(this.jsonData);
   
    this.id = this.jsonData.id;
    // alert(this.id);
  }
}
