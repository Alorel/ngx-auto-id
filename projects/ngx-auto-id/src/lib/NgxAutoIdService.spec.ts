import {NgxAutoIdService} from './NgxAutoIdService';

describe('NgxAutoIdService', () => {
  let svc: NgxAutoIdService;

  beforeEach(() => {
    svc = new NgxAutoIdService();
  });

  describe('next', () => {
    it('Prefix should default to el-', () => {
      expect(svc.next()).toBe('el-1');
    });

    it('Default prefix should increment', () => {
      svc.next();
      expect(svc.next()).toBe('el-2');
    });

    it('Different prefix should increment independently', () => {
      svc.next();
      expect(svc.next('foo-')).toBe('foo-1');
    });
  });

  it('toString should alias this.next()', () => {
    svc.next();
    svc.next('foo-');
    expect(svc.toString()).toBe('el-2');
  });

  it('toStringTag should be NgxAutoIdService', () => {
    expect(svc[Symbol.toStringTag]).toBe('NgxAutoIdService');
  });
});
