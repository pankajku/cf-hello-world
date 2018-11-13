const http = require('http');
const uuid = require('uuid');

function sleepSecs(secs) {
  return new Promise(resolve => setTimeout(resolve, secs * 1000));
}

let invocationId = 0;
let instanceId = uuid.v4();
let aLength = 1e7;
let st = process.hrtime();
let a = Array(aLength);
for (let i = 0; i < a.length; i++) a[i] = i;
let et = process.hrtime(st);
console.log('Initialization time:', (et[0]*1e3 + et[1]*1e-6).toFixed(0));
const helloWorld = async () => {
  invocationId += 1;
  let currInvocationId = invocationId;
  let sum = 0;
  let st = process.hrtime();
  for (const v of a) sum += v; // sum all the numbers of array a
  let et = process.hrtime(st);
  console.log('Computation time:', (et[0]*1e3 + et[1]*1e-6).toFixed(0));
  await sleepSecs(2);  // relinquish control for 2 seconds

  let result =`${instanceId},${currInvocationId},${aLength},${sum},Hello World\n`;
  return { statusCode: 200, body: result };
};

const handleRequest = async (request, response) => {
  const result = await helloWorld()
  response.writeHead(result.statusCode);
  response.end(result.body);
};
var www = http.createServer(handleRequest);
www.listen(3000);
console.log('Listening on port 3000 ...');
