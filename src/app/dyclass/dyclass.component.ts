import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dyclass',
  templateUrl: './dyclass.component.html',
  styleUrls: ['./dyclass.component.css']
})
export class DyclassComponent implements OnInit {
  @ViewChild('pc') pc:ElementRef;
  number:any;
  number2:any;
  ans:number;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.number = +this.route.snapshot.params.number;
    this.number2 = +this.route.snapshot.params.number2;
  }

  addc(){
    this.pc.nativeElement.classList.add('rdd');
  }

  rmc(){
    this.pc.nativeElement.classList.remove('rdd');
  }

}
