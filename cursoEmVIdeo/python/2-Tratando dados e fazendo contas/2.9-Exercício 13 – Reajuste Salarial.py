funcionario = float(input('Qual o salário do funcionário R$'));
aumento = funcionario + (funcionario * 15 / 100 );

print('O funcionário que ganhava R${:.2f}, com 15% de aumento, passa a receber R${:.2f}'.format(funcionario, aumento ));
