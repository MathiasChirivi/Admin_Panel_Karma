import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsComponent } from './components/news/news.component';
import { BannersComponent } from './components/banners/banners.component';
import { LikeComponent } from './components/like/like.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CitiesComponent } from './components/cities/cities.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { RouterModule, Routes } from "@angular/router";
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormsNewsComponent } from './components/forms-news/forms-news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleNewsComponent } from './components/single-news/single-news.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';

const appRoutes: Routes = [
  {path:'' , component:NewsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SideNavComponent,
    DashboardComponent,
    NewsComponent,
    BannersComponent,
    LikeComponent,
    CommentsComponent,
    CategoriesComponent,
    ContactsComponent,
    CitiesComponent,
    CarouselComponent,
    FormsNewsComponent,
    SingleNewsComponent,
    EditNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
