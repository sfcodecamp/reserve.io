import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  font: {
    fontFamily: 'GillSans, Calibri, Trebuchet, sans-serif',
  },
  downVote: {
    color: '#D4606C'
  }
}

const RestaurantCard = () => (
  <Card className="card" style={styles.font}>
    <CardMedia>
      <img src="images/nature-600-337.jpg" alt="Restaurant"/>
    </CardMedia>
    <CardTitle title="Restaurant Name" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Upvote" style={styles.font} primary={true}/>
      <FlatButton label="Downvote" style={styles.font, styles.downVote} secondary={true}/>
    </CardActions>
  </Card>
);

export default RestaurantCard;
