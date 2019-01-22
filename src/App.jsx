import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  withStyles, Grid, Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import SkillsCard from './SkillsCard';
import skills from './skills';
import projects from './projects';
import ProjectCard from './ProjectCard';

const Avatar = React.lazy(() => import('./Avatar'));

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const App = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
          Matthieu Foucault, PhD
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Grid container spacing={1} justify="center">
              <Grid item>
                <React.Suspense fallback={<div>Loading...</div>}><Avatar /></React.Suspense>
              </Grid>
            </Grid>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Matthieu Foucault
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              I&#39;m a full-stack software engineer and data scientist.
              Based in Victoria, BC, Canada.
              I have a PhD in computer science,
              and I am an expert in front-end development and data visualization.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="mailto:foucault.matthieu@gmail.com">
                    Contact me
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <Grid container spacing={6} justify="center">
          <Grid item>
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>My skills</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={40} justify="center">
          {skills.map(category => (
            <Grid key={category.title} item>
              <SkillsCard {...category} />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={6} justify="center">
          <Grid item>
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>Projects</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={40} justify="center">
          {projects.map(project => (
            <Grid key={project.title} item>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Made with Material-UI
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};


App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(App);
