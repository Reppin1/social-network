import { Form, Formik, Field } from 'formik';
import * as yup from 'yup';

const validation = yup.object().shape({
  message: yup.string().trim(),
});

const DilogsForm = (props) => (
  <div>
    <Formik
      initialValues={{
        message: '',
      }}
      validationSchema={validation}
      onSubmit={(message) => props.addNewMessages(message)}
    >
      {({
        values, handleChange,
      }) => (
        <Form>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <br />
          <Field
            component="textarea"
            name="message"
            onChange={handleChange}
            value={values.message}
            placeholder="writte a message"
          />
          <br />
          <button type="submit">add message</button>
        </Form>
      )}
    </Formik>
  </div>
);

export { DilogsForm };
