import React from "react";

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout'
import Header from './components/Header';
import Footer from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <Layout />
      <GlobalStyles />
      <Footer />
    </>
  );
}

export default App;
