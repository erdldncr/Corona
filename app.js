fetch('https://covid-api.mmediagroup.fr/v1/cases?country=Turkey').then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return console.log(jsonResponse)
});