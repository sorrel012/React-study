import Notification from './Notification';

const reservedNotifications = [
  {
    message: '오전 미팅',
  },
  {
    message: '점심식사 시간',
  },
  {
    message: '퇴근 시간',
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => (
          <Notification message={notification.message} />
        ))}
      </div>
    );
  }
}

export default NotificationList;
