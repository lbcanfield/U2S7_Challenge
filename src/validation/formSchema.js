import * as yup from 'yup';

const formSchema = yup.object().shape({
    nameinput: yup
        .string()
        .required('Need to input a Name')
        .min(2, "name must be at least 2 characters"),
    emailinput: yup
        .string()
        .trim()
        .required('You must enter an email'),
    crustsize: yup
        .string()
        .oneOf(['extralarge', 'large', 'medium', 'small', 'personal'], 'You must select a size'),
    sauce: yup
        .string()
        .oneOf(['originalred', 'garlicranch', 'bbqsauce', 'spinachalfredo'], 'You must select a sauce'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianbacon: yup.boolean(),
    spicyitaliansausage: yup.boolean()

})

export default formSchema;