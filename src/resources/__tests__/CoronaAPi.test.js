import axios from 'axios';
import CoronaAPI from '../CoronaAPI';

jest.mock('axios');

describe('Corona API', () => {
  it('should fetch corona data according to given country', () => {
    CoronaAPI.getDataByCountryName('EUA');
    expect(axios.get.mockResolvedValue()).toBeCalledWith('https://corona.lmao.ninja/countries/EUA');
  });

  it('should fetch Brazil data when country name is not given', () => {
    CoronaAPI.getDataByCountryName();
    expect(axios.get.mockResolvedValue()).toBeCalledWith('https://corona.lmao.ninja/countries/Brazil');
  });
});
