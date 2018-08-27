import React from 'react';
import { connect } from 'react-redux';
import { LeaderBoardUser } from '../../atoms';
import { StoreState } from '../../store/reducers';
import { User, Users } from '../../store/reducers/users';

interface Props {
  users: Users;
}

export interface LeaderUser extends User {
  answerCount: number;
  createdCount: number;
}

const LeaderBoardPage = (props: Props) => {
  const users = Object.keys(props.users)
    .map(u => {
      const user = props.users[u];
      const answerCount = Object.keys(user.answers).length;
      const createdCount = user.questions.length;
      return {
        ...user,
        answerCount,
        createdCount,
      };
    })
    .sort((a, b) => {
      const aTotal = a.answerCount + a.createdCount;
      const bTotal = b.answerCount + b.createdCount;
      if (aTotal < bTotal) {
        return 1;
      }
      if (aTotal > bTotal) {
        return -1;
      }
      return 0;
    });

  console.log(users);

  return (
    <div>
      {users.map(u => (
        <LeaderBoardUser key={u.id} user={u} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(LeaderBoardPage);
