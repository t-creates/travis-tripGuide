const axios = require('axios');

const destinationCardData = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest',
  params: {
    string: 'Indonesia',
    get_pois: 'true',
    combine_regions: 'true',
    get_hotels: 'true',
    get_airports: 'true',
    show_all_cities: 'true',
    get_regions: 'true',
    get_cities: 'true',
  },
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
  },
};

// axios.request(destinationCardData).then((response) => {
//   console.log(response.data);
// }).catch((error) => {
//   console.error(error);
// });
