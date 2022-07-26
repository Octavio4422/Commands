
* {
    padding: 0;
    margin: 0;
}

# SELECTORES
 https://www.w3schools.com/cssref/css_selectors.asp

 selector {
    property: value;
 } 

 # UNIDADES

 # fijas
 px (pixels)
 cm (centimeters)
 mm (milimeters)
 pt (points)

 # relativas
 em (16px) //depends the browser and the container
 v (viewport) / vw(width) / vh(vheigth) (te size of the screen)
 % (percentage) //depends of the size of the container box

 # TEXT PROPERTIES 
 font-size
 font-family
 line-height (adds heigth to the text)
 font-weigth (grosor)

 # Boxes
 para cambiar el comportamiento hay que usar display
 display: block(elemento en bloque)
 display: inline(elemento en linea) a los elementos en linea no se les puede dar heigth ni width, a los elementos en bloque si
 display: inline-block(elemento en linea que puede adquirir propiedades en bloque)

 # box properties / box model
 background-color
 padding (distancia del contedio de la caja respecto a sus margenes)
 heigth (alto) widht(ancho)
 margin (distancia de la caja con respecto a el entorno)
 border-radius
 border: tamaño estilo(solid - dashed - double -  groove - inset - outset - ridget) color
 outline (funciona comom border pero sin ocupar un espacio real)
 box-shadow: ejex ejey desenfoque borde
 text-shadow
 transform: rotate(grados° deg)
 opacity
 overflow ( para el contenido que sobra )

 # position
 afecta el flujo html
 position: static (default)
 position: relative(conserva su espacio) (top y left tienen la prioridad)
 position: absolute(no conserva su espacio)
 position: fixed (no conserva su espacio y ademas queda fijo en la pantalla)
 position: sticky(conserva su espacio hasta una condicion determinada)
 //z index es sobre la prioridad de los elementos, solo funciona con cajas posicionadas y se muestra por encima el ultimo renderizado
 (no funciona con los elementos hijos)
 z-index: numero

 # FLEXBOX
 
 # properties for flex boxes
 display: flex
 flex direction: row / row-reverse / column / column-reverse
 flex-wrap: wrap (respeta el ancho de las cajas)
 justify-content: sobre el eje x 
 aling-content: sobre el eje y


 # properties for flex items
 aling self: flex start/end center baseline
 flex-grow: num (se reparte el espacio sobrante, tiene que tener un min width)
 flex: flex-grow flex-shrink flex-basis
 order (como el z idex pero lo afecta el felx direction)

 # GRID