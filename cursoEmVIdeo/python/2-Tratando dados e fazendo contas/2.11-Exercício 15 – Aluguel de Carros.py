dia = float(input('Quantos dias alugados? '));
km = float(input('Quantos KM rodados? '));
paga = (dia * 60) + (km * 0.15) ;
print('O total a pagar é de R${}'.format(paga));