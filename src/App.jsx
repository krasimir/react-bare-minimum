import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Message:</p>
        <Message message='Hello React'></Message>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#content'));
