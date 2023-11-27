import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any;
  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
      this.getCategories();
  }

  getCategories(){
    this.dataService.getCategories().subscribe((res: any) => {
      if (res && res.data) {
        this.categories = res.data;
      }
      // console.log(res);
    });
  }
}
