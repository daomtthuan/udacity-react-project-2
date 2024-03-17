import { useMemo } from 'react';

import PollViewItem from '~components/feature/employee-polls/poll-view-item';
import PollVoteItem from '~components/feature/employee-polls/poll-vote-item';

import styles from './_.module.scss';
import { PollProps, PollResult } from './_.type';

export default function Poll({ question, authorUser, ...props }: Readonly<PollProps>) {
  const pollResult = useMemo<PollResult | null>(() => {
    if (props.type === 'vote') {
      return null;
    }

    const { userCount } = props;
    if (userCount === 0) {
      return {
        optionOne: {
          voteCount: 0,
          percentage: 0,
        },
        optionTwo: {
          voteCount: 0,
          percentage: 0,
        },
      };
    }

    return {
      optionOne: {
        voteCount: question.optionOne.votes.length,
        percentage: (question.optionOne.votes.length / userCount) * 100,
      },
      optionTwo: {
        voteCount: question.optionTwo.votes.length,
        percentage: (question.optionTwo.votes.length / userCount) * 100,
      },
    };
  }, [props, question.optionOne.votes.length, question.optionTwo.votes.length]);

  return (
    <div className="d-flex flex-column align-items-center gap-4 p-4 border rounded shadow-sm">
      <h2 className="text-primary">Poll by {authorUser.name}</h2>
      <img className={styles.authorAvatar} src={authorUser.avatarURL} alt={`avatar-${authorUser.id}`} />
      {props.type === 'view' ? (
        pollResult && (
          <>
            <h3>Result of poll</h3>

            <div className="row row-cols-1 row-cols-md-2 g-3 w-100">
              <div className="col">
                <PollViewItem
                  className="h-100"
                  voted={props.answer === 'optionOne'}
                  rather={pollResult.optionOne.voteCount >= pollResult.optionTwo.voteCount}
                  {...pollResult.optionOne}
                >
                  {question.optionOne.text}
                </PollViewItem>
              </div>
              <div className="col">
                <PollViewItem
                  className="h-100"
                  voted={props.answer === 'optionTwo'}
                  rather={pollResult.optionTwo.voteCount >= pollResult.optionOne.voteCount}
                  {...pollResult.optionTwo}
                >
                  {question.optionTwo.text}
                </PollViewItem>
              </div>
            </div>
          </>
        )
      ) : (
        <>
          <h3>Would You Rather?</h3>

          <div className="row row-cols-1 row-cols-md-2 g-3 w-100">
            <div className="col">
              <PollVoteItem className="h-100" onVote={props.onVoteOptionOne}>
                {question.optionOne.text}
              </PollVoteItem>
            </div>
            <div className="col">
              <PollVoteItem className="h-100" onVote={props.onVoteOptionTwo}>
                {question.optionTwo.text}
              </PollVoteItem>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
