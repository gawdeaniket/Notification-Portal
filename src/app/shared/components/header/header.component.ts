import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  alertcheck:boolean = false;
  constructor(private _router:Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('loginInfo');
    localStorage.clear();
    this._router.navigate(['']);

  }

}
