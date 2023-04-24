import React from 'react'
interface ErrorProps {
  statusCode?: number
  message?: string
  error?: string
}

const Error = ({ statusCode, message, error }: ErrorProps) => {
  return (
    <div className="error">
      <div className="error__wrapper">
        <div className="error__message">
          Error {!!statusCode} {message} {!!error}
        </div>
      </div>
    </div>
  )
}

export default Error
