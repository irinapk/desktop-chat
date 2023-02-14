import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
// import { useAuth } from "../../utils/authFunc";
import { getUserData } from "../../utils/store";
import Link from "next/link";

function MainPage() {
  //   const { isLoggedIn, user } = useAuth();

  const [loginUser, setLoginUser] = useState(null);

  //   useEffect(() => {
  let res = getUserData();
  if (loginUser === null && res) setLoginUser(res);
  console.log(res);
  //   }, []);

  console.log("user", loginUser);

  return (
    <React.Fragment>
      <Head>
        <title>Desktop Chat App</title>
      </Head>
      <div>
        <h1>user status</h1>
        {loginUser && <p>user: {loginUser.name}</p>}
        {/* <p>user: {user}</p>
        <p>logged: {isLoggedIn}</p> */}
        <Link href="/login">back to login</Link>
      </div>
    </React.Fragment>
  );
}

export default MainPage;
