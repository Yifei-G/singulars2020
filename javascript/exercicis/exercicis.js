console.log("JavaScript carregat des d'un document .js dins el <body>");

document.write("<p>Això escriu dins el body (.js extern)</p>");

console.log("Aquí començen els exercicis:");



//* ------------------------ Variables --------------------------

// exercici 1: intercanvi de variables

console.log("exercici 1: intercanvi de variables");

var primer, segon;

primer = 1;

segon = 2;

// TODO: aquí el teu codi

primer = 2;
segon = 1;

console.log(`%c ${primer} ${segon}`,'color: green');  // ha de mostrar 2 1

console.log('\n');


//* ------------------------- Funcions --------------------------

// exercici 2: defineix una funció psicologo() que et pregunti "Com estàs?" al executar-la

console.log("exercici 2: defineix una funció psicologo() que et pregunti 'Com estàs?' al executar-la");

// TODO: aquí la definició de psicolog() 
function psicologo(){
	console.log("%c ¿Como estas?",'color: green')
}
psicologo();

console.log('\n');

// exercici 3: defineix una funció pregunta() que et pregunti "T'agrada la pizza?"
// quan li introduim com a paràmentre "la pizza"

console.log('exercici 3: defineix una funció pregunta() que et pregunti "T agrada la pizza?"');
// TODO: aquí la definició de pregunta() 
function pregunta(comida){
	console.log(`%c ¿Te gusta${comida}?`,'color: green');
}
pregunta("la pizza");

console.log('\n');

// exercici 4: defineix una funció pregunta2() que et retorni "T'agrada la pizza"
// quan li introduim com a paràmentre "la pizza"

console.log("exercici 4: defineix una funció pregunta2() que et retorni T agrada la pizza");
// TODO: aquí la definició de pregunta2() 

function pregunta2(comida){
	return `¿Te gusta${comida}`;
}

console.log(`%c ${pregunta2("la pizza")} con piña?`,'color: green');

console.log('\n');


// exercici 5: defineix una funció metresCubicsALitres() que passi metres cúbics a litres i retorni el resultat
// i una altra mostrarSolució() que usi la primera per mostrar per la consola "X metres cúbics són Y litres"

console.log(`exercici 5: defineix una funció metresCubicsALitres() que passi metres cúbics a litres i retorni el resultat
 i una altra mostrarSolució() que usi la primera per mostrar per la consola "X metres cúbics són Y litres"`)

// TODO: aquí les definicions de metresCubicsALitres() i mostrarSolució() 

var m3 = 8;

function metrosCubicosALitros(mUnit){
	return mUnit * 1000;
}

function mostrarSolucion(unit){
	console.log(`%c ${unit} metero cubicos son ${metrosCubicosALitros(unit)} litros`,'color: green');
}

mostrarSolucion(m3)

console.log('\n');

// exercici 6: defineix dues funcions afegirDiners() i gastarDiners() que sumi/resti a una variable externa el valor
// indicat al paràmetre i mostri a la consola la quantitat actual de diners

console.log(`exercici 6: defineix dues funcions afegirDiners() i gastarDiners() que sumi/resti a una variable externa el valor
indicat al paràmetre i mostri a la consola la quantitat actual de diners`)

var diners = 0;

// TODO: definició de afegirDiners() i gastarDiners() 
function afegirDiners(importe){
	diners += importe;
}

function gastarDiners(importe){
	diners -= importe;
}

afegirDiners(20);
gastarDiners(15);
afegirDiners(40);
gastarDiners(25);

console.log(`%c ${diners}`,'color: green'); // això retornarà 20

console.log('\n');


//* ------------------------------ Condicionals --------------------------------

// exercici 7: fes un diàleg que et demani la talla de samarreta que vols comprar (S, M, L, XL) i et digui per la consola
// quina talla has sel·leccionat i t'avisi si sel·lecciones una talla que no és vàlida


console.log(`exercici 7: fes un diàleg que et demani la talla de samarreta que vols comprar (S, M, L, XL) i et digui per la consola
quina talla has sel·leccionat i t'avisi si sel·lecciones una talla que no és vàlida`)

var talla = prompt("Exercici 7 ¿Que talla quieres comprar: S, M L o XL?");  // TODO: editar el missatge del prompt()

// TODO: estructura condicional que digui per la consola la talla escollida
var size = ["S", "M", "L" , "XL"];

//prevent user click cancel in the prompt (null will be returned)
if(talla && size.includes(talla.toUpperCase())){
	alert(`La talla seleccionada es ${talla}`);
	console.log(`%c La talla seleccionada es ${talla}`,'color: green');
}else{
	alert("La talla seleccionada no es valida...");
	console.log("%c La talla seleccionada no es valida...",'color: red');
}

console.log('\n');

// exercici 8: defineix una funció amb modes que pugui calcular l'area o el perímetre d'un cercle i et faci console.log()
// de la cosa calculada

