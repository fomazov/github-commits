import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const Search = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)

  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return
    }
    if (value.trim()) {
      alert.hide()
      console.log('Filter with: ', value)
    } else {
      alert.show('Enter part of commit description!')
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter part of commit description..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}
