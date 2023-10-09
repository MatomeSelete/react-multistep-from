import { FormWrapper } from "./Formwrapper";

export function AccountForm() {
    return (
    <FormWrapper title="User Account">
    <label> Email </label>
    <input autoFocus required type='email'  />
    <label> Password </label>
    <input autoFocus required type='password'  />
    </FormWrapper>)
}