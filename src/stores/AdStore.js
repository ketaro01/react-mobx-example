import { observable, action } from 'mobx';
import BackendApi from '../service/BackendApi';

class AdStore {
  constructor(root){
    // 전체 스토어
    this.root = root;
  }

  // 구독
  @observable adData = [];

  // set action
  @action setAdData = (adData) => { this.adData = adData };
  @action setLastError = (error) => { this.root.lastError = error };

  // api connect action
  @action getAdData = async () => {
    try {
      const response = await BackendApi.getAdData();
      if (response.status === 200) {
        this.setAdData(response.data.ad_data);
      } else {
        this.setLastError(new Error(response.status));
      }
    } catch (error) {
      this.setLastError(error);
    }
  }
}

export default AdStore;