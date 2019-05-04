import React from 'react';
import {Message} from 'semantic-ui-react';
import {connect} from 'react-redux';

const AlertBox = ({alerts}) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
  <div key={alert.id}>
    <Message floating color={alert.alertType}>{alert.msg}</Message>
  </div>
));

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(AlertBox);