'use strict';
let uuid = require('uuid');
function sleepSecs(secs) {
  return new Promise(resolve => setTimeout(resolve, secs * 1000));
}

let count = 0;
let instanceId = uuid.v4();
let aLength = 1e7;
let a = Array(aLength);
for (let i = 0; i < a.length; i++) a[i] = i;

module.exports = {
  async helloWorld(event, context) {
    await sleepSecs(2);
    let sum = 0;
    for (const v of a) sum += v;
    let rssMB = (parseInt(process.memoryUsage().rss)/(1024*1024)).toFixed(2);
    let htMB = (parseInt(process.memoryUsage().heapTotal)/(1024*1024)).toFixed(2);
    let huMB = (parseInt(process.memoryUsage().heapUsed)/(1024*1024)).toFixed(2);
    let result = `${instanceId},${count},${aLength},${sum},${rssMB},${htMB},${huMB},Hello World\n`;
    count += 1;
    return result;
  },
};
