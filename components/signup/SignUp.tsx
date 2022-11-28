import Link from "next/link";
import styles from "./signup.module.scss";
const SignUp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <Link href={"/auth/login"}>Войти</Link>
      </div>
    </div>
  );
};

export default SignUp;