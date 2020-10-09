//const applicationRoot = "/software/dart/";
const applicationRoot = "/";

export default class DPENV {

    static getEnv(param) {
	const env = {
	    "applicationRoot": applicationRoot,
	    "APIServerAddress": "http://localhost:8000"
	};
	return env[param];
    }
}
