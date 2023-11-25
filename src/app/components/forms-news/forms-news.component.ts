import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-forms-news',
  templateUrl: './forms-news.component.html',
  styleUrls: ['./forms-news.component.css']
})
export class FormsNewsComponent implements OnInit {
  newsForm!: FormGroup;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.newsForm = new FormGroup({
      cate_id: new FormControl(null, Validators.required),
      city_id: new FormControl(null, Validators.required),
      sub_cate_id: new FormControl(null, Validators.required),
      author_id: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      url_slugs: new FormControl(null, Validators.required),
      cover: new FormControl(null, Validators.required),
      video_url: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      short_descriptions: new FormControl(null, Validators.required),
      likes: new FormControl(null, Validators.required),
      comments: new FormControl(null, Validators.required),
      share_content: new FormControl(null, Validators.required),
      translations: new FormControl(null, Validators.required),
      seo_tags: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      coordinates: new FormControl(null, Validators.required),
      live_url: new FormControl(null, Validators.required),
      main_characters: new FormControl(null, Validators.required),
    });
  }

  submitForm() {
    this.dataService.insertNews('http://127.0.0.1:8000/api/news/create', this.newsForm.value);
    console.log('Form Data:', this.newsForm.value);
  }
}
