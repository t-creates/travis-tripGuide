const axios = require('axios');

export const hotelLocation = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations',
  params: { name: 'Germany', search_type: 'ALL' },
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
  },
};

// export const hotelLocationData = axios.request(hotelLocation).then((response) => {
//   const { data } = response;
//   console.log(data);
// }).catch((error) => {
//   console.error(error);
// });
