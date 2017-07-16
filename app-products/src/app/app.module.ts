import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {AppComponent} from './app.component';

import {Services} from './_services/array';
import {Componets} from './mainComponets';

@NgModule({
  declarations: [
    AppComponent,
    ...Componets
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ...Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
