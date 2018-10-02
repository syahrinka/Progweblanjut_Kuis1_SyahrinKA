import { Component, OnInit } from '@angular/core';
import { datamahasiswa } from '../shared/datamahasiswa';

// import { datamahasiswa } from 'src/app/kuis/shared/datamahasiswa';
@Component({
  selector: 'app-kuis',
  templateUrl: './kuis.component.html',
  styleUrls: ['./kuis.component.css']
})
export class KuisComponent implements OnInit {
  numb ='';
  name ='';
  kls ='';
  daftarMhs:datamahasiswa[] = [];
  mhs;

  constructor() { }

  ngOnInit() {
  }

  tambahMhs(){
    this.mhs = new datamahasiswa(this.numb, this.name, this.kls); 
    this.daftarMhs.push(this.mhs);
    this.numb ='';
    this.name ='';
    this.kls ='';
  }

}

