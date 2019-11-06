import React from 'react';
import Webix from '../../webix';

const form = {
  rows: [
    {
      view: 'align',
      align: 'middle,center',
      body: {
        view: 'form',
        elements: [
          {
            view: 'text',
            value: 'webix@react.com',
            label: 'Email',
            inputAlign: 'right',
            labelAlign: 'right'
          },
          {
            view: 'text',
            type: 'password',
            value: '123456',
            label: 'Password',
            inputAlign: 'right',
            labelAlign: 'right'
          },
          {
            margin: 5,
            cols: [
              {
                view: "button",
                value: "Login",
                css: "webix_primary"
              },
              {
                view: "button",
                value: "Cancel"
              }
            ]
          }
        ],
        width: 300
      }
    }
  ]
}

const SignIn = () => {
  return <Webix ui={form} />;
};

export default SignIn;
