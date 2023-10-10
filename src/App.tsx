import { FormEvent, useState } from "react"
import { AccountForm } from "./AccountForm"
import { AddressFrom } from "./AddressForm"
import { useMultistepForm } from "./useMultisteForm"
import { UserForm } from "./userFomr"

type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  stree: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string,
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  stree: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}


function App() {
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>) {
    setData(prev  => {
      return { ...prev, ...fields }
    })
  }

  const {
    steps, currentSteperIndex, step, isFirstStep, back, next, isLastStep} = 
    useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressFrom street={""} {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next() 
    alert("Successful account Creation")
    console.log(data)
  }

  return (<div style={{

    position: "relative",
    border: "1px solid black",
    backgroundColor: "white",
    padding: "2rem",
    margin: "1rem",
    borderRadius: ".5rem",
    fontFamily: "Arial",
  }}
  >
    <form onSubmit={onSubmit} >
      <div style={{
        position: "absolute",
        top: ".5rem",
        right: ".5rem",

      }}
      >
        {currentSteperIndex + 1} / {steps.length}

      </div>
      {step}
      <div style={{
        marginTop: "1rem",
        display: "flex",
        gap: ".5rem",
        justifyContent: "flex-end",
      }}
      >
        {isFirstStep && (
          <button type="button" onClick={back}>
            Back
          </button>
        )}

        <button type="submit">
          {isLastStep ? "Finish" : "Next"}
        </button>

      </div>
    </form>

  </div>
  )
}

export default App




