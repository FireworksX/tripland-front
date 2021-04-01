import React from 'react'
import { NextPage } from 'next'

interface ErrorPageProps {
  statusCode?: number
}

const Error: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return (
    <div>
      error
      {statusCode}
    </div>
  )
}

Error.getInitialProps = async ({ res, err }) => {
  let statusCode

  if (res) {
    ;({ statusCode } = res)
  } else if (err) {
    ;({ statusCode } = err)
  }

  return {
    statusCode
  }
}

export default Error
