import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControl/FormsControl';
import { required, minLengthCreator } from '../../utils/validators/validators';

const minLength5 = minLengthCreator(5);

const LoginForm = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'login'} 
                    validate={[required]} placeholder={'login'}
                    type='email' />
            </div>
            <div>
                <Field component={Input} name={'password'} 
                    validate={[required, minLength5]} placeholder={'password'}
                    type='password' />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} 
                    type={'checkbox'} /> remember me 
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;