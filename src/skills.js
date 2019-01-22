
const skillsCategories = [
  {
    title: 'Full-Stack Web Development',
    skills: [
      {
        name: 'React.js',
        img: '/static/react.png',
        description: 'Optimized rendering of components; created reusable user inputs; interfaced React components with other libraries (d3.js, Pixi.js).',
      }, {
        name: 'Redux',
        img: '/static/redux.png',
        description: 'Designed an application with ~10 reducers and ~50 actions; developed asynchronous action creators using redux-thunk.',
      }, {
        name: 'Webpack',
        img: '/static/webpack.png',
        description: `Created webpack configurations for web, node, and electron targets;
        optimized configuration for different scenarios: used hot module replacement in development,
        used code instrumentation for tests with karma-webpack, used code splitting in production environment.`,
      }, {
        name: 'Redux Form',
        img: '/static/redux-form.png',
        description: 'Created multiple form, including wizards, generic forms, and forms submitting on edit.',
      },
    ],
  },
  {
    title: 'Data Science & Visualization',
    skills: [
      {
        name: 'd3.js',
        img: '/static/d3.svg',
        description: 'Used the following modules: scale, scale-chromatic, hierarchy, axes, quadtree, axis.',
      },
      {
        name: 'Pixi.js',
        img: '/static/pixi.png',
        description: 'Used pixi to create fast and interactive 2d visualizations.',
      },
      {
        name: 'R',
        img: '/static/R.png',
        description: 'Developed R packages using inferential statistics to compute relationships between developer activity metrics, and produce charts using ggplot2',
      },
      {
        name: 'Data extraction and analysis',
        description: 'Extracted and analyzed data from various types of sources (e.g. databases, but also code repositories history) and performed statistical analysis to infer relationships between metrics.',
      },
      {
        name: 'Scientific Publications',
        description: 'Authored 7 scientific publications in software engineering conferences, journals, workshops, and technical reports.',
      },
    ],
  },
  {
    title: 'Back-end development',
    skills: [
      {
        name: 'Java',
        description: 'Developed a generic software repository analysis famework, allowing researchers to develop metric-computing analyses. The framework was deployed as an OSGi application.',
      },
      {
        name: 'Ruby',
        description: 'Developed a framework to analyse a large sample of Git repositories, in order to perform statistical analyses.',
      },
      {
        name: 'C++',
        description: 'Using the libgit2 library, added version control capabilities to a simulation software.',
      },
    ],
  },
  {
    title: 'Teaching & Mentoring',
    skills: [
      {
        name: 'Teaching',
        description: 'Taught various courses at the universities of Bordeaux and Victoria: Web development (at the undergrad and grad level), Android applications development (undergrad), agile methods and project management (grad).',
      },
      {
        name: 'Mentoring',
        description: 'Helped supervising master students at the University of Bordeaux. Onboarded and mentored five undergrad students on the data visualization project at the University of Victoria.',
      },
    ],
  },
];

/**
   {
        name: '',
        img: '',
        description: '',

      },
 */

export default skillsCategories;
