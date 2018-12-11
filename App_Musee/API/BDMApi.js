export function getOeuvresFromAPI() {
  //http://localhost:8000/oeuvres/?format=api
  //http://localhost:8000/oeuvres/?format=json
  return fetch('http://172.20.10.2:8000/oeuvres/')
   .then((response) => response.json())
   .catch((error) => console.log(error))
}

export function getOeuvresFromAPI() {
  return fetch('http://192.168.1.45:8000/oeuvres/')
        .then((response) => response.json())
        .then((responseJson) => { console.log(responseJson) this.setState({ isLoading: false, oeuvres: responseJson, }); })
        .catch((error) =>{ console.log("error"); })
}

// export function getOeuvresFromAPI() {
//   //http://localhost:8000/oeuvres/?format=api
//   //http://localhost:8000/oeuvres/?format=json
//   return fetch('http://192.168.1.12:8000/oeuvres', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify ({
//         firstParam: 'yourValue',
//         secondParam: 'yourOtherValue',
//       })
//   })
//    .then((response) => response.json())
//    .catch((error) => console.log(error))
// }

// export function getOeuvresFromAPI() {
//     //http://localhost:8000/oeuvres/?format=api
//     //http://localhost:8000/oeuvres/?format=json
//     return fetch("http://172.20.10.2:8000/oeuvres", {
//         method: 'GET',
//       })
//      .then((response) => response.json())
//      .then((responsJSON) => { console.log(responseJSON); })
//      .catch((error) => { console.log(error); });
//   }
