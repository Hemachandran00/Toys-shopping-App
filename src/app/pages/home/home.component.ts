import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private sub;

  constructor(
    private route: ActivatedRoute,
    private productService:ProductService){}
    public datadetail;
    ngOnInit() {
      this.sub = this.productService.getProducts('../../assets/mock-data/products.json')
          .subscribe(res => {
            this.datadetail=res;
              console.log(this.datadetail);
          })
              
  }
  change(){
    return 'url("../../../assets/imgs/datadetail.image") no-repeat'
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
}


}
