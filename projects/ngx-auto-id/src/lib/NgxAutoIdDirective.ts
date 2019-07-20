import {Directive, HostBinding, Input, OnInit} from '@angular/core';
import {NgxAutoIdService} from './NgxAutoIdService';

const _svc: unique symbol = Symbol('svc');
const _id: unique symbol = Symbol('id');

/**
 * Automatically generates and sets a unique ID on the HTML element
 * Exported as ngx-auto-id
 */
@Directive({
  exportAs: 'ngx-auto-id',
  selector: '[ngx-auto-id]'
})
export class NgxAutoIdDirective implements OnInit {

  /** Set to false to prevent the id attribute from being set */
  @Input('ngx-auto-id')
  public enabled: boolean;

  /** ID prefix. Defaults to "el-" */
  @Input('id-prefix')
  public idPrefix: string;

  /** @internal */
  private [_id]: string;

  /** @internal */
  private [_svc]: NgxAutoIdService;

  public constructor(svc: NgxAutoIdService) {
    Object.defineProperty(this, _svc, {value: svc});
  }

  /**
   * Binding that determines the id attribute
   * @return The generated ID or null if the directive is disabled
   */
  @HostBinding('attr.id')
  public get idBinding(): string | null {
    return this.enabled === false ? null : this[_id];
  }

  /** @inheritDoc */
  public ngOnInit(): void {
    Object.defineProperty(this, _id, {value: this[_svc].next(this.idPrefix)});
  }

  /** Return the generated ID */
  public toString(): string {
    return this[_id];
  }
}

Object.assign(NgxAutoIdDirective.prototype, {
  enabled: true,
  [Symbol.toStringTag]: 'NgxAutoIdDirective'
});
