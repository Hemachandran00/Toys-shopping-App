
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'top-bar',
    templateUrl:'./topbar.component.html', 
    styleUrls: ['./top-bar.component.css'],
})
export class TopbarComponent implements OnInit {
    public collapse: boolean = false;
    public textname='';
    ngOnInit() {
    }
}