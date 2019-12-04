import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';

const UserCard = (props) => {
  return (
    <Col xs="12" s="6" md="4">
      <Card>
      <CardImg top width="100%" src={props.avatar_url} alt="avatar photo" />
              <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>Handle:{props.login}</CardSubtitle>
                  <CardSubtitle>{props.html_url}</CardSubtitle>
                  
                 
                    
                </CardBody>
      </Card>
    </Col>
  );
};

export default UserCard;