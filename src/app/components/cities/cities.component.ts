import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities:any;
  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
      this.getCitiesAll();
  }

  getCitiesAll() {
    this.dataService.getCities().subscribe((res: any) => {
      if (res && res.data) {
        this.cities = res.data;
        console.log(this.cities)
      }
    });
  }
}
