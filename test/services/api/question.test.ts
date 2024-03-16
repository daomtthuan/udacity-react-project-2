import api, { CreateQuestionAnswerParams, CreateQuestionParams, questionApi } from '~services/api';

beforeAll(() => {
  api.init();
});

describe('questionApi.getQuestions work correctly', () => {
  test(`Questions get as expected`, async () => {
    const questions = await questionApi.getQuestions();
    expect(questions).toMatchSnapshot();
  });
});

describe('questionApi.getQuestion work correctly', () => {
  const questionId = '8xf0y6ziyjabvozdd253nd';

  test(`Question get as expected`, async () => {
    const question = await questionApi.getQuestion(questionId);
    expect(question).toMatchSnapshot();
  });

  test(`Reject as expected if not found question`, async () => {
    const wrongQuestionId = 'abcxyz123456';

    await expect(questionApi.getQuestion(wrongQuestionId)).rejects.toThrow(`Question with id '${wrongQuestionId}' not found`);
  });
});

describe('questionApi.createQuestion work correctly', () => {
  const params: CreateQuestionParams = {
    optionOneText: 'Build our new application with React',
    optionTwoText: 'Build our new application with Angular',
    author: 'mtsamis',
  };

  test.each(
    Object.keys(params).map<[string, CreateQuestionParams]>((key) => [
      key,
      {
        ...params,
        [key]: '',
      },
    ]),
  )('Reject as expected if missing %s', async (_, wrongParams) => {
    await expect(questionApi.createQuestion(wrongParams)).rejects.toThrow('Please provide optionOneText, optionTwoText, and author');
  });

  test('Question create as expected', async () => {
    const question = await questionApi.createQuestion(params);

    await expect(questionApi.getQuestion(question.id)).resolves.toEqual(question);
  });
});

describe('questionApi.createQuestionAnswer work correctly', () => {
  const params: CreateQuestionAnswerParams = {
    userId: 'sarahedo',
    questionId: '8xf0y6ziyjabvozdd253nd',
    answer: 'optionOne',
  };

  test.each(
    Object.keys(params).map<[string, CreateQuestionAnswerParams]>((key) => [
      key,
      {
        ...params,
        [key]: '',
      },
    ]),
  )('Reject as expected if missing %s', async (_, wrongParams) => {
    await expect(questionApi.createQuestionAnswer(wrongParams)).rejects.toThrow('Please provide authedUser, questionId, and answer');
  });

  test('Reject as expected if not found user', async () => {
    const wrongParams = {
      ...params,
      userId: 'mtsamis123',
    };

    await expect(questionApi.createQuestionAnswer(wrongParams)).rejects.toThrow(`User with id '${wrongParams.userId}' not found`);
  });

  test('Reject as expected if not found question', async () => {
    const wrongParams = {
      ...params,
      questionId: 'abcdef123456',
    };

    await expect(questionApi.createQuestionAnswer(wrongParams)).rejects.toThrow(`Question with id '${wrongParams.questionId}' not found`);
  });

  test('Question answer create as expected', async () => {
    const updatedQuestion = await questionApi.createQuestionAnswer(params);
    expect(updatedQuestion.id).toEqual(params.questionId);

    const votedUsers = updatedQuestion[params.answer].votes;
    expect(votedUsers).toContain(params.userId);
  });
});
