import { Moment } from "moment";

export const formatDate = (date: Moment | null): string => {
  if (!date) {
    return '';
  }
  return new Date(date.toDate()).toLocaleTimeString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
