import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NgxAutoIdDirective} from './NgxAutoIdDirective';

//tslint:disable:max-classes-per-file

describe('NgxAutoIdDirective', () => {
  let fixture: ComponentFixture<any>;
  let el: DebugElement;

  describe('Just the attribute', () => {
    let comp: any;

    // noinspection AngularMissingOrInvalidDeclarationInModule
    @Component({
      template: '<div ngx-auto-id></div>'
    })
    class DummyComponent {
      @ViewChild(NgxAutoIdDirective, {static: false})
      public dir: NgxAutoIdDirective;
    }

    function init() {
      fixture = TestBed.createComponent(DummyComponent);
      comp = fixture.componentInstance;
      fixture.detectChanges();
      el = fixture.debugElement.query(By.css('div'));
    }

    beforeEach((() => {
      TestBed.configureTestingModule({
        declarations: [NgxAutoIdDirective, DummyComponent]
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
    let comp: DummyComponent;

    // noinspection AngularMissingOrInvalidDeclarationInModule
    @Component({
      template: '<div [ngx-auto-id]="id" [id-prefix]="prefix"></div>'
    })
    class DummyComponent {
      public id = true;

      public prefix: string;
    }

    function init() {
      fixture = TestBed.createComponent(DummyComponent);
      comp = fixture.componentInstance;
      el = fixture.debugElement.query(By.css('div'));
    }

    beforeEach((() => {
      TestBed.configureTestingModule({
        declarations: [NgxAutoIdDirective, DummyComponent]
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
});
