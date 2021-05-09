import React, { FC } from 'react'
import CalendarPlugin, { OnChangeDateCallback } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import styled from 'styled-components'

interface DatePickerProps {
  value: Date | Date[] | null
  onChange?: OnChangeDateCallback
  maxDate?: Date
  minDate?: Date
  className?: string
}

const Root = styled.div`
  .react-calendar {
    width: 100%;
    font-family: var(--font-common);
    background: transparent;
    line-height: 14px;
    border: none;

    abbr {
      text-decoration: none;
    }
  }
`

const DatePicker: FC<DatePickerProps> = ({ className, maxDate, minDate, value, onChange }) => {
  return (
    <Root className={className}>
      <CalendarPlugin value={value} maxDate={maxDate} minDate={minDate} onChange={onChange} />
    </Root>
  )
}

export default DatePicker
