import { Component } from '@angular/core';
import { StockService } from './stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public stocks;
  title = 'StockClient';

  constructor(private _stockService:StockService,
              private router: Router){}
  searchStock(event: any){
    alert("sss:"+event.target.value);
    this.stocks = this._stockService.searchStockByName(event.target.value);
  }
}
