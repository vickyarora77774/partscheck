import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { Star } from './styled';

const StyledCard = ({ data }) => {
    const { name, state, vehicles, rating } = data;
    return (
      <Row className='p-2'>
        <Card className='shadow' style={{ width: '555px', height: '136px' }}>
        <Card.Header className='bg-white border-0' style={{ display:'flex', justifyContent: 'space-between'}}>
          <div className='d-flex' style={{ flexDirection:'column' }}>
            <span>{name}</span>
            <Star
              maxScore={5}
              rating={rating}
            />
          </div>
          <b>
            {state}
          </b>
        </Card.Header>
        <Card.Body>
          <Card.Text className='text-start' style={{ position: 'absolute', bottom: '10px'}}>
            {vehicles}
          </Card.Text>
        </Card.Body>
      </Card>
      </Row>
    )
  }
  
  export default StyledCard