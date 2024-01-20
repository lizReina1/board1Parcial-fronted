'use strict'
const io = require('socket.io-client');

const socket = io.connect('0.0.0.0:9090');
console.log('socket cargado...');

module.exports =  {
    io,
    socket,
};