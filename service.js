const express = require('express');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload.single('upload'), function (req, res) {
  res.status(200).json({ size: req.file.size });
});

app.listen(PORT, function () {
  console.log('File Metadata Microservice running on port ' + PORT);
});
