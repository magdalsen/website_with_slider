import * as yup from "yup";

export const schemaContact = yup.object({
    name: yup.string().required("Proszę uzupełnić wymagane pola!"),
    surname: yup.string().required("Proszę uzupełnić wymagane pola!"),
    email: yup.string().email('Nieprawidłowy email').required('Proszę uzupełnić wymagane pola!'),
    accept: yup
        .boolean()
        .oneOf([true], 'Proszę uzupełnić wymagane pola!'),
  }).required();

export type FormValues = yup.InferType<typeof schemaContact>