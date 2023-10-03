import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Item {
  ID: number | undefined;
  ServiceTax: string | undefined;
  Branch: string | undefined;
  PartyAccount : number | undefined;
  VATCSTTransaction : string | undefined;
  PriceList : number | undefined;
}

const item: Item[] = [{
  ID: 1,
  ServiceTax: 'Banana',
  Branch: 'Fruits',
  PartyAccount : 12,
  VATCSTTransaction : 'credited',
  PriceList : 10

}, {
  ID: 2,
  ServiceTax: 'Cucumber',
  Branch: 'Vegetables',
  PartyAccount : 123,
  VATCSTTransaction : 'credited',
  PriceList : 100
}, {
  ID: 3,
  ServiceTax: 'Apple',
  Branch: 'Fruits',
  PartyAccount : 1234,
  VATCSTTransaction : 'credited',PriceList : 1000
}, {
  ID: 4,
  ServiceTax: 'Tomato',
  Branch: 'Vegetables',
  PartyAccount : 12345,
  VATCSTTransaction : 'credited',PriceList : 10000
}, {
  ID: 5,
  ServiceTax: 'Apricot',
  Branch: 'Fruits',
  PartyAccount : 123456,VATCSTTransaction : 'credited',PriceList : 100000

}]

@Injectable()
export class DataforAboutService {
  getItems(): Item[] {
      return item;
  }
}


