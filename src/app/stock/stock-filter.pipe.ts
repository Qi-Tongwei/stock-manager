import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(list: any[], field: string, keyword: string): any {
    // list参数是数据的列表，第二个参数field是依据股票的哪个字段过滤比如是名称还是描述，
    // 在模板中使用的管道是根据股票的名称来过滤的，keyword就是用户输入的值。

    if (!field || !keyword) {// 没指定要过滤字段或者用户输入关键字，直接返回列表。
      return list;// list就是Stock对象。
    }

    return list.filter(item => {// item接收的参数是Stock对象。
      let itemFieldValue = item[field].toLowerCase();// 依据股票名称检索股票，若股票名称是英文则以英文的小写为检索标准。
      return itemFieldValue.indexOf(keyword) >= 0;// stocks中的name属性如果跟用户输入的关键字相匹配则返回true。
    });
  }

}
