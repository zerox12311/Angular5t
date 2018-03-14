import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.css']
})
export class Lesson6Component implements OnInit {
  les6:any;
  constructor() { }

  ngOnInit() {
  }
  abc(a:any){
    this.les6 = a;
    //console.log(a);
  }
  aaa(){
    console.log("大家好");
  }

  bbb(){
    alert("我是子component傳上來的");
  }

  ccc(){
    this.les6 = 'hahaha';
  }

}
