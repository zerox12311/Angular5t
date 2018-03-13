import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})
export class Lesson3Component implements OnInit {
  weekday: string[] = ["1","2","3","4","5"]

  users:Object[] = [
    {"name":"Lux","address":"taipei"},
    {"name":"bbbb","address":"dddd"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
