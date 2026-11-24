import express from 'express';
import renderApi from '@api/render-api';

const app = express();

renderApi.auth(process.env.RENDER_API_KEY);

app.get('/', (req, res) => res.send('Render services API is running'));

app.get('/services', async (req, res) => {
  try {
    const { data } = await renderApi.listServices({ includePreviews: 'true', limit: '20' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
