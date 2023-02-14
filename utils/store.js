import Store from "electron-store";

const userData = `userData`;
const store = new Store({ userData });

const setUserData = (user) => {
  store.set("user", user);
};

const getUserData = () => {
  return store.get("user");
};

export { setUserData, getUserData };
