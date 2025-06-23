# Imanol-L-Solutions-Bowling
En el código manejo un juego de bolos con 10 turnos, que son los frames del juego. En cada turno simulo los tiros tirando pinos con números aleatorios entre 1 y los pinos que quedan parados.

Cada turno puede tener hasta dos tiros, a menos que tire un strike, que es cuando derribo los 10 pinos en el primer tiro. En ese caso, el turno termina inmediatamente y paso al siguiente.

Guardo los tiros de cada turno en un arreglo llamado partida, donde cada elemento es un arreglo con los tiros de ese turno. Por ejemplo, si tiro un strike, ese turno tendrá solo un tiro en el arreglo; si no, tendrá dos tiros.

Luego, cuando termino los 10 turnos, reviso el último turno porque si es strike o spare (los 10 pinos derribados en dos tiros), el juego permite tiros extra. Estos tiros extra los guardo en el arreglo partida también para que me sea más fácil calcular el puntaje después.

Para calcular el puntaje total, voy revisando cada turno:

Si el turno es un strike, sumo los 10 puntos de ese tiro más el puntaje de los siguientes dos tiros, que pueden estar en el siguiente turno o incluso en el turno después, en caso de strikes consecutivos.

Si el turno es un spare, sumo los 10 puntos de ese turno más el puntaje del primer tiro del siguiente turno.

Si no es ni strike ni spare, simplemente sumo los puntos de los dos tiros del turno.

Así me aseguro de contar bien los puntos extra que dan las reglas del boliche.

Finalmente, sumo todos estos puntajes y obtengo el puntaje total del juego.
