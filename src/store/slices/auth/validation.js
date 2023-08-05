import * as Yup from "yup"
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
  };

export const loginValidationSchema = Yup.object({
    username : Yup.string().required("username is required."),
    password : Yup.string()
    .min(6, "password must be at least 6 characters.")
    .matches(/^[a-zA-Z0-9]+$/, "password must be alphanumeric.")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .required("password is required."),
})
