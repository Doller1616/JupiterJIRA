import APIs from '@RootService/apis'
const { getReq, ENDPOINTS} = APIs;

export const getTimesheetList = async (params) => {
  const res = await getReq(ENDPOINTS.timesheet, params);
  
  return res?.data;
}

export const getProjectList = async () => {
  const res = await getReq(ENDPOINTS.getProject);
  
  return res?.data;
}


