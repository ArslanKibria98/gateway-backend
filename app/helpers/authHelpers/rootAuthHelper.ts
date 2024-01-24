var jwt = require("jsonwebtoken");
import { getKey, isTokenValid } from "../authHelpers/nodeInfraAuthHelper";
const INVALID_TOKEN = "Invalid token";

export interface Response {
  isFromNodeInfra: boolean;
  isValid: boolean;
  id: string;
}

export const decodeToken = (req: any): Response => {
  const token = req.headers.authorization.split(" ")[1];
  return filterRoutesAndVerify(
    token ? token : "",
    req?.originalUrl,
    req?.query?.nodeType,
    req?.query?.address ? req?.query?.address : ""
  );
};

const filterRoutesAndVerify = (
  token: string,
  url: string,
  nodeType: string,
  address: string
): Response => {
  let authResponse: Response = {
    isFromNodeInfra: false,
    isValid: false,
    id: "",
  };
  console.log(url);
  if (url.includes("/v1/transactions/") || url.includes("/v1/rpcNodes/")) {
    let key = getKey(url, nodeType, address);
    if (isTokenValid(token, key)) {
      authResponse.isFromNodeInfra = true;
      authResponse.isValid = true;
    }
  } else {
    const decoded = jwt.verify(token, (global as any).environment.jwtSecret);
    if (decoded) {
      authResponse.isValid = true;
      authResponse.id = decoded._id;
    }
  }
  return authResponse;
};

export const getUser = async (id: string) => {
  return await db.Users.findOne({
    _id: id,
  });
};

export const invalidRequest = async (res: any) => {
  return res.http401(INVALID_TOKEN);
};