import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { WhatsApp } from 'react-whatsapp-component';

import Theme, { theme } from '@pagerland/themes/src/RealEstate';
import {
  Navbar,
  Welcome,
  // About,
  Location,
  // Exterior,
  Interior,
  Surroundings,
  Gallery,
  Contact,
  // SimilarProperties,
  Footer,
} from '@pagerland/themes/src/RealEstate/containers';

import SEO from '../components/SEO';

const RealEstate = () => (
  <Theme>
    <Helmet>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
    </Helmet>
    <SEO title="Tour Panama With Us" />
    <WhatsApp phone="50769752528" text="Hi, I'm interested in touring Panama with you!" />
    <Navbar />
    <Welcome name="" />
    {/* <About name="about" /> */}
    <Location name="location" />
    {/* <Exterior name="exterior" /> */}
    <Interior name="interior" />
    <Surroundings name="surroundings" />
    <Gallery name="gallery" />
    <Contact name="contact" />
    {/* <SimilarProperties name="similar-properties" /> */}
    <Footer name="about-us" />
  </Theme>
);

RealEstate.propTypes = {
  url: PropTypes.string,
};

export default RealEstate;
