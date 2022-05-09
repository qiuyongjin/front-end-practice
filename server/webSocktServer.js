"use strict";
exports.__esModule = true;
var ws = require("ws");
// 创建一个 WebSocket 服务器，监听的是 30002 端口
var webSocketServer = new ws.Server({
    port: 30002
});
// 监听的是 WebSocket 服务开始监听的事件
webSocketServer.on('listening', function (socket) {
    console.log('web socket begins listening');
});
// 监听的是 WebSocket 服务被客户端连接上的事件
webSocketServer.on('connection', function (socket, req) {
    // 监听的是 服务端收到了客户端发来的消息 事件
    socket.on('message', function (data) {
        console.log(data);
        socket.send("server received your message:".concat(data));
        if (data === 'terminate') {
            socket.close();
            setTimeout(function () {
                webSocketServer.close();
            }, 3000);
        }
    });
    // 监听的是，服务端收到了客户端关闭连接的事件，由客户端发起的关闭
    socket.on('close', function (code, reason) {
        console.log(code);
        console.log(reason);
    });
    // 监听的是，WebSocket 通信过程中出错的事件
    socket.on('error', function (error) {
        console.log('error:');
        console.log(error);
    });
    var ip = req.connection.remoteAddress;
    console.log(ip + ' is connected');
    socket.send('hi');
});
