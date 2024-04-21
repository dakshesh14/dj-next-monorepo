import ApiBase from "./api-base";

// cookies
import Cookies from "js-cookie";

// import type { User, UserForm, LoginResponse } from "@/types/user";
type User = any;
type UserForm = any;
type LoginResponse = any;

class AuthenticationService extends ApiBase {
  static async login(email: string, password: string) {
    const response = await this.postWithoutHeader<LoginResponse>(
      "/accounts/login/",
      {
        email,
        password,
      }
    );

    this.setAccessToken(response.access_token);
    this.setRefreshToken(response.refresh_token);

    return response;
  }

  static async register(userForm: UserForm) {
    const response = await this.postWithoutHeader<LoginResponse>(
      "/accounts/register/",
      userForm
    );

    this.setAccessToken(response.access_token);
    this.setRefreshToken(response.refresh_token);

    return response;
  }

  static refreshToken = async () => {
    const response = await this.post<any>("/token/refresh/", {
      refresh: Cookies.get("refreshToken"),
    });
    Cookies.set("accessToken", response.access, {
      expires: 7,
    });
    return response.access;
  };

  static getUserDetails = async () => {
    return await this.get("/user/");
  };

  static async getMe() {
    const response = await this.get<User>("/accounts/me/");
    return response;
  }

  static async updateMe(userForm: UserForm) {
    const response = await this.patch<User>("/accounts/me/", userForm);
    return response;
  }

  static async logout() {
    const response = await this.post("/accounts/logout/", {});
    return response;
  }
}

export default AuthenticationService;
