import { FormEvent } from "react"
import { AccountForm } from "./AccountForm"
import { AddressFrom } from "./AddressForm"
import { useMultistepForm } from "./useMultisteForm"
import { UserForm } from "./userFomr"

const INITIAL_DATA = {
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

  const { 
    steps, currentSteperIndex, step, isFirstStep, back, next, isLastStep 
  } = useMultistepForm([<UserForm />, <AddressFrom />, <AccountForm />, ])

  function onSubmit(e: FormEvent) {
    e.preventDefault() 
    next()
  }

  return( <div style={{

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
          {currentSteperIndex +  1} / {steps.length}
         
          </div>
          {step}
          <div style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
          >
            { isFirstStep && (
            <button type="button" onClick={back}>
               Back 
            </button> 
            )}

            <button type="submit"> 
            { isLastStep ? "Finish" : "Next" }
            </button> 

          </div>
        </form>

      </div>
  )
}

export default App
function useState(INITIAL_DATA: any): [any, any] {
  throw new Error("Function not implemented.")
}

