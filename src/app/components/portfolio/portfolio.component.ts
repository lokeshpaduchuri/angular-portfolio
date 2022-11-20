import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from '../../services/image.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public imageService: ImageService) { }

  // store portfolio home image data
  homeImages = [];
  
  ngOnInit(): void {
    this.showimages();
  }

  showimages(): any {
    this.imageService.getFiles('product');
  }
}
