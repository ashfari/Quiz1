import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../shared/mahasiswa';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {
  arrayMahasiswa:Mahasiswa[] = [];
  nim = '';
  nama = '';
  kelas = '';
  mahasiswa;

  constructor() { }

  ngOnInit() {
  }

  tambahMahasiswa(){
    this.mahasiswa = new Mahasiswa(this.nim, this.nama, this.kelas);
    this.arrayMahasiswa.push(this.mahasiswa);
    this.nim = this.nama = this.kelas = '';
  }

}
