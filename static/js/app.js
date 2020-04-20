const baseUrl = location.href;
const tbody = document.body.querySelector('tbody');
const socket = io(baseUrl);

fetch(baseUrl + 'store')
   .then(res => res.json())
   .then(fillTable)
   .then(() => {
      socket.on('snapshot', fillTable);
   });
