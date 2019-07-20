import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NGX_AUTO_ID_DEFAULT_PREFIX} from './DEFAULT_PREFIX_TOKEN';
import {NgxAutoIdDirective} from './NgxAutoIdDirective';

//tslint:disable:max-classes-per-file

describe('NgxAutoIdDirective', () => {
  let fixture: ComponentFixture<any>;
  let el: DebugElement;

  // noinspection AngularMissingOrInvalidDeclarationInModule
  @Component({
    template: '<div ngx-auto-id></div>'
  })
  class DummyDirectiveComponent {
    @ViewChild(NgxAutoIdDirective)
    public dir: NgxAutoIdDirective;
  }

  describe('NGX_AUTO_ID_DEFAULT_PREFIX_TOKEN', () => {
    let comp: DummyDirectiveComponent;

    function init() {
      fixture = TestBed.createComponent(DummyDirectiveComponent);
      comp = fixture.componentInstance;
      fixture.detectChanges();
      el = fixture.debugElement.query(By.css('div'));
    }

    it('Should not be required', () => {
      TestBed.configureTestingModule({
        declarations: [NgxAutoIdDirective, DummyDirectiveComponent]
      });
      init();
      expect(comp.dir.idPrefix).toBeUndefined();
    });

    describe('If not a string', () => {
      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [NgxAutoIdDirective, DummyDirectiveComponent],
          providers: [{
            provide: NGX_AUTO_ID_DEFAULT_PREFIX,
            useValue: <any>5
          }]
        });
      });

      it('idPrefix should remain undefined', () => {
        init();
        expect(comp.dir.idPrefix).toBeUndefined();
      });

      it('Should print warning', () => {
        let origConsoleWarn = console.warn;
        try {
          let msg: string = <any>null;
          console.warn = (argMsg: string) => {
            msg = argMsg;
          };
          init();
          expect(msg).toBe('NGX_AUTO_ID_DEFAULT_PREFIX_TOKEN not a string');
        } finally {
          console.warn = origConsoleWarn;
        }
      });
    });

    it('Should not be required', () => {
      TestBed.configureTestingModule({
        declarations: [NgxAutoIdDirective, DummyDirectiveComponent]
      });
      init();
      expect(comp.dir.idPrefix).toBeUndefined();
    });

    it('Should be set if a non-empty string', () => {
      TestBed.configureTestingModule({
        declarations: [NgxAutoIdDirective, DummyDirectiveComponent],
        providers: [{
          provide: NGX_AUTO_ID_DEFAULT_PREFIX,
          useValue: 'foobar$'
        }]
      });
      init();
      expect(comp.dir.idPrefix).toBe('foobar$');
    });
  });

  describe('Just the attribute', () => {
    let comp: DummyDirectiveComponent;

    function init() {
      fixture = TestBed.createComponent(DummyDirectiveComponent);
      comp = fixture.componentInstance;
      fixture.detectChanges();
      el = fixture.debugElement.query(By.css('div'));
    }

    beforeEach((() => {
      TestBed.configureTestingModule({
        declarations: [NgxAutoIdDirective, DummyDirectiveComponent]
      });

      init();
    }));

    it('ID should be el-1 after 1st run', () => {
      expect(el.attributes.id).toBe('el-1');
    });

    it('ID should be el-2 after 2nd run', () => {
      init();
      expect(el.attributes.id).toBe('el-2');
    });

    it('toString() should equal ID', () => {
      expect(comp.dir.toString()).toBe('el-1');
    });
  });

  describe('Configurable', () => {
    let comp: DummyConfigurableComponent;

    // noinspection AngularMissingOrInvalidDeclarationInModule
    @Component({
      template: '<div [ngx-auto-id]="id" [id-prefix]="prefix"></div>'
    })
    class DummyConfigurableComponent {
      public id = true;

      public prefix: string;
    }

    function init() {
      fixture = TestBed.createComponent(DummyConfigurableComponent);
      comp = fixture.componentInstance;
      el = fixture.debugElement.query(By.css('div'));
    }

    beforeEach((() => {
      TestBed.configureTestingModule({
        declarations: [NgxAutoIdDirective, DummyConfigurableComponent]
      });

      init();
    }));

    it('Should set the default id', () => {
      fixture.detectChanges();
      expect(el.attributes.id).toBe('el-1');
    });

    it('Should be disablable', () => {
      comp.id = false;
      fixture.detectChanges();
      expect(el.attributes.id).toBeNull();
    });

    it('Should allow setting the prefix', () => {
      const pref = Math.random().toString();
      comp.prefix = pref;
      fixture.detectChanges();
      expect(el.attributes.id).toBe(`${pref}1`);
    });

    it('Should count in base 36', () => {
      fixture.detectChanges();
      for (let i = 0; i < 34; i++) {
        init();
        fixture.detectChanges();
      }
      expect(el.attributes.id).toBe('el-z');
      init();
      fixture.detectChanges();
      expect(el.attributes.id).toBe('el-10');
    });
  });

  it('Should be enabled by default', () => {
    expect(NgxAutoIdDirective.prototype.enabled).toBe(true);
  });

  it('Should have the toStringTag NgxAutoIdDirective', () => {
    expect(NgxAutoIdDirective.prototype[Symbol.toStringTag]).toBe('NgxAutoIdDirective');
  });
});
