import {cpus, totalmem, freemem, machine} from "node:os";

const cpusInfo = cpus();
const totalmemInfo = totalmem();
const freememInfo = freemem();
const machineInfo = machine();

console.log(cpusInfo);
console.log(totalmemInfo);
console.log(freememInfo);
console.log(machineInfo);

