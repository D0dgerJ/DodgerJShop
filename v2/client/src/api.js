/*const API_BASE =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_URL_LOCAL
    : process.env.REACT_APP_API_URL_PROD;
*/

const API_BASE = process.env.REACT_APP_API_URL_PROD || "http://79.132.3.109:5000";
export default API_BASE;
