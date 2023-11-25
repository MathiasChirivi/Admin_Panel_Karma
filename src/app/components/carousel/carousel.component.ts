import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  banners: any[] = [];
  responsiveOptions: any[] | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getCoverBanners();

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '320px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getCoverBanners(): void {
    this.dataService.getCoverBanners().subscribe((res: any) => {
      if (res && res.data) {
        this.banners = res.data;
      }
    });
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info'; // Cambia il valore di default secondo le tue esigenze
    }
  }
}
