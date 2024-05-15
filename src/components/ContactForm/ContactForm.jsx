import s from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
// ********
import { nanoid } from "nanoid";

const ContactForm = ({ handleAddContact }) => {
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    handleAddContact({ id: nanoid(), name: values.name, phone: values.number });
    actions.resetForm();
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleAddContact({ id: nanoid(), name, phone });
  //   setName("");
  //   setPhone("");
  // };

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
