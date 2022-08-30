import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useQuery } from "@tanstack/react-query";

import StyledCard from '../../uicomponents/StyledCard'
import { loadParts } from '../../services'
import { filterData } from '../../helpers'
import Title from '../../uicomponents/Title';

const PartsList = () => {
    const { isLoading, error, data } = useQuery(["data"], loadParts);
    const [ parts, setParts ] = useState([]);
    useEffect(() => {
        if(data) {
            const partsData = filterData(data.packet, 3);
            setParts(partsData);
        }
    }, [data])
    
    
    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;


    return (
      <Container className="d-flex justify-content-md-center" style={{ flexDirection: 'column', alignItems: 'center'}}>
        <Title title='PartsCheck OEM Suppliers' />
        {parts && parts?.map(d => (
          <StyledCard data={ d } />
        ))}
      </Container>
    )
  }
  
  export default PartsList