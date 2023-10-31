import React from 'react';
import AuthForm from "./AuthForm";
import {Link} from "react-router-dom";

const Register = ({isLoading, onSubmit}) => {
  return (
      <>
        <AuthForm title="Регистрация" buttonTitle="Зарегистрироваться" isLoading={isLoading} onSubmit={onSubmit} />
        <p style={{textAlign: 'center', fontSize: 14, fontWeight: '400', color: 'white', textDecoration: 'none'}}>Уже зарегистрированы? <Link to='/sign-in' >Войти</Link></p>
      </>
  );
};

export default Register;
