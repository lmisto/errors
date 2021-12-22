#!./node_modules/.bin/ts-node

const axios = require("axios");
const resource = "https://api.publicapis.org/entrie";


class FailedToGetResourceException extends Error {
  constructor(requestId: number, error?: unknown) {
    super(
      `[call.ts] Failed to get resource for api endpoint for request ${requestId}
      \n Original Error: \n
      ${error}
      `
    );
    //console.log('under here')
    Error.captureStackTrace(this, this.constructor);
  }
}

async function getResource() {
  const requestId = 1;
  try {
    const resourceObj = await axios.get(resource).then((res: object) => res);
    return resourceObj
  } catch (error) {
    return new FailedToGetResourceException(requestId, error);
  }
}


const result = getResource().then((res) => console.log(res));

