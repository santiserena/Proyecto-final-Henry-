import React from "react";
import style from "./../login/Login.module.css";

const Login = () => {
  return (
    <div className={style.login}>
      <div className={style.container}>
        <div className={style.image}>
          <h1>LOGIN</h1>
        </div>
        <div>
          <input placeholder="Email" autoFocus type="email" className={style.input}></input>
        </div>
        <div>
          <input placeholder="Contraseña" type="password" className={style.input}></input>
        </div>
        <div className={style.register}>
          <button className={style.btn}>Iniciar Sesion</button>
          <p>Registrarse</p>
          <p>Olvide mi contraseña</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
