import { configure, observable } from 'mobx';
import { STORE_PRODUCT, STORE_AD } from '../lib/type/stores';
import ProductStore from './ProductStore';
import AdStore from './AdStore';

configure({ enforceActions: 'observed' });

export class createStore {
  constructor() {
    this[STORE_PRODUCT] = new ProductStore(this);
    this[STORE_AD] = new AdStore(this);
  }

  @observable lastError; // 에러
}