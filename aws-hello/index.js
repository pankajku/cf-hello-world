const uuid = require('uuid');

function sleepSecs(secs) {
  return new Promise(resolve => setTimeout(resolve, secs * 1000));
}

let invocationId = 0;
let instanceId = uuid.v4();
let aLength = 1e7; // 10 millions
let a = Array(aLength); // allocate a very large array
for (let i = 0; i < a.length; i++) a[i] = i;

module.exports.helloWorld = async (event, context) => {
  invocationId += 1;
  let currInvocationId = invocationId;
  let sum = 0;
  for (const v of a) sum += v; // sum all the numbers of array a
  await sleepSecs(2);  // relinquish control for 2 seconds

  let result =`${instanceId},${currInvocationId},${aLength},${sum},Hello World\n`;
  return { statusCode: 200, body: result };
};
