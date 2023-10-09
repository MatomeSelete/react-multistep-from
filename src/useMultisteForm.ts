import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {

    const [currentSteperIndex, setCurrentStepIndex] = useState(0);

    function next() {
        setCurrentStepIndex(i => {
            if (i >= steps.length -1 ) return i
            return i + 1
        })
    }

    function back() {
        setCurrentStepIndex(i => {
            if (i <= 0 ) return i
            return i - 1
        })
    }

    function goTo(index: number) {
        setCurrentStepIndex(index)
    }

    return {
        currentSteperIndex,
        step: steps[currentSteperIndex],
        steps,
        isFirstStep: currentSteperIndex !== 0,
        goTo,
        next,
        back,
    }
}