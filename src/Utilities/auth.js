export const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };
  
  export const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  
  export const getAuthToken = () => {
    return localStorage.getItem("token");
  };