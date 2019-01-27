import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import withRouter from "react-router/es/withRouter";
import Link from "react-router-dom/es/Link";
import Fab from "@material-ui/core/es/Fab";
import yellow from "@material-ui/core/colors/yellow";
import {Home} from "@material-ui/icons";
import Button from "@material-ui/core/es/Button";

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing.unit,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  postContainer: {
    color: theme.palette.grey[800]
  },
  layout: {
    backgroundColor: yellow[700],
    padding: '1.5em',
    borderRadius: '0.5em',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);',
  }
});


function BaseTopicView({children, classes, topic}) {
  return (
    <div className={classes.layout}>
      <Link to={'/'} style={{textDecoration: 'none'}}>
        <Button variant={"contained"}
                size='medium'
                color='primary'>
          Go Home
        </Button>
      </Link>
      <div className={classes.postContainer}>
        {children}
      </div>
      <div style={{display: 'flex'}}>
        {
          topic.previousPage ?
            <Link to={topic.previousPage}><Button variant={"contained"}
                                                  size='medium'
                                                  color='primary'>&#60;&#60;  Previous Topic</Button></Link>
            :
            null
        }
        <div style={{flexGrow: 1}}/>
        {
          topic.nextPage ?
            <Link to={topic.nextPage}><Button variant={"contained"}
                                              size='medium'
                                              color='primary'>Next Topic &#62;&#62;</Button></Link>
            :
            null
        }
      </div>
      <Link to={'/'} style={{textDecoration: 'none'}}>
        <Fab classes={'primary'} className={classes.fab} title={'Frugal AWS Dev Home'}>
          <Home/>
        </Fab>
      </Link>
    </div>
  );
}

export default withRouter(withStyles(styles)(BaseTopicView));