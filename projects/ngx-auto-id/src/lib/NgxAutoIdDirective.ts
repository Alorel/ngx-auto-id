import {Directive, HostBinding, Input, OnInit} from '@angular/core';
import {NgxAutoIdService} from './NgxAutoIdService';

const _svc: unique symbol = Symbol('svc');
const _id: unique symbol = Symbol('id');

@Directive({
  exportAs: 'ngx-auto-id',
  selector: '[ngx-auto-id]'
})
export class NgxAutoIdDirective implements OnInit {

  @Input('ngx-auto-id')
  public enabled: boolean;

  @Input('id-prefix')
  public idPrefix: string;

  private [_id]: string;

  private [_svc]: NgxAutoIdService;

  public constructor(svc: NgxAutoIdService) {
    Object.defineProperty(this, _svc, {value: svc});
  }

  @HostBinding('attr.id')
  public get idBinding(): string | null {
    return this.enabled === false ? null : this[_id];
  }

  public ngOnInit(): void {
    Object.defineProperty(this, _id, {value: this[_svc].next(this.idPrefix)});
  }

  public toString(): string {
    return this[_id];
  }
}

NgxAutoIdDirective.prototype.enabled = true;
NgxAutoIdDirective[Symbol.toStringTag] = 'NgxAutoIdDirective';
