import numeral from 'numeral';

numeral.register('locale', 'pt', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  currency: {
    symbol: 'R$',
  },
});
numeral.locale('pt');

export const formatPrice = price => numeral(price).format('$ 0,0.00');
