import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name can't be more than 50 characters")
    .required("Name is required"),
  number: Yup.string(),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ ...values, id: nanoid() });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.fieldWrapper}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <Field
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="Enter contact name"
          />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>

        <div className={styles.fieldWrapper}>
          <label htmlFor="number" className={styles.label}>
            Number
          </label>
          <Field
            type="text"
            id="number"
            name="number"
            className={styles.input}
            placeholder="Enter phone number"
          />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>

        <button type="submit" className={styles.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
