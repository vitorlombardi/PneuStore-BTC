export const ViaCep = {
    baseURL: "https://viacep.com.br/ws/",


    buscaCep: (cep) => ViaCep.baseURL + `${cep}/json/`,
   


    buildAppGetRequest: (url,) => 
    fetch(url, { 
        method: "GET" ,
    }),
};