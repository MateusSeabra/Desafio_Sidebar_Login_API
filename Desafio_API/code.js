const express = require('express');
const api = express();

let last_message = null;

api.use(express.json());

api.post('/message', (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      throw new Error('A mensagem não obedece o formato exigido na requisição.');
    }
    last_message = message;
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

api.get('/', (req, res) => {
  if (last_message) {
    res.json({ last_message });
  } else {
    res.status(404).json({ error: 'Nenhuma mensagem recebida.' });
  }
});

api.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});