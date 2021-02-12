import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/products.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
    public products:Array<Product>;
  private sub;
  private sub1;
  public linkname:string;
  public dispdata:{routename:string,lisnum:number,dataurl:string};

  constructor(
       private productService:ProductService,
       private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.loaddata();
      this.load();
  }
  loaddata = () => {
    this.sub1=this.route.params.subscribe(res => {
        console.log("The param value "+res.hero)
        if(res.hero==undefined){
          this.dispdata={lisnum:0,routename:"../category/",dataurl:"http://localhost:3000/category"};
        }
        else{
          this.dispdata={lisnum:1,routename:"../../product/",dataurl:"http://localhost:3000/category/"+res.hero};
          }
        // console.log("The data is"+this.dispdata.lisnum+"  "+this.dispdata.routename);
      })
     
 };
  load = () => {
     this.sub = this.productService.getProducts(this.dispdata.dataurl)
          .subscribe(res => {
              console.log(res);
              this.products = res;
          })
      
  };

  onlinkname(prod:Product,x:number){
      x=x+1;
      if(this.dispdata.lisnum==0){
        return this.dispdata.routename+(prod.hero).trim();    
      }
      return this.dispdata.routename+x;   
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
      
      this.sub1.unsubscribe();
  }
 }
