import initData from './_data';
import * as questionApi from './_question';
import * as userApi from './_user';

export * from './_question.type';
export * from './_user.type';

const api = {
  init: initData,
};

export default api;

export { questionApi, userApi };
