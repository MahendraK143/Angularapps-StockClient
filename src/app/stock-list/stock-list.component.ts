import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stockModel;
  public stockId;
  public stocks;
  public stocksBackUp;
  public ss;
  public name;
  public cnfMsg;
  constructor(private _stockService: StockService,
              private router: Router) { }

    ngOnInit() {
      this._stockService.getAllStocks().subscribe(data => {
        this.stocks = data;
        this.stocksBackUp = data;
      });
    }
  editStock(stockId : number){
    this._stockService.getStockById(stockId).subscribe(data => {
      this.stockModel = data;
      alert(this.stockModel);
      this.router.navigate(['/new-stock',{stockModel:this.stockModel}]);
    });
  }
  searchStock(event: any){
    alert("sss:"+event.target.value);
    //this.ss = this.stocks;
    //this.stocks = [];
    this.name = event.target.value;
    this.stocks = this._stockService.searchStockByName(event.target.value);
    //alert("sss:"+name);
    //for(var i=0;this.stocksBackUp.length>0;i++){
      //alert("nnnn");
      //if(this.name !== "" && this.stocksBackUp[i].name.search(this.name)){
        //this.ss[i]=this.stocksBackUp[i];
      //}
    //}
    //if(this.ss.length>0){
    //  this.stocks = this.ss;
    //}
    
  }

  deleteStock(stockId : number){
    alert(stockId);
    this._stockService.deleteStockById(stockId).subscribe(data => {
      this.stocks = data;
      alert(this.stocks);
    });
  }
}
