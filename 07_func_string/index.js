console.clear();
//Funciones con Strings

let alfabeto = "  A b C d E f G h I j K l l M n O p Q r S t U v W x Y z  ";

// podemos tratar un string en ciertas maneras como un array de caracteres

const resultados = {};

resultados.conteoLetras = alfabeto.length;
resultados.letraA = alfabeto[2];
resultados.letraZ = alfabeto[28];

//pero no podemos hacer un recorrido por ellas con foreach
//alfabeto.forEach((letra) => console.log(letra));

//si podemos hacerlo con ciclos for (for in tambien)
//for (letra in alfabeto) {console.log(alfabeto[letra])}

//los metodos slice, substring y substr sirven para extraer partes

// slice extrae con las indicaciones: desde -> hasta
//resultados.porSlice = alfabeto.slice(2,5);

// subsctring extrae con las indicaciones: desde -> hasta
//resultados.porSubstring = alfabeto.substring(2,5);

// substr extrae con las indicaciones: desde -> cuantos (esta depreciada)
//resultados.porSubstr = alfabeto.substr(2,5);


//con replace podemos reemplazar parte de la cadena , por otra
//pero solo cambia la primera ocurrencia y solo si es exacta
//resultados.conReplace = alfabeto.replace(/ /ig, '');

//para comportamientos distintos del basico, usamos banderas (flags) que ayudan:
// /i para que no tenga en cuenta las mayus y minusculas
// /g para que sean todas las ocurrencias encontradas


//Cambio de Mayusculas y Minusculas

//resultados.aMayusculas = alfabeto.toUpperCase();
//resultados.aMinusculas = alfabeto.toLowerCase();

// Trim re,corta los espacios en blanco
//resultados.trimeado = alfabeto.trim();

console.log('alfabeto:' + alfabeto);

for (const llave in resultados) {
    console.log(`${llave}: ${resultados[llave]} `);
}