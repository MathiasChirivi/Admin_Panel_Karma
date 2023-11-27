import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
  banners:any;
  constructor(private dataService: DataService){}

  ngOnInit(): void {
      this.getCoverBanners();
  }

  getCoverBanners(){
    this.dataService.getCoverBanners().subscribe((res: any) => {
      if (res && res.data) {
        this.banners = res.data;
      }
      // console.log(res);
    });
  }
}
