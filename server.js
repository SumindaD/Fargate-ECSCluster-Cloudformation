'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Using the msiexec command: Alternatively, you can use the MSI installer by adding the link to the msiexec command. For a specific version of the AWS CLI, append a hyphen and the version number to the filename.');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
