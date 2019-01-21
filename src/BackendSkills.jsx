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
          subheader={<ListSubheader>Back-End Development</ListSubheader>}
          className={classes.root}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Java" src="/static/.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Java"
              secondary=""
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Ruby" src="/static/.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Ruby"
              secondary=""
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="C++" src="/static/.png" />
            </ListItemAvatar>
            <ListItemText
              primary="C++"
              secondary=""
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
