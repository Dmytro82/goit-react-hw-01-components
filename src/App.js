import React from 'react';

// js

import Profile from './components/profile/profile';
import Statistics from './components/statistics/statistics';
import FriendList from './components/friends/friends';
import TransactionHistory from './components/transactions/transactions';
// dataJson

import user from './data-json/user.json';
import statistics from './data-json/statistics.json';
import friends from './data-json/friends.json';
import transactions from './data-json/transactions.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
