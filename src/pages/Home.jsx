import React from 'react';
import NavBar from '../components/NavBar';
import ChatBox from '../components/ChatBox';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      {/* NavBar component */}
      <NavBar />
      {/* ChatBox component */}
      <ChatBox />
      {/* Footer component */}
      <Footer />
    </>
  );
};

export default Home;
