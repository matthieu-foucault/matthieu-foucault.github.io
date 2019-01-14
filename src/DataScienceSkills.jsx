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
          subheader={<ListSubheader>Data Science &amp; Visualization</ListSubheader>}
          className={classes.root}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="D3.JS" src="/static/d3.svg" />
            </ListItemAvatar>
            <ListItemText
              primary="d3.js"
              secondary="Used the following modules: scale, scale-chromatic, hierarchy, axes, quadtree, axis."
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="PIXI.JS" src="/static/pixi.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Pixi.js"
              secondary="Used pixi to create fast and interactive 2d visualizations."
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Data extraction and analysis"
              secondary="Extracted and analyzed data from various types of sources (e.g. databases, but also code repositories history)
              and performed statistical analysis to infer relationships between metrics."
            />
          </ListItem>
          <ListItem alignItems="flex-start">

            <ListItemText
              primary="Scientific Publications"
              secondary="Authored 7 scientific publications in software engineering conferences, journals, workshops, and technical reports."
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
