// import axios from 'axios';
// const http = (options) => axios.create({
//   headers: {
//     'cache-control': 'no-cache, no-store',
//     Pragma: 'no-cache',
//   },
// });
const delay = (ms = 50) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  } ,ms)
});
const setResponseData = (data, status = 200) => ({
  data: {
    ...data,
    result_code: status
  },
  status,
});

const BackendApi = {
  getCategoryList: () => new Promise(async (resolve) => {
    await delay();
    // test data
    const category_list = [
      { name: 'Apple', value: 1 },
      { name: 'SAMSUNG', value: 2 },
      { name: 'LG', value: 3 },
    ];
    resolve(setResponseData({ category_list }));
  }),
  getAdData: () => new Promise(async (resolve) => {
    await delay();
    // test data
    const ad_data = [
      { img_url: 'https://source.unsplash.com/random/800x600/?fruit', link_url: '/product/1', description: 'blah blah' },
      { img_url: 'https://source.unsplash.com/random/800x600/?city', link_url: '/product/2', description: 'blah blah' },
      { img_url: 'https://source.unsplash.com/random/800x600/?night', link_url: '/product/3', description: 'blah blah' },
    ];
    resolve(setResponseData({ ad_data }));
  }),
};

export default BackendApi;