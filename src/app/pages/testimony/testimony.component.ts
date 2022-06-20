import { Component, OnInit } from '@angular/core';

export interface Testimony {
  name: string; // имя владельца
  house: number; // Номер участка
  balance: number; // Баланс
  is_duty: boolean // Является ли должником
}
@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit {

  testName: string[] = ['Михаил', 'Алиса', 'Вера', 'Василий', 'Всеволод', 'Пётр'];

  testFName: string[] = ['Острожский', 'Меркушев', 'Дзюба', 'Силин', 'Иванив', 'Козлов'];

  public testimony: Testimony[] = [{
    name: 'test',
    house: 34,
    balance: 4000,
    is_duty: false
  }];

  constructor() { }

  ngOnInit(): void {
    this.testName.forEach((name) => {
      this.testFName.forEach((last_name) => {
        const balance: number = this.getRandomArbitrary(-50000,30000);
        const is_duty: boolean = this.getRandomArbitrary(-50000,30000) > 0;
        this.testimony?.push({
          name: name + ' ' + last_name,
          house: this.getRandomArbitrary(1,100),
          balance: balance,
          is_duty: is_duty
        })
      })
    })
  }

  private getRandomArbitrary(min: number, max: number): number {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }


}
