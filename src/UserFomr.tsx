import { FormWrapper } from "./Formwrapper";

export function UserForm() {
    return (
        <FormWrapper title="User details">
        <label> First name </label>
        <input autoFocus required type='text'  />
        <label> Last name </label>
        <input autoFocus required type='text'  />
        <label> Age </label>
        <input required min={1} type='number'  />

        </FormWrapper>
    )

}