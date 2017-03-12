import React, {Component} from 'react';
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

class RestaurantCard extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const { image, title, subtTitle, description } = this.props;
    return (
      <Card className="card" style={styles.font}>
        <CardMedia>
          <img src={image} alt="Restaurant"/>
        </CardMedia>
        <CardTitle title={title} subtitle={subtTitle} />
        <CardText>
          {description}
        </CardText>
        <CardActions className="center">
          <FlatButton label="Upvote" style={styles.font} primary={true}/>
          <FlatButton label="Downvote" style={styles.font, styles.downVote} secondary={true}/>
        </CardActions>
      </Card>
    )
  }
}


export default RestaurantCard;
