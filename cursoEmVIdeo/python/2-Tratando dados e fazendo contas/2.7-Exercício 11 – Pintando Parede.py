largura = float(input('Lagura da parede: '));
altura = float(input('Altura da parede: '));
area = largura * altura;
tinta = area / 2

print('Sua parede tem a dimensão de {}X{} e sua área é de {:.2f}m². \n Para pintar essa parede, você precisará de {:.2f} litros  de tinta.'.format(largura, altura, area, tinta));