import axios from 'axios';

const url = 'https://corona.lmao.ninja/countries/';

const getDataByCountryName = (countryName = 'Brazil') => axios.get(`${url}${countryName}`);

export default { getDataByCountryName };
