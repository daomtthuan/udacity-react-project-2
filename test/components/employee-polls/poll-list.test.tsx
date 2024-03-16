import PollList, {
  PollListProps,
} from '~components/feature/employee-polls/poll-list';
import { TestContainer } from '~test/__mocks__/container';

import { render } from '@testing-library/react';

describe('PollList renders correctly', () => {
  test.each<PollListProps>([
    {
      items: [],
    },

    {
      items: [
        {
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
          answerCount: 6,
        },
        {
          id: 'sarahedo',
          password: 'password123',
          name: 'Sarah Edo',
          avatarURL: '/images/avatar/1.png',
          answers: {
            '8xf0y6ziyjabvozdd253nd': 'optionOne',
            '6ni6ok3ym7mf1p33lnez': 'optionOne',
            'am8ehyc8byjqgar0jgpub9': 'optionTwo',
            'loxhs1bqm25b708cmbf3g': 'optionTwo',
          },
          questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
          answerCount: 4,
        },
        {
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
          answerCount: 3,
        },
        {
          id: 'tylermcginnis',
          password: 'abc321',
          name: 'Tyler McGinnis',
          avatarURL: '/images/avatar/2.png',
          answers: {
            vthrdm985a262al8qx3do: 'optionOne',
            xj352vofupe1dqz9emx13r: 'optionTwo',
          },
          questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
          answerCount: 2,
        },
      ],
    },
  ])('PollList render as expected with props %o', (props) => {
    const {baseElement} = render(
      <TestContainer>
        <PollList {...props} />
      </TestContainer>,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
