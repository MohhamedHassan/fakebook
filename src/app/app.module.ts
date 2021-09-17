import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SwiperModule } from 'swiper/angular';
import { MatMenuModule } from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NotFoundComponent } from './notFound/not-found/not-found.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { SharedModule } from './shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import ar from '@angular/common/locales/ar';
import de from '@angular/common/locales/de';
import tr from '@angular/common/locales/tr';
import en from '@angular/common/locales/en';
registerLocaleData(ar);
registerLocaleData(de);
registerLocaleData(tr);
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    SwiperModule,
    MatMenuModule,
    MatSlideToggleModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader: {
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}