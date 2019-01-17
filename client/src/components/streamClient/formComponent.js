import React from 'react';
import {Field, reduxForm} from "redux-form";


class FormComponent extends React.Component {
    static renderErrorMessage(meta) {
        if(meta.touched && meta.error) {
            return <p>{meta.error}</p>
        }

        return null;
    }
    static renderInput({input, label, meta}) {
        return (
            <div>
                <label> {label} </label>
                <input {...input} />
                {FormComponent.renderErrorMessage(meta)}
            </div>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                    <Field name={"title"} component={FormComponent.renderInput} label={'title'}/>
                    <Field name={"description"} component={FormComponent.renderInput} label={'description'}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
const validate = (formValues) => {
    let error = {};
    if (!formValues.title) {
        error["title"] = "please enter a title";
    }
    if (!formValues.description) {
        error["description"] = "please enter a description";
    }

    return error;
};
export default reduxForm({
    form: 'streamCreateForm',
    validate: validate,
    enableReinitialize: true
})(FormComponent);

