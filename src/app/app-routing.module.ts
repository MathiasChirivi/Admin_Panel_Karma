import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsComponent } from './components/news/news.component';
import { BannersComponent } from './components/banners/banners.component';
import { LikeComponent } from './components/like/like.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CitiesComponent } from './components/cities/cities.component';
import { FormsNewsComponent } from './components/forms-news/forms-news.component';
import { SingleNewsComponent } from './components/single-news/single-news.component';

const routes: Routes = [
  {path:'Dashboard', component: DashboardComponent,},
  {path:'News', component:NewsComponent},
  {path: 'News/:id', component: SingleNewsComponent },
  {path:'Banners', component:BannersComponent},
  {path:'Like', component:LikeComponent},
  {path:'Comments', component:CommentsComponent},
  {path:'Categories', component:CategoriesComponent},
  {path:'Contacts', component:ContactsComponent},
  {path:'Cities', component:CitiesComponent},
  {path:'AddNews', component:FormsNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
