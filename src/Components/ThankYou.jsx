import React from 'react';
import SubscribeForm from './SubscribeForm';

class ThankYou extends React.Component {
  render() {
    return(
      <div>
        <h2>Thank You!</h2>
        <p>Expect some awesome email etc.</p>
        <SubscribeForm thanks={true} {...this.props} />
      </div>
    )
  }
}

export default ThankYou;
