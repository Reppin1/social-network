import { Form, Formik, Field } from 'formik';
import * as yup from 'yup';
import styles from './FormPosts.module.css';

const validation = yup.object().shape({
  value: yup.string().typeError('Должно быть строкой').min(1, 'qwdawC').trim(),
});

const FormPosts = (props) => (
  <div>
    <Formik
      initialValues={{
        value: '',
      }}
      validationSchema={validation}
      onSubmit={(values) => props.addNewPosts(values)}
    >
      {({
        values, handleChange,
      }) => (
        <Form className={styles.content}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <h3>My Post</h3>
          <Field
            component="textarea"
            name="value"
            onChange={handleChange}
            value={values.value}
            placeholder="writte a post"
          />
          <br />
          <button type="submit">add Post</button>
        </Form>
      )}
    </Formik>
  </div>
);

export { FormPosts };
