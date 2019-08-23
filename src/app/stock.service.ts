import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stock: any = {};
  public API = '//localhost:8181';
  public STOCK_API = this.API + '/stock-list';
  constructor(private http:HttpClient) { }
  //constructor() { }

  getAllStocks(){
    //alert("aaaa");
    return this.http.get(this.API+"/stock-list");
  }
  postStock(stock: Stock){
    alert(stock);
    return this.http.post(this.API+"/new-stock",stock);
  }
  putStock(stock: Stock){
    alert(JSON.stringify(stock));
    return this.http.put(this.API+"/update-stock",JSON.stringify(stock));
  }
  getStockById(stockId: number){
    alert(stockId);
    return this.http.get(this.API+"/getStockById?stockId="+stockId);
    //return this.http.get(this.API+"/searchStockByName?name="+stockId);
  }
  deleteStockById(stockId: number){
    alert(stockId);
    return this.http.delete(this.API+"/delete-stock?stockId="+stockId);
  }
  searchStockByName(name: string){
    alert(name);
    return this.http.get(this.API+"/searchStockByName?name="+name);
  }
}
