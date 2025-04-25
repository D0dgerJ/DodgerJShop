/*const API_BASE =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_URL_LOCAL
    : process.env.REACT_APP_API_URL_PROD;
*/

/*const API_BASE = process.env.REACT_APP_API_URL_PROD || "http://79.132.3.109:5000";*/

const API_BASE = (process.env.REACT_APP_API_URL_PROD || "http://192.168.1.100:5000") + "/api";

export default API_BASE;
console.log("ENV PROD:", process.env.REACT_APP_API_URL_PROD);
console.log("ENV LOCAL:", process.env.REACT_APP_API_URL_LOCAL);
