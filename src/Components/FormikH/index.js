import React from "react";
import { Formik, Form } from "formik";
import InputCreator from "../InputCreator/index";
import * as Yup from "yup";

export default function FormikH() {
    return (
        <>
            <h1>Subscribe this awesome form!</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, "Must be 15 characters or less")
                        .required("Required field"),
                    lastName: Yup.string()
                        .max(20, "Must be 20 characters or less")
                        .required("Required field"),
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Required field"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <InputCreator
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Jane"
                    />
                    <InputCreator
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Jane"
                    />
                    <InputCreator
                        label="Email"
                        name="email"
                        type="text"
                        placeholder="janedoe@email.com"
                    />
                    <InputCreator
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Your secret password"
                    />
                    <button type="submit">submit</button>
                </Form>
            </Formik>
        </>
    );
}