console.log(`exercici 8: defineix una funció amb modes que pugui calcular l'area o el perímetre d'un cercle i et faci console.log()
de la cosa calculada`)
var radi = 5;
var mode = "P"; // "P" pel perímentre o "A" per l'àrea

// TODO: defineix la funció cercle amb dos modes
function cercle(radio, modo){
	if(modo == "P"){
		console.log(`%c ${2 * Math.PI * radio}`,'color:green');
	}
	else if(modo == "A"){
		console.log(`%c ${Math.PI * radio * radio}`,'color:green');
	}
}

cercle(radi, mode);
console.log('\n');



// exercici 9: defineix una funció que calculi l'àrea i el perímetre d'un polígon regular de N costats (3, 4, 5, 6...)

console.log(`exercici 9: defineix una funció que calculi l'àrea i el perímetre d'un polígon regular de N costats (3, 4, 5, 6...)`);

var costat = 3;
var costats = 5;

// TODO: defineix la funció poligon()
function poligon(L, N){
	pMetre = L * N;

	alpha = 360 / N;
	//change degree to rad
	//Math.tan() accepts degrees in rad.
	alphaRad = (alpha * Math.PI) / 180;
	// area = numerador / denominador;
	area = (N * L * L) / (4 * Math.tan(alphaRad/2));
	console.log(`%c El poligono de lados ${N} con longitud de ${L} tiene el pelimetro ${pMetre} y area de ${area}`,'color:green');
}

poligon(costat, costats);
console.log('\n');

// exercici 10: defineix una funció que et pregunti per prompt() quin item vols (samarreta, pantaló i barret), si és barret
// que et faci sel·leccionar el tipus (copa, pirata, gorra, llana), si és samarreta o pantaló que et faci sel·leccionar el color
// (pel color no hi ha opcions, és lliure) i et faci sel·leccionar la talla (S, M, L, XL). La funció retorna una cadena
// amb tota la informació per pintar-la en un console.log()


console.log(` exercici 10: defineix una funció que et pregunti per prompt() quin item vols (samarreta, pantaló i barret), si és barret
que et faci sel·leccionar el tipus (copa, pirata, gorra, llana), si és samarreta o pantaló que et faci sel·leccionar el color
 (pel color no hi ha opcions, és lliure) i et faci sel·leccionar la talla (S, M, L, XL). La funció retorna una cadena
 amb tota la informació per pintar-la en un console.log()`);


// TODO: defineix la funció botiga()
function botiga(){
	var shoppingOption = ["camiseta", "pantalon", "sombrero"];
	var userOption = prompt("Ejercicio 10 ¿Que quieres comprar: camiseta, pantalon o sombrero?");

	if (shoppingOption.includes(userOption)){
		if(userOption.toLowerCase() == "sombrero"){
			var hatType = ["copa" , "pirata","gorra","lana"];
			var type = prompt("¿Que tipo de sombrero quieres: copa, pirata, gorra, lana?");
			if(hatType.includes(type)){
				alert(`gracias por comprar ${type} ${userOption}`);
				return `gracias por comprar ${type} ${userOption}`;
			}
			else{
				alert("Opsss.. has escrito una opción invalida para el tipo de sombrero");
				return 'Opsss.. has escrito una opción invalida para el tipo de sombrero';
			}
		}
		else{
			var size = ["S", "M", "L" , "XL"];
			var userSize = prompt("Que talla quieres: S, M, L, XL?");
			if (size.includes(userSize.toUpperCase())){
				var userColor = prompt("¿Que color quieres?")
				alert(`gracias por comprar ${userOption} del color ${userColor} con talla ${userSize}`);
				return `gracias por comprar ${userOption} del color ${userColor} con talla ${userSize}`;
			}
			else{
				alert("Opsss.. has escrito una opción invalida de la talla");
				return 'Opsss.. has escrito una opción invalida invalida de la talla';
			}
		}
	}
	else{
		alert("Opsss.. has escrito una opción invalida");
		return 'Opsss.. has escrito una opción invalida';
	}


}


var carrito = botiga();

console.log('\n');
if(carrito.includes('Opsss..')){
	console.log(`%c ${carrito}`,'color:red');
}
else{
	console.log(`%c ${carrito}`,'color:green');
}
  // això tornarà "Has demanat un barret de pirata (talla L)"
console.log('\n');


//* ---------------------------- Mètodes numbers -------------------------------

// exercici 11: defineix una funció calculadora que agafi com a paràmentres una operació i un o dos números 
// (que poden ser sencers, decimals o fraccions) i faci la operació (+, -, *, /, potència, arrels quadrades i qúbiques)

// TODO: defineix la funció calculadora() (reutilitza la que vam fer a classe fa uns dies)

//calculadora();


// exercici 12: a partir de tres números, calcula si poden ser els tres costats d'un triangle rectangle

console.log("exercici 12: a partir de tres números, calcula si poden ser els tres costats d'un triangle rectangle");
var c1, c2, c3;

