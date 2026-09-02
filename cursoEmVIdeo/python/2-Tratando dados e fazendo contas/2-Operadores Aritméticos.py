# - (+ adição) - 5 
mais = float(input('Adição: '));
# - (- subtração) - 5 
meno = float(input('Subtração: '));
# - (* multiplicação) - 5 
mult = float(input('Multiplicação: '));
# - (/ divisão) - 5 
divi = float(input('divisão: '));
# - (** potência ) - 5 
poten = float(input('Potência: '));
# - ( // divisão inteira) - 5 
inteir = float(input('Divisão Inteira: '));
# - (% resto da divisão) - 5 
resto = float(input('Resto da Divisão: '));

"""
Orden de precedência
1 - ()
2 - **
3 - *, /, //, %
4 - +, -
"""


print('Qual o valor adição {}'.format(5 + mais));
print('Qual o valor subtração {} '.format(2 - meno));
print('Qual o valor multiplicação {}'.format(2 * mult));
print('Qual o valor divisão {}'.format(2 / divi));
print('Qual o valor potência {}'.format(2 ** poten));
print('Qual o valor divisão inteira {}'.format(2 // inteir));
print('Qual o valor resto da divisão {}'.format(2 % resto));
