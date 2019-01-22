import React from 'react';
import { Typography } from '@material-ui/core';

const projects = [
  {
    name: 'Lodestone',
    img: 'https://i.imgur.com/997Uv4S.gif',
    url: 'https://thechiselgroup.org/lodestone/',
    description: (
      <Typography>
        Lodestone is made for data visualization researchers who
        can develop using a bit of Typescript and React.js.
      </Typography>
    ),
    extendedDescription: (
      <Typography>
        It is a platform that:
        <ul>
          <li>handles the connection to data sources</li>
          <li>
            allows the user to open multiple visualizations in
            resizable and draggable panels (using react-grid-layout)
          </li>
          <li>provides an API to link data highlighting between visualizations</li>
          <li>
            allows you to make a demo version of your visualizations, pre-loaded with data,
            and release it as an electron application
          </li>
          <li>... and much more!</li>
        </ul>
      </Typography>
    ),
  },
  { name: 'Diggit' },
  { name: 'Harmony' },
  { name: 'react-pixi-plot' },
  { name: 'rest-redux-crud' },
];

export default projects;
