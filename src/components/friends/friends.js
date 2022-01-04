import PropTypes from 'prop-types';
import styles from './friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      <h2 className={styles.headline}>Exercise №3 friend list</h2>
      {friends.map(friend => (
        <li className={styles.friend_list__item} key={friend.id}>
          <span
            className={
              friend.isOnline ? styles.onlineStyle : styles.offlineStyle
            }
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
