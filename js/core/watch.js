'use strict'
const io = require('socket.io-client');
const socket = io.connect('https://board1-parcial-fronted.vercel.app:9090');
console.log('socket cargado...');

module.exports =  {
    io,
    socket,
};