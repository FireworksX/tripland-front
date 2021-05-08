import React, { FC } from 'react'
import CalendarPlugin from 'react-calendar'
import styled from 'styled-components'

interface DatePickerProps {
  value: Date
  onChange: (date: Date) => any
  className?: string
}

const Root = styled.div``

const DatePicker: FC<DatePickerProps> = ({ className, value, onChange }) => {
  return (
    <Root className={className}>
      <CalendarPlugin value={value} onChange={onChange} />
    </Root>
  )
}

export default DatePicker
