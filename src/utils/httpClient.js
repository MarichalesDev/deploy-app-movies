const API = "https://api.themoviedb.org/3";

export function get(path) {
   return fetch(API + path, {
        headers: {Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjNkOThkMWE2MDgxMmY2ZmMwMTIzN2Q3OTdiMDEzOSIsInN1YiI6IjYzYzcyN2Y2ZTI2M2JiMDA3Yzk5NzAwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XHnL4SNvrKNE7Dwls4WtMXcI5w_nMNAcjslKqavQIRQ"},
          "Content-Type": "application/json;charset=utf-8",
       })
        .then(result => result.json());
     }
 
