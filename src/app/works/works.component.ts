import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  /**
   * 图片列表
   */
  public photoList: PhotoInfo[];

  /**
   * 当前选中项的下标值
   */
  public chosenIdx: number;

  /**
   * 是否可以旋转
   */
  public bRotate: boolean;

  constructor() {
  }

  ngOnInit() {
    this.photoList = [
      new PhotoInfo('nature 7.jpg', '雪山,星空'),
      new PhotoInfo('nature 2.jpg', '日本冲绳岛'),
      new PhotoInfo('nature 3.jpg', '挪威上空的极光'),
      new PhotoInfo('nature 8.jpg', '德国波恩的Cherry Brick Road'),
      new PhotoInfo('nature 5.jpg', '雪夜小镇'),
      new PhotoInfo('nature 9.jpg', '屯溪老街')
    ];
    this.bRotate = false;
  }

  /**
   * 选中当前图片，动态赋予样式
   * @param event Event对象
   * @param idx 数组下标
   */
  chooseCurrentItem(event: Event, idx: number) {
    if (idx === this.chosenIdx) {
      this.bRotate = !this.bRotate;
    } else {
      this.bRotate = true;
      this.chosenIdx = idx;
    }
  }
}

export class PhotoInfo {
  constructor(public imgItem: string,
              public imgDesc: string) {
  }
}
