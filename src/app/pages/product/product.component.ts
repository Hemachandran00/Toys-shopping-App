import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    private sub;
    public product:Product;
    constructor(private route: ActivatedRoute,
                private productService:ProductService,
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe(res => {
                this.getProduct(res.id);
            })
    }
    getProduct = (id) => {
        this.sub = this.productService.getProducts('http://localhost:3000/product/'+(id-1))
            .subscribe(res => {
                console.log(res);
                this.product = res[0];
            })
    };
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
