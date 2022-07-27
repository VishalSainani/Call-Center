import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import peoplePic from '../component/people.png'
import processPic from '../component/process.png'
import techPic from '../component/technology.png'


export const CARDS = () => {
  return (
    <CardGroup style={{padding:'20px 120px 20px 120px'}}> 
      <Card>
        <Card.Img variant="top" src={peoplePic} style={{alignSelf:'center',width:"50%"}} />
        <Card.Body>
          <Card.Title>Our People</Card.Title>
          <Card.Text>
          Our Companys strives to hire the most dedicated agents at the top of their trade. They don’t just deliver your message — they become the voice of your company, confident about your products and brand.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={processPic} style={{alignSelf:'center',width:"50%"}}/>
        <Card.Body>
          <Card.Title>Our Process</Card.Title>
          <Card.Text>
          Our cost-effective solutions are based on proven and reliable processes that we have spent years developing and constantly refining through the use of performance-based analytics.{' '}
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={techPic}  style={{alignSelf:'center',width:"50%"}}/>
        <Card.Body>
          <Card.Title>Our Technology</Card.Title>
          <Card.Text>
          From big data to program metric analysis, and from scalable call centers to cutting-edge IVR solutions, ACT delivers consistent results using the latest smart technology.
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
  );
};
