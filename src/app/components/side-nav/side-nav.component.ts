import { Component, OnInit } from '@angular/core';
import { faDashboard,  faNewspaper, faBandage, faThumbsUp, faComment, faList, faContactBook, faCity, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  faDashboard = faDashboard;
  faNewspaper = faNewspaper;
  faBandage = faBandage;
  faThumbsUp = faThumbsUp;
  faComment = faComment;
  faList = faList;
  faContactBook = faContactBook;
  faCity = faCity;
  faPlus = faPlus;


  constructor() { }

  ngOnInit(): void {
  }

}