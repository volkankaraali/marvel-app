import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../constant/icons/Loading';
import MarvelService from '../services/marvelService';

function CharacterDetail() {
  const { id } = useParams();
  let navigate = useNavigate();

  const { t } = useTranslation();

  const [characterData, setCharacterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const marvelService = new MarvelService();


  useEffect(() => {
    getCharacterData(id);
  }, [id]);


  //gets character detail data by character id
  const getCharacterData = (characterId) => {
    setLoading(true);
    marvelService.getCharacterById(characterId)
      .then(res => {
        setCharacterData(res.data?.data?.results[0]);
        setLoading(false);
      })
      .catch(e => console.log(e));
  };


  return (
    <>
      <div className='backHomePage'>

        <button className='slideInRight' onClick={() => navigate('/')}> <span>Homepage</span></button>
      </div>
      {
        loading && <div className='loading'> <Loading /></div>
      }
      <div className='character'>
        <img src={characterData.thumbnail?.path + '.' + characterData.thumbnail?.extension} alt={characterData.name} />
        <div className='characterBody'>
          <div className='characterDetail' >
            <h1 className='detailTitle'>{characterData.name}</h1>

            <p className='detailDescription'>{characterData.description === '' ? <span className='emptyDescription'>{t('emptyDescription')}</span> : characterData.description}</p>
          </div>
          <div className='comics'>
            <div>{t('comics')}</div>
            <ul>
              {
                characterData.comics?.items.length === 0 && <span className='emptyComics'>{t('emptyComics')}</span>
              }
              {
                characterData.comics?.items.slice(0, 10).map((item, i) => (
                  <li key={i} > {item.name}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>

  );
}

export default CharacterDetail;