import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgxAutoIdDirective} from './NgxAutoIdDirective';

const declarations = [NgxAutoIdDirective];

/** Core auto ID module */
@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule]
})
export class NgxAutoIdModule {
}
