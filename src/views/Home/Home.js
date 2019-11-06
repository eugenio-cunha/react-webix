import React from 'react';
import Webix from '../../webix';


const carousel = {
  rows: [
    {
      view: 'align',
      align: 'middle,center',
      body: {
        view: 'carousel',
        width: 464,
        height: 275,
        cols: [
          { css: { "background-color": "#4285f4" }, template: "Sample 1" },
          { css: { "background-color": "#ea4335" }, template: "Sample 2" },
          { css: { "background-color": "#fbbc05" }, template: "Sample 3" }
        ]
      }
    }
  ]
};

const Home = () => {
  return <Webix ui={carousel} />;
};

export default Home;
