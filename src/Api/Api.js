export const Api = {
    baseURL: "https://equipe2-pneustore.azurewebsites.net",

    //url get
    readAllTyreUrl: () => Api.baseURL + "/Tyre",
    readSingleTyreUrl: (id) => Api.baseURL + `/Tyre/${id}`,
    readClient: () => Api.baseURL + "/Client",

    //url post
    creatClientUrl: () => Api.baseURL + "/Client",

    //url path
    updateClienteUrl: (id) => Api.baseURL + `/Client/${id}`,

    //url Auth
    registerAuthUrl: () => Api.baseURL + "/Auth/Register",
    tokenAuthUrl: () => Api.baseURL + "/Auth/Token", 

    //auth header
    authHeader: {
        Authorization: "Bearer " + localStorage.getItem("Jwt"),
    },

    // Funções de Requisição
    buildAppGetRequest: (url,) => 
    fetch(url, { 
        method: "GET" ,
    }),

    buildAppGetRequestToken: (url, auth) => 
    fetch(url, { 
        method: "GET" ,
        headers: auth ? new Headers({ ...Api.authHeader }) : undefined,
    }),

    buildApiPostRequest: (url, body) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(body),
    }),

    buildApiPathRequest: (url, body) =>
    fetch(url, {
      method: "PATH",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(body),
    }),

};