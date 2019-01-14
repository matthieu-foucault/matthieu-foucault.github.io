import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Card, CardContent } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

function AlignItemsList(props) {
  const { classes } = props;
  return (
    <Card>
      <CardContent>
        <List
          subheader={<ListSubheader>Full-Stack Web Development</ListSubheader>}
          className={classes.root}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="React" src="/static/react.png" />
            </ListItemAvatar>
            <ListItemText
              primary="React.js"
              secondary="Optimized rendering of components; created reusable user inputs; interfaced React components with other libraries (d3.js, Pixi.js)."
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Redux" src="/static/redux.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Redux"
              secondary="Designed an application with ~10 reducers and ~50 actions; developed asynchronous action creators using redux-thunk."
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Webpack" src="/static/webpack.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Webpack"
              secondary="Created webpack configurations for web, node, and electron targets;
               optimized configuration for different scenarios: used hot module replacement in development,
               used code instrumentation for tests with karma-webpack,
               used code splitting in production environment."
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Redux Form" src="/static/redux-form.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Redux Form"
              secondary="Created multiple form, including wizards, generic forms, and forms submitting on edit."
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(AlignItemsList);
