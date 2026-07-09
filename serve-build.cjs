const fs = require("fs");
const http = require("http");
const path = require("path");

const root = path.join(__dirname, "build");
const port = Number(process.env.PORT || 3000);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
};

function sendFile(response, filePath) {
  fs.readFile(filePath, (error, contents) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream",
    });
    response.end(contents);
  });
}

http
  .createServer((request, response) => {
    const cleanUrl = decodeURIComponent(request.url.split("?")[0]);
    const requestedPath = path.normalize(path.join(root, cleanUrl));

    if (!requestedPath.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    fs.stat(requestedPath, (error, stats) => {
      if (!error && stats.isFile()) {
        sendFile(response, requestedPath);
        return;
      }

      sendFile(response, path.join(root, "index.html"));
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Portfolio server running at http://localhost:${port}`);
  });
