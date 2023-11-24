import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import {faNewspaper, faThumbsUp, faBandage, faList, faCity} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  faNewspaper = faNewspaper;
  faThumbsUp = faThumbsUp;
  faBandage = faBandage;
  faList = faList;
  faCity = faCity;

  
  newsCount: any;
  bannersCount:any;
  categoriesCount:any;
  citiesCount:any;
  banners:any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getSumNews();
    this.getSummBanners();
    this.getSummCategories();
    this.getSummCities();
    this.getCoverBanners()
  }

  getSumNews() {
    this.dataService.getCoutNews().subscribe((res: any) => {
      if (res && res) {
        this.newsCount = res;
      }
      // console.log(res);
    });
  }

  getSummBanners(){
    this.dataService.getCountBanners().subscribe((res: any) => {
      if (res && res) {
        this.bannersCount = res;
      }
      // console.log(res);
    });
  }

  getSummCategories(){
    this.dataService.getCountCategories().subscribe((res: any) => {
      if (res && res) {
        this.categoriesCount = res;
      }
      // console.log(res);
    });
  }

  getSummCities(){
    this.dataService.getCountCities().subscribe((res: any) => {
      if (res && res) {
        this.citiesCount = res;
      }
      // console.log(res);
    });
  }

  getCoverBanners(){
    this.dataService.getCoverBanners().subscribe((res: any) => {
      if (res && res.data) {
        this.banners = res.data;
      }
      console.log(res);
    });
  }
}
