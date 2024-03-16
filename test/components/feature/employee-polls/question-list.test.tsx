import QuestionList, { QuestionListProps } from '~components/feature/employee-polls/question-list';
import { TestContainer } from '~test/mocks/container';

import { render } from '@testing-library/react';

describe('QuestionList renders correctly', () => {
  test.each<QuestionListProps>([
    {
      title: 'Unanswered',
      items: [
        {
          id: 'loxhs1bqm25b708cmbf3g',
          author: 'tylermcginnis',
          timestamp: 1482579767190,
          optionOne: {
            votes: [],
            text: 'have code reviews conducted by peers',
          },
          optionTwo: {
            votes: ['sarahedo'],
            text: 'have code reviews conducted by managers',
          },
          authorUser: {
            id: 'tylermcginnis',
            password: 'abc321',
            name: 'Tyler McGinnis',
            avatarURL: '/images/avatar/2.png',
            answers: {
              vthrdm985a262al8qx3do: 'optionOne',
              xj352vofupe1dqz9emx13r: 'optionTwo',
            },
            questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
          },
        },
        {
          id: 'a0xo5jhg6y7tj2hwt3t6k',
          timestamp: 1709492013513,
          author: 'thuandmt',
          optionOne: {
            votes: [],
            text: 'Helllo',
          },
          optionTwo: {
            votes: ['thuandmt'],
            text: 'AAA',
          },
          authorUser: {
            id: 'thuandmt',
            password: '123',
            name: 'Thuan Dao',
            avatarURL: '/images/avatar/7.png',
            answers: {
              'xj352vofupe1dqz9emx13r': 'optionOne',
              'vthrdm985a262al8qx3do': 'optionTwo',
              'am8ehyc8byjqgar0jgpub9': 'optionOne',
              '6ni6ok3ym7mf1p33lnez': 'optionTwo',
              '8xf0y6ziyjabvozdd253nd': 'optionOne',
              'a0xo5jhg6y7tj2hwt3t6k': 'optionTwo',
            },
            questions: [],
          },
        },
      ],
      buttonText: 'Answer',
    },

    {
      title: 'Answered',
      items: [
        {
          id: 'a0xo5jhg6y7tj2hwt3t6k',
          timestamp: 1709492013513,
          author: 'thuandmt',
          optionOne: {
            votes: [],
            text: 'Helllo',
          },
          optionTwo: {
            votes: ['thuandmt'],
            text: 'AAA',
          },
          authorUser: {
            id: 'thuandmt',
            password: '123',
            name: 'Thuan Dao',
            avatarURL: '/images/avatar/7.png',
            answers: {
              'xj352vofupe1dqz9emx13r': 'optionOne',
              'vthrdm985a262al8qx3do': 'optionTwo',
              'am8ehyc8byjqgar0jgpub9': 'optionOne',
              '6ni6ok3ym7mf1p33lnez': 'optionTwo',
              '8xf0y6ziyjabvozdd253nd': 'optionOne',
              'a0xo5jhg6y7tj2hwt3t6k': 'optionTwo',
            },
            questions: [],
          },
        },
        {
          id: 'xj352vofupe1dqz9emx13r',
          author: 'mtsamis',
          timestamp: 1493579767190,
          optionOne: {
            votes: ['mtsamis', 'thuandmt'],
            text: 'deploy to production once every two weeks',
          },
          optionTwo: {
            votes: ['tylermcginnis'],
            text: 'deploy to production once every month',
          },
          authorUser: {
            id: 'mtsamis',
            password: 'xyz123',
            name: 'Mike Tsamis',
            avatarURL: '/images/avatar/3.png',
            answers: {
              'xj352vofupe1dqz9emx13r': 'optionOne',
              'vthrdm985a262al8qx3do': 'optionTwo',
              '6ni6ok3ym7mf1p33lnez': 'optionOne',
            },
            questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
          },
        },
        {
          id: 'vthrdm985a262al8qx3do',
          author: 'tylermcginnis',
          timestamp: 1489579767190,
          optionOne: {
            votes: ['tylermcginnis'],
            text: 'take a course on ReactJS',
          },
          optionTwo: {
            votes: ['mtsamis', 'thuandmt'],
            text: 'take a course on unit testing with Jest',
          },
          authorUser: {
            id: 'tylermcginnis',
            password: 'abc321',
            name: 'Tyler McGinnis',
            avatarURL: '/images/avatar/2.png',
            answers: {
              vthrdm985a262al8qx3do: 'optionOne',
              xj352vofupe1dqz9emx13r: 'optionTwo',
            },
            questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
          },
        },
      ],
      buttonText: 'Result',
    },
  ])('QuestionList render as expected with props %o', (props) => {
    const component = render(
      <TestContainer>
        <QuestionList {...props} />
      </TestContainer>,
    );

    expect(component.baseElement).toMatchSnapshot();
  });
});
