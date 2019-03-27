import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgxAutoIdDirective} from './NgxAutoIdDirective';

@NgModule({
  declarations: [NgxAutoIdDirective],
  exports: [NgxAutoIdDirective],
  imports: [CommonModule]
})
export class NgxAutoIdModule {
}
