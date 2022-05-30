import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Header from './components/Header';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AnimeDetail from './pages/AnimeDetail';
import { GlobalProvider } from './context/GlobalState';
import AnimeCollections from './pages/AnimeCollections';
import Footer from './components/Footer';

const App = () => {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql.anilist.co/"
  })
  return (
    
    <GlobalProvider>
      <ApolloProvider client={client}>
        <Router>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/anime-detail/:id' element={<AnimeDetail />} />
              <Route path='/anime-collections' element={<AnimeCollections />} />
            </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </GlobalProvider>
  )
}

export default App