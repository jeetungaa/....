const axios = require('axios');

const openai = async (message) => {
  const response = await axios.post(
    'https://api.openai.com/v1/engines/davinci-codex/completions',
    {
      prompt: message,
      max_tokens: 150,
      temperature: 0.9,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );

  return response.data.choices[0].text;
};

module.exports = openai;