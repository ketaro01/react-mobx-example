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
  getCategoryList: (params) => new Promise(async (resolve) => {
    await delay();
    // test data
    const category_list = [
      { name: 'apple', value: 1 },
      { name: 'samsung', value: 2 },
      { name: 'lg', value: 3 },
    ];
    resolve(setResponseData({ category_list }));
  })
};

export default BackendApi;