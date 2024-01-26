import { useState } from 'react'

import { Label, PasswordField, TextField } from '@redwoodjs/forms'

import Icon from '../Icon/Icon'

const ShowHidePassword = ({ label, name, ...rest }) => {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false)

  const handleClick = () => {
    setIsPasswordShowing((prevValue) => !prevValue)
  }

  return (
    <div className="field relative">
      <Label name={name}>{label}</Label>
      {isPasswordShowing ? (
        <TextField name={name} placeholder="" {...rest} id={name} />
      ) : (
        <PasswordField name={name} placeholder="" {...rest} id={name} />
      )}
      <button className="absolute right-6 top-8" onClick={handleClick}>
        <Icon id={isPasswordShowing ? 'eyeOpen' : 'eyeClosed'} size={32} />
      </button>
    </div>
  )
}

export default ShowHidePassword
