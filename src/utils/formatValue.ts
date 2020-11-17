const formatValue = (number: number): string => {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
};

export default formatValue;
