import axios from 'axios';
import md5 from 'md5';


//hascode for api = ts+privateKey+publicKey
const ts = 1;
const hascode = md5(ts + process.env.REACT_APP_MARVEL_PRIVATE_API_KEY + process.env.REACT_APP_MARVEL_PUBLIC_API_KEY);

export default class MarvelService {


  getCharactersByPage(pageNumber) {
    return axios.get('https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=' + (pageNumber * 20) + '&ts=' + ts + '&apikey=' + process.env.REACT_APP_MARVEL_PUBLIC_API_KEY + '&hash=' + hascode);
  }
}
