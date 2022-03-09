const getData = fetch('db.json');
getData.then(response => response.json())
  .then(data => console.log("объект", data));

const sendData = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(response => response.json())
};

sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(getData.data))
  .then(data => console.log(data));