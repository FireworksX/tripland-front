import dayjs from 'dayjs'

export const phpFormat = 'YYYY-MM-DD'

type DateFormat = string

export function formatDate(date: Date | string, format: DateFormat): string {
  return dayjs(date).format(format)
}
