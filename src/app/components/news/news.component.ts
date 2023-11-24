import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:any;

  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    this.getNewsData();
  }

  getNewsData() {
    this.dataService.getData().subscribe((res: any) => {
      if (res && res.data) {
        this.news = res.data;
      }
    });
  }
  

}
