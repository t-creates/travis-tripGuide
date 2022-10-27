const axios = require("axios");

export const hotelLocation = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations',
  params: {name: 'Indonesia', search_type: 'ALL'},
  headers: {
    'X-RapidAPI-Key': 'e9e8848132msh8d3cb44c6e9ed03p1a3216jsnea0051c126a4',
    'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
  }
};

export const hotelLocationData = axios.request(hotelLocation).then(function (response) {
	const data = response.data;
  console.log(data);
}).catch(function (error) {
	console.error(error);
});

