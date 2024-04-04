import React, { useState } from 'react'
import {  Typography, Row, Col, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title} = Typography;

const News = ({newSimplified}) => {

  
  const {data, isFetching} = useGetCryptoNewsQuery({count : newSimplified? 6 : 10});
  const globalStats = data;

 //console.log(data);
 
 if(isFetching) return 'Loading...';
  return (
    <Row gutter={[24,24]}>
      {globalStats?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
           <Card hoverable className='news-card' >
            <div className='news-image-container'>
              <Title className='news-title' level={4}>
              {news.title}
              </Title>
            </div>
            <p>
              {news.description}
            </p>
            <div className='provider-container'>
              <div>
                <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
              </div>
              <Text><a href={news.url}>Read More</a></Text>
            </div>
          </Card>
        </Col>
      ))}
   </Row>
  )
}

export default News

