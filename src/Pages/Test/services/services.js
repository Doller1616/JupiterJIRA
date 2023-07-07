import APIs from '@RootService/apis';
const { products } = APIs.ENDPOINTS; 

export const fetchPostsApi = async (params) => {
  try {    
    console.log('***************',params);
    const res = await APIs.getReq(products, params);
    return res;
  } catch (error) {
    console.log(error)
  }
};