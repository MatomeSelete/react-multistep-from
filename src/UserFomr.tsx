export function UserForm() {
    return (
        <>
        <label> First name </label>
        <input autoFocus required type='text'  />
        <label> Last name </label>
        <input autoFocus required type='text'  />
        <label> Age </label>
        <input required min={1} type='number'  />

        </>
    )

}