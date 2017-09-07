import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()//该属性的数据是从外部（stock-manage.component.ts中stock类的rating属性）输入而来的。
  rating: number = 0;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  stars: boolean[];

  @Input()
  readonly: boolean = true;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {//输入属性改变后调用
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);//判断当前循环的下标是否大于传入的数据rating，比如传值rating为3.5的时候，
      //第一次循环的时候i=1，i>3.5?为假，所以值为false通过样式绑定后false为实星，所以前台就会显示3颗实星2颗空星。
    }
  }

  clickStar(index: number) {
    if (!this.readonly) {//创建和修改的表单页面才能修改星级评价
      this.rating = index + 1;//index值为0当点击第五颗星的时候索引为4，所以返回的布尔值是i>this.rating为真，
      // 第五颗星为空星解决此BUG将索引值index加1即可。
      this.ratingChange.emit(this.rating);
    }
  }

}
