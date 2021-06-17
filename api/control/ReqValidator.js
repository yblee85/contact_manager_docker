const API_KEY = process.env.API_KEY;

const ReqValidator = (req, res, next) => {
    const { api_key } = req.headers;
    if(api_key !== API_KEY) {
        return res.status(403).send({
            message : "Invalid API Key"
        });
    }
    next();
};

export default ReqValidator;