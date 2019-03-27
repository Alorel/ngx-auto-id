import {Injectable} from '@angular/core';

//tslint:disable:no-magic-numbers

const _registry: unique symbol = Symbol('registry');

@Injectable({providedIn: 'root'})
export class NgxAutoIdService {
  private readonly [_registry]: { [k: string]: number };

  public constructor() {
    Object.defineProperty(this, _registry, {value: {}});
  }

  /**
   * Get the next ID
   * @param prefix Prefix of the ID
   */
  public next(prefix = 'el-'): string {
    if (!(prefix in this[_registry])) {
      this[_registry][prefix] = 0;
    }

    //tslint:disable-next-line:no-magic-numbers
    return prefix + (++this[_registry][prefix]).toString(36);
  }
}
