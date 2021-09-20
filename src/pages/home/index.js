import React from 'react';
import {
  HeroBanner,
  LogoBar,
  Solution,
  Session,
  ContactInfo,
  Newsletter,
  } from '../../components'

function HomePage() {
  return (
    <>
      <HeroBanner />
      <LogoBar />
      <Solution />
      <Session />
      <ContactInfo />
      <Newsletter />
    </>
  );
}

export default HomePage;