import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
    allowLogin = false;
    accountLogStatus = 'Anda belum login';
    username = '';
    checkBtn = false;
    usernameOn;
    accountConfirm;
  constructor() {
    setTimeout(() => {
      this.allowLogin = true;
    }, 2000);
  }
    
  ngOnInit() {
  }

  onLogin(){
    this.usernameOn = this.username;
    this.accountConfirm = 'Akun anda adalah ' + this.usernameOn;
    this.accountLogStatus = 'Anda berhasil login';
    this.username = '';
  }

  checkUsername(){
    if (this.username == '') {
      return this.checkBtn = true;
    }
  }
}
