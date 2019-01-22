import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  render() {
    const { classes, project } = this.props;
    const { expanded } = this.state;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={project.name}
        />
        <CardMedia
          className={classes.media}
          image={project.img}
          title={project.name}
        />
        <CardContent>
          {project.description}
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton href={project.url} target="_blank" aria-label="Open project page">
            <OpenInNewIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {project.extendedDescription}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  project: PropTypes.object.isRequired, //eslint-disable-line
};

export default withStyles(styles)(ProjectCard);
