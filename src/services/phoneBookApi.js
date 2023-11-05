import axios from "axios";

const phoneBookInstance = axios.create({
    baseURL: "https://connections-api.herokuapp.com/",
 
});

export const setToken = (token) => {
    phoneBookInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const requestRegister = async (formData) => {
    const { data } = await phoneBookInstance.post("/users/signup", formData);
    setToken(data.token)
    return data;
}

export const requestLogin = async (formData) => {
    const { data } = await phoneBookInstance.post("/users/login", formData);
    setToken(data.token)
    return data;
}

export const requestLogout = async () => {
    const { data } = await phoneBookInstance.post("/users/logout");
    return data;
}

export const requestRefreshUser = async () => {
    const { data } = await phoneBookInstance.get("/users/current");
    return data;
}

 export const requestContacts = async () => {
   const { data } = await phoneBookInstance.get(
    '/contacts'
  );
  return data;
}

export const requestAddContact = async (newContact) => {
  const { data } = await phoneBookInstance.post(
    '/contacts',
    newContact
  );
  return data;
}

export const requestDeleteContact = async (contactId) => {
 const {data} = await phoneBookInstance.delete(
    `/contacts/${contactId}`
  );
  return data;
}