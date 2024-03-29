import Poll, { PollProps } from '~components/feature/employee-polls/poll';
import { TestContainer } from '~test/__mocks__/container';

import { render } from '@testing-library/react';

describe('Poll renders correctly', () => {
  test.each<PollProps>([
    {
      type: 'vote',
      question: {
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

      onVoteOptionOne: () => {},
      onVoteOptionTwo: () => {},
    },

    {
      type: 'view',
      question: {
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
      userCount: 4,
      answer: 'optionTwo',
    },
  ])('Poll render as expected with props %o', (props) => {
    const { baseElement } = render(
      <TestContainer>
        <Poll {...props} />
      </TestContainer>,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
