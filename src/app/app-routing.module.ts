import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockListComponent } from './stock-list/stock-list.component';
import { HomeComponent } from './home/home.component';
import { NewStockComponent } from './new-stock/new-stock.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'stock-list', component: StockListComponent},
  { path: 'delete-list/:id', component: StockListComponent},
  { path: 'new-stock', component: NewStockComponent},
  { path: 'new-stock/:id', component: NewStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
