import init from './_init';
import * as questionApi from './_question';
import * as userApi from './_user';

export * from './_question.type';
export * from './_user.type';

const api = {
  init,
};

export default api;

export { questionApi, userApi };
