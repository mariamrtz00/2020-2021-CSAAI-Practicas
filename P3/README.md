 # Práctica 3
Como se dice en las especificaciones, el juego comienza en el momento que pulsamos la tecla space, con ese click la bola empieza su movimiento horizontal y vertical hacia arriba buscando chocar con los ladrillos, colocados como una matriz.
Cuando la pelota impacta con alguno de estos ladrillos, este se elimina y la pelota sigue su curso con un cambio de sentido.
Cada vez que se elimina un ladrillo la puntuación score suma 1, de modo que la puntuación máxima en mi juego es de 60 ladrillos = 60 puntos, cuando se alcance este número, aparecerá una ventana emergente notificandonos que hemos ganado.
También está la posibilidad de perder el juego, esto pasa cuando nuestro contador de vidas inicializado en 3, llega a 0, cada vez que no logremos controlar la pelota con la raqueta, es decir, cada vez que la pelota caiga 'al suelo' perderemos una vida. Igual que antes, cuando se acaben los 3 puntos, aparecerá una ventana emergente que nos avise de que hemos perdido.
Ambos contadores estarán situados en la parte superior del canvas.

La mejora que he implementado es la siguiente:

-Cada vez que la pelota colisiona con un ladrillo, cada vez que se pierde vida, y cuando se pierden las 3 vidas restantes, aparece un sonido (distinto para cada caso)


