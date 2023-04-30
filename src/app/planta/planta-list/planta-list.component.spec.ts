/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantaListComponent } from './planta-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListComponent ],
      providers: [PlantaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    for (let i = 0; i < 3; i++) {
      const planta: Planta = new Planta(
        faker.datatype.number({max: 10}),
        faker.commerce.productName(),
        faker.commerce.productName(),
        faker.random.word(),
        faker.datatype.number({max: 100}),
        faker.random.word(),
        faker.random.word(),
      )
      component.plantas.push(planta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create a table with plant information', () => {
    const trList = debug.nativeElement.querySelectorAll('tbody tr');
    expect(trList.length).toEqual(component.plantas.length);

    for (let i = 0; i < component.plantas.length; i++) {
      const planta = component.plantas[i];
      const tr = trList[i];
      const tdList = tr.querySelectorAll('td');
      expect(tdList[0].textContent).toEqual(planta.nombre_comun);
      expect(tdList[1].textContent).toEqual(planta.tipo);
      expect(tdList[2].textContent).toEqual(planta.clima);
    }
  });
  it('should have a table header', () => {
    const table = debug.query(By.css('table'));
    const thead = table.query(By.css('thead'));
    const rows = thead.queryAll(By.css('tr'));
    expect(rows.length).toBeGreaterThan(0);
    const headers = rows[0].queryAll(By.css('th'));
    expect(headers.length).toBe(4);
    expect(headers[0].nativeElement.innerText).toBe('#');
    expect(headers[1].nativeElement.innerText).toBe('Nombre común');
    expect(headers[2].nativeElement.innerText).toBe('Tipo');
    expect(headers[3].nativeElement.innerText).toBe('Clima');
  });
  it('should display 3 rows in table body', () => {
    const tableBody = debug.nativeElement.querySelector('tbody');
    const rows = tableBody.querySelectorAll('tr');
    expect(rows.length).toEqual(3);
  });

 });
