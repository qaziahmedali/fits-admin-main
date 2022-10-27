/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import EmailVerify from "./EmailVerify";
import ChangePassword from "./ChangePassword";

export function AuthPage() {
  return (
    <>
      <Switch>
        <Route path="/auth/login" component={Login} />
        {/* <Route path="/auth/emailsen" component={emailsend} /> */}
        <Route path="/auth/VerifyEmail" component={EmailVerify} />
        <Route path="/auth/ForgotPassword" component={ForgotPassword} />
        <Route path="/auth/ChangePassword" component={ChangePassword} />
        <Route path="/auth/registration" component={Registration} />
        {/* <Route path="/auth/forgot-password" component={ForgotPassword} /> */}
        <Redirect from="/auth" exact={true} to="/auth/login" />
        <Redirect to="/auth/login" />
      </Switch>
    </>
  );
}
