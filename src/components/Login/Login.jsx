import {
  Form, Formik, Field, ErrorMessage,
} from 'formik';
import * as yup from 'yup';
import { Redirect } from 'react-router-dom';
import style from './Login.module.css';

const validation = yup.object().shape({
  login: yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Обязательно'),
  password: yup.string().min(7, 'Too Short!').required('Обязательно'),
  email: yup.string().required('Обязательно'),
});

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1 className={style.head}>Login</h1>
      <Formik
        initialValues={{
          login: '',
          password: '',
          email: '',
          rememberMe: false,
        }}
        validationSchema={validation}
        onSubmit={(values) => {
          props.loginn(values.email, values.password, values.rememberMe);
        }}
      >
        {({
          values, handleChange, handleBlur,
          isValid, dirty,
        }) => (
          <Form className={style.form}>
            <div className={style.items}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="email" className={style.lable}>Email</label>
              <Field
                className={style.input}
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="email"
              />
            </div>
            <div className={style.error}><ErrorMessage name="email" /></div>
            <div className={style.items}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="password" className={style.lable}>Password</label>
              <Field
                className={style.input}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="password"
              />
            </div>
            <div className={style.error}><ErrorMessage name="password" /></div>
            <div className={style.items}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="login" className={style.lable}>Login</label>
              <Field
                className={style.input}
                type="text"
                name="login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
                placeholder="login"
              />
            </div>
            <div className={style.error}><ErrorMessage name="login" /></div>
            <div className={style.remember}>
              <Field className={style.checkbox} type="checkbox" name="Remember me" />
              Remember Me
            </div>
            <button
              className={style.button}
              name="button"
              disabled={!isValid && !dirty}
              onClick={handleBlur}
              type="submit"
            >
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { Login };
