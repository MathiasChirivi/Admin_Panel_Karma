import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit{

  news:any;
  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    this.getNewsData()
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
