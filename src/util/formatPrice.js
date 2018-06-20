export default (price, locale = 'pt-BR', options = { style: 'currency', currency: 'BRL' }) => price.toLocaleString(locale, options);
