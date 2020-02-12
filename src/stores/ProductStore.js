import { observable, action, computed } from 'mobx';
import BackendApi from '../service/BackendApi';

class ProductStore {
  constructor(root){
    // 전체 스토어
    this.root = root;
  }
  // 구독
  @observable lastError; // 에러
  @observable categoryList = []; // 최상위 상품 카테고리
  @observable productList = []; // 상품 정보
  @observable checkList = []; // 사용자가 본적이 있는 product list
  @observable adInfo = {}; // 상푸뫟면 광고 정보
  @computed get productCount() { return this.productList.length };
  @computed get checkCount() { return this.checkList.length };

  @action setCategoryList = (categoryList) => { this.categoryList = categoryList };
  @action setProductList = (productList) => { this.productList = productList };
  @action setAdInfo = (adInfo) => { this.adInfo = adInfo };
  @action setCheckList = (checkList) => { this.checkList = checkList };
  @action setLastError = (error) => { this.root.lastError = error };

  @action getCategoryList = async () => {
    try {
      const response = await BackendApi.getCategoryList();
      if (response.status === 200) {
        this.setCategoryList(response.data.category_list);
      } else {
        this.setLastError(new Error(response.status));
      }
    } catch (error) {
      this.setLastError(error);
    }
  }

  @action getProductList = async (category_id) => {
    try {
      const response = await BackendApi.getProductList(category_id);
      if (response.status === 200) {
        this.setProductList(response.data.product_list);
        this.setAdInfo(response.data.ad_info);
      } else {
        this.setLastError(new Error(response.status));
      }
    } catch (error) {
      this.setLastError(error);
    }
  }
}

export default ProductStore;