import React from 'react';
import Webix from '../../webix';

const textarea = {
  rows: [
    {
      view: 'align',
      align: 'middle,center',
      body: {
        view: "textarea",
        label: "about",
        labelAlign: "right",
        height: 150,
        value: "About... About... About... About... About... About..."
      }
    }
  ]
}

const About = () => {
  return <Webix ui={textarea} />;
};

export default About;
