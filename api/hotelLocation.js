const axios = require("axios");

export const hotelLocation = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations',
  params: {name: 'Germany', search_type: 'ALL'},
  headers: {
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
  }
};

export const hotelLocationData = axios.request(hotelLocation).then(function (response) {
	const data = response.data;
  console.log(data);
}).catch(function (error) {
	console.error(error);
});


// const options = {
//   method: 'GET',
//   url: 'https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest',
//   params: {
//     string: 'New York',
//     get_pois: 'true',
//     combine_regions: 'true',
//     get_hotels: 'true',
//     get_airports: 'true',
//     show_all_cities: 'true',
//     get_regions: 'true',
//     get_cities: 'true'
//   },
// };

// export const optionsData = axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });