import React from 'react';

import Cards from '../components/Cards';
import Languages from '../components/Languages';
import SearchBar from '../components/SearchBar.jsx';

function Home() {



  return (
    <div className='home'>
      <div className="container">

        <div className='searchAndLanguageDiv'>
          <SearchBar />
          <Languages />
        </div>

        <Cards />
      </div>
    </div>
  );
}

export default Home;
