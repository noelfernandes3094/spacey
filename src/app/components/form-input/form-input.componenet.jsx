import input from "./form-input.module.scss";

const FormInput = ({ otherprops }) => {
    return (
        <div className={input.field_wrapper}>
            <input { ...otherprops }/>
        </div>
    )
}

export default FormInput;