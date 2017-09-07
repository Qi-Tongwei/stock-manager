import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';// 为了使用debounceTime方法。

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks: Array<Stock>;// 后台使用一个数组储存表格里面相应的数据。

  private nameFilter: FormControl = new FormControl();

  private keywork: string;

  constructor(public router: Router, private stockService: StockService) {
  }


  ngOnInit() {// 页面初始化时被调用的方法
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges
      .debounceTime(500)// 停止输入后，超过500毫秒调用订阅。
      .subscribe(value => this.keywork = value);// ValueChanges类型是Observable被观察者也就是流。
    // 传送的东西就是input输入框里面的值，这里面订阅的value值就是valueChanges传送的值。
  }

  create() {
    this.router.navigateByUrl('/stock/0');
  }

  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }

}


