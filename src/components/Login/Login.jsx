import {
  Form, Formik, Field, ErrorMessage,
} from 'formik';
import * as yup from 'yup';
import { Redirect } from 'react-router-dom';
import style from './Login.module.css';

const validation = yup.object().shape({
  password: yup.string().min(7, 'Too Short!').required('Please enter password'),
  email: yup.string().email('Not a valid email').required('Please enter email'),
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
          password: '',
          email: '',
          rememberMe: false,
          captcha: '',
        }}
        validationSchema={validation}
        onSubmit={(values, { setStatus, setSubmitting }) => {
          props.loginn(values.email, values.password, values.rememberMe, setStatus, values.captcha);
          setSubmitting(false);
        }}
      >
        {({
          values, handleChange, handleBlur,
          isValid, dirty, status, errors, touched,
        }) => (
          <Form className={style.form}>
            <div className={style.error}>{status}</div>
            <div className={style.items}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="email" className={style.lable}>Email</label>
              <Field
                id="email"
                className={`${style.input} ${touched.email && errors.email ? style.invalidInput : ''}`}
                type="email"
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
                id="password"
                className={`${style.input} ${touched.password && errors.password ? style.invalidInput : ''}`}
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
              <label htmlFor="captcha" className={style.captcha}>Captcha</label>
              <Field className={style.input} type="input" name="captcha" />
            </div>
            <img src={props.urlCaptcha} alt="" />
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
