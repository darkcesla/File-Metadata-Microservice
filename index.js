var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();
const multer = require('multer');
// Set upload ke folder "uploads"
const upload = multer({ dest: 'uploads' });

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Route analisis file nya
app.post('/api/fileanalyse', upload.single('upfile'), function(req, res) {
  // Mengambil data dari file yang diupload
  let name = req.file.originalname;
  let type = req.file.mimetype;
  let size = req.file.size;

  // Mengembalikan data
  res.json({
    name,
    type,
    size
  });
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Your app is listening on port ' + port)
});
