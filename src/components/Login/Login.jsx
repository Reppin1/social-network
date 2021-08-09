import { Form, Formik, Field } from 'formik';
import * as yup from 'yup';
import style from './Login.module.css';

const validation = yup.object().shape({
  login: yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Обязательно'),
  password: yup.string().min(7, 'Too Short!').required('Обязательно'),
  email: yup.string().required('Обязательно'),
});

const Login = () => (
  <div>
    <h1 className={style.head}>Login</h1>
    <Formik
      initialValues={{
        login: '',
        password: '',
        email: '',
      }}
      validationSchema={validation}
      onSubmit={(values) => {
        // eslint-disable-next-line no-console
        console.log(values);
      }}
    >
      {({
        values, errors, touched, handleChange, handleBlur,
        isValid, dirty,
      }) => (
        <Form className={style.form}>
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
          {touched.login && errors.login ? <p className={style.error}>{errors.login}</p> : null}
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
          {touched.password && errors.password
            ? <p className={style.error}>{errors.password}</p> : null}
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
          {touched.email && errors.email ? <p className={style.error}>{errors.email}</p> : null}
          <div className={style.remember}>
            <Field className={style.checkbox} type="checkbox" name="Remember me" />
            Remember Me
          </div>
          <button className={style.button} name="button" disabled={!isValid && !dirty} onClick={handleBlur} type="submit">Отправить</button>
        </Form>
      )}
    </Formik>
  </div>
);

export { Login };
