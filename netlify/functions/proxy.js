// proxy.js

const axios = require('axios');

exports.handler = async function(event, context) {
  try {
    const apiUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6525666&lng=77.408566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING' + event.path;
    const headers = {
      // Include any necessary headers here
    };

    const response = await axios.get(apiUrl, { headers });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred' }),
    };
  }
};
