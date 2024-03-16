import api, {
  CreateUserParams,
  SignInParams,
  userApi,
} from '~services/api';

const USER_SESSION = 'ThuanDMT-user';

beforeAll(() => {
  api.init();
});

describe('userApi.signIn work correctly', () => {
  const params: SignInParams = {
    userId: 'mtsamis',
    password: 'xyz123',
  };

  beforeEach(() => {
    window.sessionStorage.clear();
  });

  test(`User sign in as expected`, async () => {
    const user = await userApi.signIn(params);
    expect(user).toMatchSnapshot();

    const userIdJson = window.sessionStorage.getItem(USER_SESSION);
    expect(userIdJson).toEqual(JSON.stringify(user.id));
  });

  test(`Reject as expected if not found user`, async () => {
    const wrongParams = {
      ...params,
      userId: 'mtsamis123',
    };

    await expect(userApi.signIn(wrongParams)).rejects.toThrow(`User with id '${wrongParams.userId}' not found`);
  });

  test(`Reject as expected if wrong password`, async () => {
    const wrongParams = {
      ...params,
      password: 'abc123',
    };

    await expect(userApi.signIn(wrongParams)).rejects.toThrow('User or password is incorrect');
  });
});

describe('userApi.verifyAuth work correctly', () => {
  const params: SignInParams = {
    userId: 'mtsamis',
    password: 'xyz123',
  };

  beforeEach(() => {
    window.sessionStorage.clear();
  });

  test(`Resolve as expected if not authenticate`, async () => {
    await expect(userApi.verifyAuth()).resolves.toEqual({
      isAuth: false,
    });
  });

  test(`Reject as expected if not found user`, async () => {
    const wrongUserId = 'mtsamis123';

    window.sessionStorage.setItem(USER_SESSION, JSON.stringify(wrongUserId));

    await expect(userApi.verifyAuth()).rejects.toThrow(`User with id '${wrongUserId}' not found`);
  });

  test(`Resolve as expected if authenticated`, async () => {
    const user = await userApi.signIn(params);

    await expect(userApi.verifyAuth()).resolves.toEqual({
      isAuth: true,
      user,
    });
  });
});

describe('userApi.signOut work correctly', () => {
  const params: SignInParams = {
    userId: 'mtsamis',
    password: 'xyz123',
  };

  beforeEach(async () => {
    window.sessionStorage.clear();

    await userApi.signIn(params);
  });

  test(`Resolve as expected`, async () => {
    await userApi.signOut();

    const userIdJson = window.sessionStorage.getItem(USER_SESSION);
    expect(userIdJson).toEqual(JSON.stringify(null));
  });
});

describe('userApi.getUsers work correctly', () => {
  test(`Users get as expected`, async () => {
    const users = await userApi.getUsers();
    expect(users).toMatchSnapshot();
  });
});

describe('userApi.getUser work correctly', () => {
  const userId = 'mtsamis';

  test(`User get as expected`, async () => {
    const user = await userApi.getUser(userId);
    expect(user).toMatchSnapshot();
  });

  test(`Reject as expected if not found user`, async () => {
    const wrongUserId = 'mtsamis123';

    await expect(userApi.getUser(wrongUserId)).rejects.toThrow(`User with id '${wrongUserId}' not found`);
  });
});

describe('userApi.createUser work correctly', () => {
  const params: CreateUserParams = {
    userId: 'thuandmt',
    name: 'Thuan Dao',
    password: 'abc123',
  };

  test.each(
    Object.keys(params).map<[string, CreateUserParams]>((key) => [
      key,
      {
        ...params,
        [key]: '',
      },
    ]),
  )('Reject as expected if missing %s', async (_, wrongParams) => {
    await expect(userApi.createUser(wrongParams)).rejects.toThrow('Please provide userId, name, password');
  });

  test('Reject as expected if user exists', async () => {
    const wrongParams = {
      ...params,
      userId: 'mtsamis',
    };

    await expect(userApi.createUser(wrongParams)).rejects.toThrow('This user already exists');
  });

  test('User create as expected', async () => {
    const user = await userApi.createUser(params);

    await expect(userApi.getUser(user.id)).resolves.toEqual(user);
  });
});
