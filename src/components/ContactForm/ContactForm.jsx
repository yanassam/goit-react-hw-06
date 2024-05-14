import s from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

const ContactForm = ({ handleAddContact }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    handleAddContact(values);

    actions.resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div>
          <label htmlFor={nameId}>{"Name*"}</label>
          <Field type="text" name="name" id={nameId} autoComplete="false" />
          <ErrorMessage name="name" component="span" className={s.error} />
        </div>
        <div>
          <label htmlFor={numberId}>{"Number*"}</label>
          <Field
            type="phone"
            name="number"
            id={numberId}
            autoComplete="false"
            className={s.number}
          />
          <ErrorMessage name="number" component="span" className={s.error} />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
