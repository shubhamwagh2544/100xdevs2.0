const express = require('express')
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.json())

// function to add two numbers
function add (a, b) {
  return a + b
}

app.post('/rpc', (req, res) => {
  const { jsonrpc, method, params, id } = req.body
  if (jsonrpc !== '2.0' || !method || !Array.isArray(params)) {
    return res.status(400).json({
      jsonrpc: '2.0',
      error: {
        code: -32600,
        message: 'Invalid Request'
      },
      id
    });
  }

  let result;
  switch (method) {
    case 'add':
      result = add(params[0], params[1])
      break;

    default:
        return res.status(404).json({
            jsonrpc: '2.0',
            error: {
            code: -32601,
            message: 'Method not found'
            },
            id
        });
  }

  // successful response
  res.json({ jsonrpc: '2.0', result, id })
});

app.listen(3000, () => {
    console.log('Server running on port 3000')
});