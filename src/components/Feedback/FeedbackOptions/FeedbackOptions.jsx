import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BtnWrapper, Button, Title } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  handleValue = event => {
    this.props.onLeaveFeedback(event);
  };
  render() {
    return (
      <div>
        <BtnWrapper>
          <Button name="good" onClick={this.handleValue}>
            good
          </Button>
          <Button name="neutral" onClick={this.handleValue}>
            neutral
          </Button>
          <Button name="bad" onClick={this.handleValue}>
            bad
          </Button>
        </BtnWrapper>
      </div>
    );
  }
}
