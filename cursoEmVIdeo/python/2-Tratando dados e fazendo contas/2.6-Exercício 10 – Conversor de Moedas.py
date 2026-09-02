moeda = float(input('Quanto dinheiro você tem na carteira? R$'));
dolar = moeda / 5.18;

print('Com R${} você pode comprar US${:.2f}'.format(moeda, dolar));