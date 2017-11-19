import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public iconList: Array<number>;
  public copyRightName: string;
  public author: string;
  constructor() { }

  ngOnInit() {
    this.iconList = [1, 2, 3, 4];
    this.copyRightName = '摄影社区版权';
    this.author = 'zhang.lifan';
  }

}
