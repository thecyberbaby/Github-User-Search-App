import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className='text-center mt-3 mb-4'>
      <img src={user.avatar_url} alt='' className='img-thumbnail' />
      <h4 className='text-primary text-left ml-3 mt-3'>Name: {user.name}</h4>
      <CardBody className='text-primary text-left'>
        Username: {user.login}
      </CardBody>
      <CardBody className='text-primary text-left'>Bio: {user.bio}</CardBody>
      <CardBody className='text-primary text-left'>
        Location: {user.location}
      </CardBody>
      <CardBody className='text-primary text-left'>Blog: {user.blog}</CardBody>
      <CardBody className='text-primary text-left'>
        twitter: @{user.twitter_username}
      </CardBody>
    </Card>
  );
};

export default UserCard;
