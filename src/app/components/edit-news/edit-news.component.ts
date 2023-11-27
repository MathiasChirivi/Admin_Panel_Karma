// edit-news.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  news: any;
  editForm: FormGroup;
  updateSuccess: boolean = false;
  updateError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      cate_id: ['', Validators.required],
      city_id: ['', Validators.required],
      sub_cate_id: ['', Validators.required],
      author_id: ['', Validators.required],
      title: ['', Validators.required],
      url_slugs: ['', Validators.required],
      cover: ['', Validators.required],
      video_url: ['', Validators.required],
      content: ['', Validators.required],
      short_descriptions: ['', Validators.required],
      likes: ['', Validators.required],
      comments: ['', Validators.required],
      share_content: ['', Validators.required],
      translations: ['', Validators.required],
      seo_tags: ['', Validators.required],
      status: ['', Validators.required],
      coordinates: ['', Validators.required],
      live_url: ['', Validators.required],
      main_characters: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const newsId = params['id'];
      this.dataService.getById(newsId).subscribe((res: any) => {
        if (res && res.data) {
          this.news = res.data;
          this.editForm.patchValue(this.news);
        }
      });
    });
  }

  updateNews() {
    this.dataService.updateNews(this.news.id, this.editForm.value).subscribe(
      (res: any) => {
        if (res && res.success) {
          this.updateSuccess = true;
          this.updateError = false;
        } else {
          this.updateError = true;
        }
      },
      (error) => {
        console.error('Error updating news:', error);
        this.updateError = true;
      }
    );
  }
}
