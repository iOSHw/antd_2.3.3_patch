/* tslint:disable:no-unused-variable */
// tslint:disable:jsx-no-multiline-js
import React from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile-rn';
/* tslint:disable:no-console */
export default (function () {
  return React.createElement(
    WingBlank,
    null,
    React.createElement(WhiteSpace, null),
    React.createElement(
      Button,
      null,
      'default'
    ),
    React.createElement(WhiteSpace, null),
    React.createElement(
      Button,
      { disabled: true },
      'default disabled'
    ),
    React.createElement(WhiteSpace, null),
    React.createElement(
      Button,
      { type: 'primary' },
      'primary'
    ),
    React.createElement(WhiteSpace, null),
    React.createElement(
      Button,
      { type: 'primary', disabled: true },
      'primary disabled'
    ),
    React.createElement(WhiteSpace, null),
    React.createElement(
      Button,
      { type: 'warning' },
      'warning'
    ),
    React.createElement(WhiteSpace, null),
    React.createElement(
      Button,
      { type: 'warning', disabled: true },
      'warning disabled'
    ),
    React.createElement(WhiteSpace, null),
    React.createElement(
      Button,
      { loading: true },
      'loading button'
    ),
    React.createElement(
      Button,
      { activeStyle: false },
      '\u65E0\u70B9\u51FB\u53CD\u9988'
    ),
    React.createElement(WhiteSpace, null),
    React.createElement(
      Button,
      { activeStyle: { backgroundColor: 'red' } },
      'custom feedback style'
    ),
    React.createElement(WhiteSpace, null),
    React.createElement(
      WingBlank,
      { style: {
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        } },
      React.createElement(
        Button,
        { type: 'ghost' },
        'ghost'
      ),
      React.createElement(
        Button,
        { type: 'ghost', disabled: true },
        'ghost disabled'
      ),
      React.createElement(
        Button,
        { type: 'ghost', size: 'small' },
        'ghost'
      )
    )
  );
});