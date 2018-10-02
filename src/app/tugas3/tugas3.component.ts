import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']
  styles:[`
        .putih {
            color: white;
        }
    `]
})
export class Tugas3Component implements OnInit {
  detailCreationStatus = 'Tidak ada server baru yang telah dibuat!';
  detailName = '';
  detailCreated = false;
  details = [];
  count = 0;
  
  constructor() {
  }
  ngOnInit() {
  }

  onCreationStatus(){
    if (this.detailCreated == true) {
      this.detailCreated = false;
    }
    else if (this.detailCreated == false) {
      this.detailCreated = true;
    }
    this.count++;
    this.details.push(this.count);
    
  }
}
