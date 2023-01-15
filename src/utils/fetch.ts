import axios from "axios";

/**
 * The axios.create() function creates a custom instace of axios which helps us provide additional params with url
 * 
 * for EXAMPLE 
 * const instance = axios.create({
 *    baseURL: 'https://some-domain.com/api/',
 *    timeout:1000,
 *    headers:{'X-Custom-Header':'foobar'}
 * });
 * 
 * 
 * in above example baseURL is a backend api where you want a connect with
 * timeout sets timeout per request which will trigger a error if request is not fulfilled within timeout value
 * the time value is in miliseconds, default is 0 means itwill wait for indefinite time period
 * If you need to send some extra metadata then custome header is good option.
 *  
 * const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
  });
 * 
 */


//To access "ONLY" public access routes

const publicFetch = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials:true,
});

export { publicFetch };

// const publicFetch = axios.create({
//   baseURL: process.env.REACT_APP_API_URL
// });

// export { publicFetch };
