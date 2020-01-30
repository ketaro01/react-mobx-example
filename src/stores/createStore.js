import { configure } from 'mobx';
import { STORE_PRODUCT } from '../lib/type/stores';
import ProductStore from './ProductStore';

configure({ enforceActions: true });

export class createStore {
  constructor() {
    this[STORE_PRODUCT] = new ProductStore();
  }
}