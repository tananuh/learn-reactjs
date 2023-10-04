import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup
    .object({
        title: yup.string().required("lmao").min(5,'lmao > 5'),
    })
    .required()
    const form = useForm({
        defaultValues: {
            title:'',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {

        const {onSubmit} = props;
        if(onSubmit) {
            onSubmit(values);
        }
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default TodoForm;