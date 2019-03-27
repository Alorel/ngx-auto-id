import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxAutoIdModule} from '../../projects/ngx-auto-id/src/public_api';
import {AppComponent} from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAutoIdModule
  ]
})
export class AppModule {
}
