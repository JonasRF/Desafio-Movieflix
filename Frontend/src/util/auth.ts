import jwtDecode from "jwt-decode";
import { getAuthData } from "./storage";

export type Role = "ROLE_VISITOR" | "ROLE_MEMBER";

export type TokenData = {
    exp: number;
    user_name: string;
    authorities: Role[];
  };

  export const getTokenData = (): TokenData | undefined => {
      try{
          return jwtDecode(getAuthData().access_token) as TokenData;
      }catch(error){
          return undefined;
      }
  };

  export const isAuthenticaded = (): boolean => {
      const tokenData = getTokenData();
      return tokenData && tokenData.exp * 1000 > Date.now() ? true : false;
  };