c1 = 3;
c2 = 4;
c3 = 5;


function triangleRectangle(lado1, lado2, lado3){
	var lados = [lado1, lado2, lado3];
	lados.sort(function(a,b){
		return a - b;
	});

	//hipotenusa siempre es el numero mas grande de la lista;
	var hipotenusa = lados[2];
	var cateto1 = lados[0];
	var cateto2 = lados[1];

	// para ser un T.rectangulo tiene que cumplir lo siguiente:
	// c * c = a * a + b * b
	return (Math.pow(hipotenusa,2) == Math.pow(cateto1,2) + Math.pow(cateto2,2));

}

console.log(triangleRectangle(c1,c2,c3));  // ha de tornar true

c1 = 4;
c2 = 5;
c3 = 6;

console.log(triangleRectangle(c1,c2,c3));  // ha de tornar false
console.log('\n');

// TODO: defineix la funció triangleRectangle()


// exercici 13: a partir de dos catets, calcula la hipotenusa i els angles d'un triangle rectangle

console.log(`exercici 13: a partir de dos catets, calcula la hipotenusa i els angles d'un triangle rectangle`);
c1 = 30;
c2 = 40;

// TODO: defineix la funció calculaHipotenusa()

// TODO: defineix la funció calculaAngles()
function calcularHipotenusa(cateto1, cateto2){
	return Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2));
}

function calcularAngulos (cateto1, cateto2){
	var catetoLargo = Math.max(cateto1,cateto2);
	var catetoCorto = Math.min(cateto1,cateto2);
	var alphaRad = Math.atan(catetoLargo/catetoCorto);
	var alpha = (alphaRad * 180)/ Math.PI; 
	var alpha2 = 90 - alpha;

	return `el angulo grande es ${alpha}  y el angulo menor es ${alpha2}`;

}

console.log(`%cLa hipotenusa es: ${calcularHipotenusa(c1,c2)}`, 'color:green');  // ha de donar 50

console.log(`%c${calcularAngulos(c1,c2)}`, 'color:green');      // ha de donar 30º i 60º
console.log('\n');


//* ---------------------------- Mètodes strings -------------------------------

//! ⚠️ en aquests exercicis no s'hi val usar el mètode .split() a no ser que s'indiqui el contrari ⚠️

// exercici 14: recrea la funció parseInt() de manera que agafi els números encara que hi hagi lletres abans
// p.e: "hola89234" ha de tornar "89234", "43'35465adeu" ha de tornar "43", "amor45.9odi" ha de tornar "45"

// TODO: defineix la funció convertirEnEnter()

console.log(convertirEnEnter("hola89234"));     // ha de tornar 89234
console.log(convertirEnEnter("43.35465adeu"));  // ha de tornar 43
console.log(convertirEnEnter("amor45.9odi"));   // ha de tornar 45


// exercici 15: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans
// i accepti com a separador decimal els símbols ",", "." i "'"
// p.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9"

// TODO: defineix la funció convertirEnDecimal()

console.log(convertirEnEnter("hola89'234"));     // ha de tornar 89.234
console.log(convertirEnEnter("43'35adeu"));      // ha de tornar 43.35
console.log(convertirEnEnter("amor45.9odi"));    // ha de tornar 45.9


// exercici 16: recrea la funció "valor absolut", que torna el mateix número si és positiu i el mateix número
// canviat de signe si és negatiu (2 -> 2; -3.4 -> 3.4). No s'hi val usar Math.abs()

// TODO: defineix la funció valorAbsolut()

console.log(valorAbsolut(-3.14));        // ha de tornar 3.14
console.log(valorAbsolut(0));            // ha de tornar 0
console.log(valorAbsolut(1234.5678));    // ha de tornar 1234.5678
console.log(valorAbsolut(-1234.5678));   // ha de tornar 1234.5678


// exercici 17: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes 
// de puntuació)

var lletres = "abcdef";

console.log(lletraRandom(lletres));     // torna una lletra entre la a i la f

// TODO defineix la funció lletraRandom()


// exercici 18: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni
// en un nou string separades per espais

var text = "En un lugar de La Mancha de cuyo nombre no quiero acordarme. Què tal, Manel?   Patata"

var paraules = separarParaules(text);

// TODO: defineix la funció separarParaules()

console.log(paraules);


// exercici 19: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (podeu cridar
// la funció separarParaules() dins d'aquesta funció)

console.log(paraulaRandom(text));

// TODO defineix la funció paraulaRandom()


// exercici 20: crea una funció que agafi una data DD/MM per prompt() i et retorni el teu signe de l'horòscop i una 
// predicció del que et passarà durant el dia

// TODO deifineix la funció horoscop()



//* ------------------------------ Bucle for ------------------------------------



//* ----------------------------- Bucle while -----------------------------------



//* ---------------------------- Mètodes arrays ---------------------------------