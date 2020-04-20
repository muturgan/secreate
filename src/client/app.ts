const socket = io('http://localhost:5454');
socket.on('snapshot', (data: any) => console.log(data));
