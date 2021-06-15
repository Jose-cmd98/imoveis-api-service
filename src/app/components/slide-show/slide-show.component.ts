import { ImoveisApiModel } from 'src/app/services/imoveis-api-model';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {

  @Input() imovels: ImoveisApiModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }


}
