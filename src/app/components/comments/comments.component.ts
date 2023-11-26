import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
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
