import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';
  pageDesc = '';

  constructor(public router: Router) {
    router.events//路由器里产生的所有事件
      .filter(event => event instanceof NavigationEnd)//过滤出导航结束时的事件
      .subscribe((event: NavigationEnd) => {//订阅所有的导航过滤事件，当导航结束事件发生时判断导航到的URL是什么，
        // 根据URL改变当前页面的pageTitle和pageDesc
        if (event.url == '/dashboard') {
          this.pageTitle = '这里是首页';
          this.pageDesc = '';
        } else if (event.url.startsWith('/stock')) {//a.startsWith(b)判断字符串a 是不是以字符串b开头。
          this.pageTitle = '股票信息管理';
          this.pageDesc = '进行股票基本信息增删查改';
        }
      });
  }

  ngOnInit() {
  }

}
