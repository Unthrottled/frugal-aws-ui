import BaseTopicView from "../components/BaseTopicView";
import React from "react";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Markdown from "../components/Markdown";
import body from './WhatIsProdBody';


const styles = theme => ({
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
    whiteSpace: 'preserve',
  },
});



const WhatIsProd = ({classes, topic}) => (
  <BaseTopicView topic={topic} classes={classes}>
    <Markdown className={classes.markdown}>
      {body}
    </Markdown>
  </BaseTopicView>
);

export default withStyles(styles)(WhatIsProd);