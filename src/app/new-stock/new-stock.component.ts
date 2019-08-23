import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.css']
})
export class NewStockComponent implements OnInit {
  stockModel: any = {};
  isEditForm=false;
  public successMsg;
  constructor(private _stockService:StockService,
              private router: Router,
              private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this._stockService.getStockById(id).subscribe((data: any) => {
          if (data) {
            this.stockModel = data;
            this.stockModel.isUpdate = true;
            this.isEditForm = true;
          } else {
            console.log(`stock with id '${id}' not found, returning to list`);
            this.redirectToStockList();
          }
        });
      }
    });
  }
  onSubmit(){
    //document.getElementById("stackId").
    alert(this.stockModel.isUpdate);
    if(this.stockModel.isUpdate){
      alert(this.stockModel.isUpdate);
      this._stockService.putStock(this.stockModel).subscribe(data => {
        this.router.navigate(['/stock-list']);  
        //this.successMsg = data;
      }, error => console.error()
      );
  
    } else {
      this._stockService.postStock(this.stockModel).subscribe(data => {
        this.router.navigate(['/stock-list']);  
        //this.successMsg = data;
      }, error => console.error()
      );
  
    }
  }
 
  redirectToStockList(){
    this.router.navigate(['/stock-list']);
  }
}
