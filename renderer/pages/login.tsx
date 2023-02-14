import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { signIn } from "../../utils/authFunc";
import { useRouter } from "next/router";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const router = useRouter();

  const handleSignIn = () => {
    if (email.trim() === "") {
      setError("Error: 이메일을 입력해주세요");
      return;
    } else if (password.trim() === "") {
      setError("Error: 비밀번호를 입력해주세요");
      return;
    }
    signIn(email, password, setError, onLoginSuccess);
  };

  const onLoginSuccess = () => {
    router.push("/main");
  };

  const onChangeValue = (field: string, value: string) => {
    if (field === "email") {
      setEmail(value);
    } else if (field === "password") {
      setPassword(value);
    }
    if (error !== "") setError("");
  };

  return (
    <React.Fragment>
      <Head>
        <title>Desktop Chat App - Sign in</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.bgFade}>
          <div className={styles.loginBox}>
            <h2>이메일 ID 입력하여 로그인 해주세요</h2>
            <input value={email} onChange={(e) => onChangeValue("email", e.target.value)} placeholder={"이메일"} />
            <input value={password} onChange={(e) => onChangeValue("password", e.target.value)} placeholder={"비밀번호"} />
            {error !== "" && <p className={styles.errorMsg}>{error}</p>}
            <button className={styles.loginBtn} onClick={handleSignIn}>
              로그인
            </button>
            <Link href="/home">이메일 아이디로 회원 가입</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignInPage;
