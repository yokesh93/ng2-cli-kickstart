import { Component, OnInit } from '@angular/core';
import { IsinService } from '../isin.service' 
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css'],
  providers:[IsinService,NewsComponent]
})
export class InitComponent implements OnInit {
  isin : string;
  showNews : boolean;
  showNoNews:boolean;
  posts:string[];
  constructor(private _isinService: IsinService) { }

  ngOnInit() {
    this.isin="";
    this.showNews=false;
    this.showNoNews=false;
  }
  searchISIN(){ 
    this.showNews=true;
    console.log(this.isin);
    this._isinService.getTrendingNews(this.isin).subscribe(posts => {
      console.log(posts); 
      if(posts === null || posts === undefined)
        this.showNoNews=true;
      this.posts=posts;
    });
    
  }
}
