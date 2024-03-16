import api from '~services/api';

const USERS_STORAGE = 'ThuanDMT-users';
const QUESTIONS_STORAGE = 'ThuanDMT-questions';

describe('Data storage init correctly', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test(`Users storage should init as expected`, async () => {
    api.init();

    const usersJSON = window.localStorage.getItem(USERS_STORAGE);
    expect(usersJSON).not.toBeNull();

    expect(JSON.parse(usersJSON!)).toMatchSnapshot();
  });

  test(`Questions storage should init as expected`, async () => {
    api.init();

    const questionsJSON = window.localStorage.getItem(QUESTIONS_STORAGE);
    expect(questionsJSON).not.toBeNull();

    expect(JSON.parse(questionsJSON!)).toMatchSnapshot();
  });
});

describe('Data storage skip init correctly', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.localStorage.setItem(USERS_STORAGE, '{}');
    window.localStorage.setItem(QUESTIONS_STORAGE, '{}');
  });

  test(`Users storage should skip init as expected`, async () => {
    api.init();

    const usersJSON = window.localStorage.getItem(USERS_STORAGE);
    expect(JSON.parse(usersJSON!)).toEqual({});
  });

  test(`Question storage should skip init as expected`, async () => {
    api.init();

    const questionsJSON = window.localStorage.getItem(QUESTIONS_STORAGE);
    expect(JSON.parse(questionsJSON!)).toEqual({});
  });
});
