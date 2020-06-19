import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(2, 'Your name must be more than 2 characters long')
        .required('You must include a name for the order'),
    size: Yup
        .string()
        .oneOf(['small', 'medium', 'large'], "Must select a size.")
        .required("Must select a size."),
    sauce: Yup
        .string()
        .oneOf(['marinara', 'white', 'bbq'], "Must select a sauce.")
        .required("Must select a sauce."),
    specialInstructions: Yup
        .string(),
})

export default formSchema
