import dayjs from 'dayjs'

export const phpFormat = 'YYYY-MM-DD'

export type DateFormat = string
export type DateInput = Date | string

export function formatDate(date: DateInput, format: DateFormat): string {
  return dayjs(date).format(format)
}
