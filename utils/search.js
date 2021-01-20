/* eslint-disable no-console */
const fetch = require("node-fetch");

const stringifyQuery = (query) => {
  const queryObject = {
    queryString: `title:"${query}"`,
    resultContext: {
      maxResults: 20,
      aspects: ["title", "lifecycle", "location", "summary", "editorial"],
    },
  };

  return JSON.stringify(queryObject);
};

const fetchHeadlines = async (query) => {
  const results = await fetch(
    `http://api.ft.com/content/search/v1?apiKey=${process.env.FT_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringifyQuery(query),
    },
  )
    .then((response) => {
      console.log(`[FT Search] Found headlines matching ${query}`);
      return response.json();
    })
    .catch((error) => {
      console.log(`[FT Search] Failed to fetch Headlines ${error}`);
    });

  return results.results[0].results;
};

module.exports = fetchHeadlines;
