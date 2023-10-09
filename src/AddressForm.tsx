import { FormWrapper } from "./Formwrapper";

export function AddressFrom() {
    return (
    <FormWrapper title="User Address">
        <label> Street </label>
        <input autoFocus required type='text'  />
        <label> City </label>
        <input autoFocus required type='text'  />
        <label> State </label>
        <input required type='text'  />
        <label> Zip code </label>
        <input required  type='text'  />

    </FormWrapper>)
}