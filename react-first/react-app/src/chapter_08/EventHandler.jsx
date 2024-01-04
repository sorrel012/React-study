import { useState } from 'react';

const styles = {
  margin: {
    margin: 20,
  },
};

// class EventHandler extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       isConfirmed: false,
//     };
//   }
//
//   handleConfirm = () => {
//     this.setState((prevState) => ({
//       isConfirmed: !prevState.isConfirmed,
//     }));
//   };
//
//   render() {
//     return (
//       <button
//         onClick={this.handleConfirm}
//         disabled={this.state.isConfirmed}
//         style={styles.margin}
//       >
//         {this.state.isConfirmed ? '확인 완료' : '확인 필요'}
//       </button>
//     );
//   }
// }

function EventHandler(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button
      onClick={handleConfirm}
      disabled={isConfirmed}
      style={styles.margin}
    >
      {isConfirmed ? '확인 완료' : '확인 필요'}
    </button>
  );
}

export default EventHandler;
