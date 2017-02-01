import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line
import ChatMessage from '../ChatMessage';
import { ScrollBody } from './style';

class ChatView extends Component{
  render() {
		return (
      <ScrollBody>
        { this.props.messages && this.props.messages.length > 0
          ? this.props.messages.map((group, i) => {
              return (
                <ul key={i} style={{marginBottom: '2rem'}}>
                  {group.map((message, i) => {
                    return <li key={i}>{message.message}</li>
                  })}
                </ul>
              )
            })
          : ''
        } 
      </ScrollBody>
	  );
	}
}

const mapStateToProps = (state) => {
  return {
    stories: state.stories,
    messages: state.messages.messages
  }
}

export default connect(mapStateToProps)(ChatView);
