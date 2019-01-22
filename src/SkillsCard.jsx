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

const SkillsCard = (props) => {
  const { classes, title, skills } = props;
  return (
    <Card>
      <CardContent>
        <List
          subheader={<ListSubheader>{title}</ListSubheader>}
          className={classes.root}
        >
          {skills.map(skill => (
            <ListItem key={skill.name} alignItems="flex-start">
              {skill.img && (
              <ListItemAvatar>
                <Avatar alt={skill.name} src={skill.img} />
              </ListItemAvatar>
              )}
              <ListItemText
                primary={skill.name}
                secondary={skill.description}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

SkillsCard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};

export default withStyles(styles)(SkillsCard);
