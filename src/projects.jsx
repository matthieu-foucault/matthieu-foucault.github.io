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
  {
    name: 'Diggit',
    url: 'https://github.com/jrfaller/diggit',
    description: (
      <Typography>
        A tool to analyze Git repositories, written in Ruby.
      </Typography>
    ),
  },
  {
    name: 'Harmony',
    url: 'https://github.com/se-labri/harmony',
    description: (
      <Typography>
        A tool to reverse-engineer the information contained
        in the software version control systems.
        It is an extensible framework allowing you to gather the information you need
        to perform advanced studies against the history of software projects.
      </Typography>
    ),

  },
  {
    name: 'react-pixi-plot',
    url: 'https://github.com/thechiselgroup/react-pixi-plot',
    description: (
      <Typography>
        A React component rendering a zoomable and draggable PIXI.js scene.
        Intended to render 2d plots
      </Typography>
    ),
  },
  {
    name: 'rest-redux-crud',
    url: 'https://github.com/thechiselgroup/rest-redux-crud',
    description: (
      <Typography>
        A set of CRUD actions, reducers and selectors for Redux (with REST requests too!)
      </Typography>
    ),
  },
];

export default projects;
