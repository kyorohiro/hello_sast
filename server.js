// server.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// シンプルな Hello World エンドポイント
app.get('/', (req, res) => {
  res.send('Hello World');
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

