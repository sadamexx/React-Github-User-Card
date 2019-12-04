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
             name={follower.name}
             avatar_url={follower.avatar_url}
             location={follower.location}
             email={follower.email}
             html_url={follower.html_url}
             login={follower.login}
             followers={follower.followers}
             bio={follower.bio}/>
        ))};
        </Row>
    </Container>
  );//ends return
}//ends function