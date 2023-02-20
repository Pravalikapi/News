import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { News } from '../news';
import { NewsOperationsServiceService } from '../news-operations-service.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {
  __newsService:NewsOperationsServiceService; 
  router:Router;
  activeRoute:ActivatedRoute;
   n:News = new News('','','','');
    constructor(newsService:NewsOperationsServiceService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__newsService = newsService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchCategory= this.activeRoute.snapshot.params['category']; 
    console.log(searchCategory);
    this.n= this.__newsService.getNewsByCategories(searchCategory); 
    console.log(this.n);
  }

}




