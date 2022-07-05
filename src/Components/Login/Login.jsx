import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from '../common/Forms Controls/FormsControls';
import { required} from '../../Utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth-reducer';
import {Navigate} from 'react-router-dom';
import style from '../common/Forms Controls/FormsControl.module.css'

const LoginForm = (props) => {
   return (
   <form onSubmit={props.handleSubmit} action="">
      <div>
         <Field
         component={Input}
         validate={[required] }
         placeholder={"Email"} 
         name={"email"} />
      </div>
      <div>
         <Field
         component={Input}
         validate={[required] }
          placeholder={"Password"} 
          name={"password"} 
          type={"Password"}
          />
      </div>
      <div>
      <Field 
       component={'input'}
       validate={[required] }
      type="checkbox"  
      name={"rememberMe"}  
     />remember me
      </div>
      {props.error && <div className={style.formSummaryError}>
      {props.error}
      </div>}
      <div>
         <button>Login</button>
      </div>
   </form>
   )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

   const onSubmit = (FormData) => {
     props.login(FormData.email, FormData.password, FormData.rememberMe)
   }
if (props.isAuth) {
   return <Navigate to={'/profile'}/>
}
   return <div>
   <h1>Login</h1>
   <LoginReduxForm onSubmit={onSubmit}/>
   </div>
};
const mapStateToProps = (state) => (
   {isAuth: state.auth.isAuth}
)
export default connect (mapStateToProps, {login}) (Login);