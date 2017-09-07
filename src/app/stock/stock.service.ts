import {Injectable} from '@angular/core';

@Injectable()
export class StockService {

  constructor() {
  }

  private stocks: Stock[] = [
    new Stock(1, "魅族科技", 1.99, 3.5, "这是第一只股票，是我手写的第一只股票", ["IT", "互联网"]),
    new Stock(2, "小米科技", 2.99, 3, "这是第二只股票，是我手写的第一只股票", ["IT", "金融"]),
    new Stock(3, "Smartisan", 3.99, 4.5, "这是第三只股票，是我手写的第一只股票", ["IT"]),
    new Stock(4, "华为终端", 4.99, 4.3, "这是第四只股票，是我手写的第一只股票", ["互联网"]),
    new Stock(5, "Samsung", 5.99, 2.7, "这是第五只股票，是我手写的第一只股票", ["金融", "互联网"]),
    new Stock(6, "Apple", 6.99, 1.5, "这是第六只股票，是我手写的第一只股票", ["IT", "互联网"]),
    new Stock(7, "OPPO", 1.99, 3.5, "这是第一只股票，是我手写的第一只股票", ["IT", "互联网"]),
    new Stock(8, "VIVO", 1.99, 3.5, "这是第一只股票，是我手写的第一只股票", ["IT", "互联网"]),
  ];

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number): Stock {
    var stock = this.stocks.find(stock => stock.id == id);
    if (!stock) {//点击创建按钮的时候由于.navigateByUrl('stock/0')使得配置的路由的变量id接收到的值为0，
      //导致在stock-form组件中，let stockId = this.routeInfo.snapshot.params['id'];stockId拿到的值为"0"，
      //由于在stocks数组中没有id为0的元素，使得this.stock = this.stockService.getStock(stockId);的值为undefined，
      //所以没有stock的rating属性，导致星级评价组件不正常显示。
      // 此时加上一个判断如果stock的值为undefined（布尔值为false）即if（!false）则
      //给stock赋予一个new Stock对象的实例化并把值都初始化以适应创建股票的操作逻辑。
      stock = new Stock(0, "", 0, 0, "", []);
    }
    return stock;
  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
