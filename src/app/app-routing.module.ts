import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrangchuComponent} from './trangchu/trangchu.component';
import {DanhmucmonhocComponent} from './danhmucmonhoc/danhmucmonhoc.component';
import {DoimatkhauComponent} from './doimatkhau/doimatkhau.component';
import {DangkyComponent} from './dangky/dangky.component';
import {DangnhapComponent} from './dangnhap/dangnhap.component';
import {GioithieuComponent} from './gioithieu/gioithieu.component';
import {GopyComponent} from './gopy/gopy.component';
import {HoidapComponent} from './hoidap/hoidap.component';
import {LienheComponent} from './lienhe/lienhe.component';
import {SuadoitaikhoanComponent} from './suadoitaikhoan/suadoitaikhoan.component';
import {TrangthitracnghiemComponent} from './trangthitracnghiem/trangthitracnghiem.component';



export const routes: Routes = [
  {path:'',component:TrangchuComponent},
  {path:'**',redirectTo:"trangchu",pathMatch:"full"},
  {path:'/trangchu', component:TrangchuComponent},
  {path:'/danhmucmonhoc', component: DanhmucmonhocComponent},
  {path:'/doimathau', component:DoimatkhauComponent},
  {path:'/dangky',component:DangkyComponent},
  {path:'/dangnhap',component:DangnhapComponent},
  {path:'/gioithieu',component:GioithieuComponent},
  {path:'/gopy',component:GopyComponent},
  {path:'/hoidap',component:HoidapComponent},
  {path:'/lienhe',component:LienheComponent},
  {path:'/suadoitaihoan',component:SuadoitaikhoanComponent},
  {path:'/trangthitracnghiem',component:TrangthitracnghiemComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports:[RouterModule]
})
export class AppRoutingModule { }
