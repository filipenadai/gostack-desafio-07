import { format, parseISO } from 'date-fns';

const formatDate = (value: string): string =>
  format(parseISO(value), 'dd/MM/yyyy');

export default formatDate;
