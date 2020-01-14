import React from "react";
import UserCard from "./UserCard";
import { Container, Row } from "reactstrap";


export default function FollowerList(props) {
  
  return (
    <Container>
      <Row>
        {props.followers.map((follower, index) => (
             <UserCard 
             key={index}
             avatar_url={follower.avatar_url}
             html_url={follower.html_url}
             login={follower.login}
             />
        ))};
        </Row>
    </Container>
  );//ends return
}//ends function