import proxy from "express-http-proxy";

const { API_HOST, API_PORT, API_KEY } = process.env;

const apiUrl = `https://${API_HOST}:${API_PORT}`;

const setupAPIProxy = (expressApp) => {
  expressApp.use('/api', proxy(apiUrl, {
    proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
      // you can update headers
      proxyReqOpts.headers['api_key'] = API_KEY;
      return proxyReqOpts;
    },
    proxyReqPathResolver: function (req) {
      return `/api${req.url}`;
    }
  }));
}


export default setupAPIProxy;