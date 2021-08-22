import { useState } from 'react'

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)
  const [requiredValue, setRequiredValue] = useState(false)
  const [invalidField, setInvalidField] = useState(false)

  const handleChange = (event: any) => {
    setValue(event.target.value)
    setRequiredValue(false)
    setInvalidField(false)
  }

  return {
    value,
    setValue,
    requiredValue,
    setRequiredValue,
    invalidField,
    setInvalidField,
    onChange: handleChange
  }
}

export default useInput
