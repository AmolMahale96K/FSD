const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    // Serve the HTML form
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h2>File Upload Form</h2>
      <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="myfile" /><br><br>
        <input type="submit" value="Upload File" />
      </form>
    `);
  } else if (req.url === '/upload' && req.method === 'POST') {
    // Basic file upload handling using 'fs' and 'formidable'
    const formidable = require('formidable');
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, 'uploads');
    form.keepExtensions = true;

    if (!fs.existsSync(form.uploadDir)) {
      fs.mkdirSync(form.uploadDir);
    }

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('File upload failed');
      }

      const oldPath = files.myfile.filepath;
      const newPath = path.join(form.uploadDir, files.myfile.originalFilename);

      fs.rename(oldPath, newPath, () => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h3>File uploaded successfully!</h3>`);
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


// npm install formidable
