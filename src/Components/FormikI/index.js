import React from "react";
import { Button } from "react-bootstrap";
import { GoLock, GoMail, GoPerson } from "react-icons/go";
import { TiSortNumerically } from "react-icons/ti";
import { FaBirthdayCake } from "react-icons/fa";
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";

const InputCashfly = ({ label, icon, placeholder, ...props }) => {
    const [field, meta] = useField(props);
    // console.log(field);
    // console.log(meta);
    return (
        <>
            <div className="form-group" id={props.name}>
                <label>{label}</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">{icon}</div>
                    </div>
                    <input
                        {...field}
                        {...props}
                        size="lg"
                        type="password"
                        name="password"
                        // value={values.password}
                        // onChange={handleChange}
                        placeholder={placeholder}
                        aria-describedby="inputGroupPassword"
                        // isInvalid={errors.password && !!touched.password}
                    />
                    {meta.touched && meta.error ? (
                        <Form.Control.Feedback type="invalid">
                            {meta.error}
                        </Form.Control.Feedback>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default function FormikI() {
    return (
        <>
            <h1>Another Formik test fellow</h1>
            <p className="lead">Now we are gonna test some input masks</p>
            <Formik
                initialValues={{
                    fullName: "",
                    email: "",
                    vatNumber: "",
                    birthDate: "",
                    password: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <InputCashfly
                        name="fullName"
                        type="text"
                        label="Seu nome completo"
                        placeholder="Jane Doe"
                        aria-describedby="fullNameInput"
                        icon={<GoPerson />}
                    />
                    <InputCashfly
                        name="email"
                        type="email"
                        label="Digite seu email aqui"
                        placeholder="janeDoe@email.example.com"
                        aria-describedby="emailInput"
                        icon={<GoMail />}
                    />
                    <InputCashfly
                        name="vatNumber"
                        type="number"
                        label="Digite seu cpf aqui"
                        placeholder="123.456.789-10"
                        aria-describedby="vatNumberInput"
                        icon={<TiSortNumerically />}
                    />
                    <InputCashfly
                        name="birthDate"
                        type="number"
                        label="Digite sua data de nascimento aqui"
                        placeholder="dia/mês/ano"
                        aria-describedby="birthDateInput"
                        icon={<FaBirthdayCake />}
                    />
                    <InputCashfly
                        name="password"
                        type="password"
                        label="Digite sua senha Cashfly"
                        placeholder="Crie sua senha aqui"
                        aria-describedby="passwordInput"
                        icon={<GoLock />}
                    />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
}
