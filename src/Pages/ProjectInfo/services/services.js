import APIs from '@RootService/apis'
const { getReq, ENDPOINTS } = APIs;

export const getAllProjects = async () => {
      const res = await getReq(ENDPOINTS.getProject);
      return res?.data;
  };