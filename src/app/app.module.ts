import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { SuadoitaikhoanComponent } from './suadoitaikhoan/suadoitaikhoan.component';
import { DanhmucmonhocComponent } from './danhmucmonhoc/danhmucmonhoc.component';
import { TrangthitracnghiemComponent } from './trangthitracnghiem/trangthitracnghiem.component';
import {KetnoiService} from './serve/ketnoi.service';


@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    GioithieuComponent,
    LienheComponent,
    GopyComponent,
    HoidapComponent,
    DangnhapComponent,
    DangkyComponent,
    DoimatkhauComponent,
    SuadoitaikhoanComponent,
    DanhmucmonhocComponent,
    TrangthitracnghiemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    KetnoiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
