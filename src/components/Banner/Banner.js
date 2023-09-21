import { Container, Typography } from '@material-ui/core';
import React from 'react';
import './Banner.css';
import Carousel from './Carousel';

const Banner = () => {
  return (
    <div className='banner'>
        <Container className='bannerContent'>
        <div className='tagline'>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            BTC Romania Pro
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              marginBottom: 40,
            }}
          >
            Everything you need to know about cryptocurrency
          </Typography>
        </div>
        <Carousel />
        </Container>
    </div>
  )
}

export default Banner;