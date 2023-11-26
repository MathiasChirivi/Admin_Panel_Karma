import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:any;

  getDayOfMonth(dateString: string): string {
    const date = new Date(dateString);
    return ('0' + date.getDate()).slice(-2);
  }

  getMonth(dateString: string): string {
    const date = new Date(dateString);
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return monthNames[date.getMonth()];
  }

  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    this.getNewsData();
  }

  getNewsData() {
    this.dataService.getData().subscribe((res: any) => {
      if (res && res.data) {
        this.news = res.data;
        console.log(this.news)
      }
    });
  }
  

}
