import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { signUp, signIn, useAuth } from "../../utils/authFunc";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const { user, isLoggedIn } = useAuth();

  const handleSignUp = () => {
    if (email.trim() === "") {
      setError("Error: 이메일을 입력해주세요");
      return;
    } else if (name.trim() === "") {
      setError("Error: 이름을 입력해주세요");
      return;
    } else if (password.trim() === "") {
      setError("Error: 비밀번호를 입력해주세요");
      return;
    }
    signUp(name, email, password, setError, onRegisterSuccess);
  };

  const onRegisterSuccess = () => {
    alert("회원 가입 완료되었습니다!");
    signIn(email, password, setError, () => router.push("/main"));
  };

  const onChangeValue = (field: string, value: string) => {
    if (field === "name") {
      setName(value);
    } else if (field === "email") {
      setEmail(value);
    } else if (field === "password") {
      setPassword(value);
    }
    if (error !== "") setError("");
  };

  return (
    <React.Fragment>
      <Head>
        <title>Desktop Chat App - Registration</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.bgFade}>
          <div className={styles.loginBox}>
            <h2>회원 가입</h2>
            <input value={name} onChange={(e) => onChangeValue("name", e.target.value)} placeholder={"이름"} />
            <input value={email} onChange={(e) => onChangeValue("email", e.target.value)} placeholder={"이메일"} />
            <input value={password} onChange={(e) => onChangeValue("password", e.target.value)} placeholder={"비밀번호(6글자 이상)"} />
            {error !== "" && <p className={styles.errorMsg}>{error}</p>}
            <button className={styles.loginBtn} onClick={handleSignUp}>
              완료
            </button>
            <div className={styles.linkText}>
              <p>이미 회원이신가요? </p>
              <Link href="/login">로그인</Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
