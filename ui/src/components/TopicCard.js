import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withRouter from "react-router/es/withRouter";
import {Link} from "react-router-dom";


const styles = theme => ({
  card: {},
  media: {
    width: 150,
    height: 150,
    marginTop: '1rem',
    backgroundSize: 'contain',
  },
  cardContent: {
    display: 'flex',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    background: theme.palette.grey[700] + '55',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  mediaContainer: {
    width: 150,
    height: 150,
    marginRight: '2rem'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: 80,
    height: 80,
  },
  title: {
    color: '#e8ad4f',
  },
  content: {
    display: 'flex',
  },
  excerpt:{
    maxWidth: '500px',
    color: '#b2b2b4',
    fontSize: '20px',
    lineHeight: '2rem',
    fontWeight: 400,
  }
});

class TopicCard extends React.Component {
  state = {expanded: false};

  render() {
    const {classes, topic} = this.props;
    return (
      <div className={classes.card}>
        <div className={classes.content}>
          <div className={classes.mediaContainer}>
            <img
              alt={topic.title}
              className={classes.media}
              src={topic.displayImage}
              title={topic.title}
            />
          </div>
          <div>
            {
              (topic.path && !topic.href) ? (<Link to={topic.path} style={{textDecoration: 'none'}}>
                <Typography className={classes.title} gutterBottom variant='h4' color='inherit' component='h2'>
                  {topic.title}
                </Typography>
              </Link>) : (
                <a href={topic.href}
                   target={'_blank'}
                   style={{textDecoration: 'none'}}>
                  <Typography className={classes.title} gutterBottom variant='h4' color='inherit' component='h2'>
                    {topic.title}
                  </Typography>
                </a>
              )
            }
            <div className={classes.excerpt}>
              <p>
                {topic.exerpt}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TopicCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(TopicCard));
