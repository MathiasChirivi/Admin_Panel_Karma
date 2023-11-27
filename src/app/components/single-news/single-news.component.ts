import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {
  news:any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const newsId = params['id'];
      this.getNewsById(newsId);
    });
  }

  getNewsById(id: string) {
    this.dataService.getById(id).subscribe((res: any) => {
      if (res && res.data) {
        this.news = res.data;
        console.log(this.news);
      }
    });
  }

  deleteNews() {
    if (confirm('Are you sure you want to delete this news?')) {
      this.dataService.deleteNews(this.news.id).subscribe((res: any) => {
        if (res && res.success) {
          this.router.navigate(['/News']);
        }
      });
    }
  }
}
