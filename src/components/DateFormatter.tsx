import React, { FC } from 'react'
import { DateFormat, DateInput, formatDate, phpFormat } from '~/utils/dateUtils'

interface DateFormatterProps {
  value?: DateInput
  format?: DateFormat
}

const DateFormatter: FC<DateFormatterProps> = ({ value, format = phpFormat }) => {
  return <>{value && formatDate(value, format)}</>
}

export default DateFormatter
