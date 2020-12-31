console.log("JavaScript carregat des d'un document .js dins el <body>");

document.write("<p>Això escriu dins el body (.js extern)</p>");

console.log("------------- INICI EXERCICIS -------------");



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
	return `¿Te gusta ${comida}`;
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
// (que poden ser sencers, decimals o fraccions) i faci la operació (+, -, *, /, **, sqrt i cbrt)

// TODO: defineix la funció calculadora() (reutilitza la que vam fer a classe fa uns dies)

console.log(`exercici 11: defineix una funció calculadora que agafi com a paràmentres una operació i un o dos números 
// (que poden ser sencers, decimals o fraccions) i faci la operació (+, -, *, /, **, sqrt i cbrt)`)

function calculadora(){

}

//calculadora();


// exercici 12: a partir de tres números, calcula si poden ser els tres costats d'un triangle rectangle aplicant el
// teorema de Pitàgores (a**2 == b**2 + c**2 és "true" pels triangles rectangles quan "a" és el seu costat més llarg)

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

	//convert angle from rad to degree.
	var alpha = (alphaRad * 180)/ Math.PI; 
	var alpha2 = 90 - alpha;

	return `el angulo grande es ${Math.round((alpha + Number.EPSILON) * 100) /100}  y el angulo menor es ${Math.round((alpha2 + Number.EPSILON) *100) / 100}`;

}

console.log(`%c${calcularAngulos(c1,c2)}`, 'color:green');       // ha de donar 53.13º i 36.87º
console.log('\n');


//* ---------------------------- Mètodes strings -------------------------------

//! ⚠️ en aquests exercicis no s'hi val usar el mètode .split() a no ser que s'indiqui el contrari ⚠️

// exercici 14: recrea la funció parseInt() de manera que agafi els números encara que hi hagi lletres abans
// p.e: "hola89234" ha de tornar "89234", "43'35465adeu" ha de tornar "43", "amor45.9odi" ha de tornar "45"

console.log(`exercici 14: recrea la funció parseInt() de manera que agafi els números encara que hi hagi lletres abans
// p.e: "hola89234" ha de tornar "89234", "43'35465adeu" ha de tornar "43", "amor45.9odi" ha de tornar "45"`);
// TODO: defineix la funció convertirEnEnter()

function convertirEnEnter(input){
	var result = "";
	var nextNAN = false;

	for (let char of input){
		if(isNaN(char)){
			if(nextNAN){break;}
			else{continue;}
		}
		else{
			result += char;
			nextNAN = true

		}
	}
	return result;
}

console.log(`%c${convertirEnEnter("hola89234")}`, 'color:green');     // ha de tornar 89234
console.log(`%c${convertirEnEnter("43.35465adeu")}`,'color:green');  // ha de tornar 43
console.log(`%c${convertirEnEnter("amor45.9odi")}`,'color:green');   // ha de tornar 45
console.log('\n');


// exercici 15: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans
// i accepti com a separador decimal els símbols ",", "." i "'"
// p.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9"

// TODO: defineix la funció convertirEnDecimal()

console.log(`exercici 15: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans
i accepti com a separador decimal els símbols ",", "." i "'"
p.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9"`)

function convertirEnDecimal(input){
	var result = "";
	var nextNAN = false;
	var separator = ["," , ", " , ".", "'"];

	for (let char of input){
		if(isNaN(char)){
			if(nextNAN){
				if(separator.includes(char)){
					result += ".";
					continue;
				}
					break;
			}
			else{continue;}
		}
		else{
			result += char;
			nextNAN = true

		}
	}
	return result;
}

console.log(`%c${convertirEnDecimal("hola89'234")}`, 'color:green');     // ha de tornar 89.234
console.log(`%c${convertirEnDecimal("43'35adeu")}`,  'color:green');      // ha de tornar 43.35
console.log(`%c${convertirEnDecimal("amor45.9odi")}`,'color:green');    // ha de tornar 45.9
console.log('\n');


// exercici 16: recrea la funció "valor absolut", que torna el mateix número si és positiu i el mateix número
// canviat de signe si és negatiu (2 -> 2; -3.4 -> 3.4). No s'hi val usar Math.abs()

console.log(`exercici 16: recrea la funció "valor absolut", que torna el mateix número si és positiu i el mateix número
canviat de signe si és negatiu (2 -> 2; -3.4 -> 3.4). No s'hi val usar Math.abs()`)

// TODO: defineix la funció valorAbsolut()
function valorAbsoluto(input){
	if(input < 0){
		return 0 - input;
	}
	return input
}

console.log(valorAbsoluto(-3.14));        // ha de tornar 3.14
console.log(valorAbsoluto(0));            // ha de tornar 0
console.log(valorAbsoluto(1234.5678));    // ha de tornar 1234.5678
console.log(valorAbsoluto(-1234.5678));   // ha de tornar 1234.5678
console.log('\n');

// exercici 17: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes 
// de puntuació)

console.log(`exercici 17: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes 
de puntuació)`);

var lletres = "abcafwr!$£%^$^!*&(!()gheht!$£%^$^!*&(!()ewrwdbfewhtjrhcd!$£%^$^!*&(!()ef";



// TODO defineix la funció lletraRandom()
function lletraRandom(input){
	rndPosition = Math.floor(Math.random() * Math.floor(input.length));
	rndChar = input[rndPosition];
	//if the char is a letter
	//return it
	if(rndChar.toLowerCase() != rndChar.toUpperCase()){
		return console.log(`%c${input[rndPosition]}`,'color:green');
	}
	//recall the function to get a new random position of the string
	lletraRandom(lletres);
}

lletraRandom(lletres)   // torna una lletra entre la a i la f
console.log('\n');


// exercici 18: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni
// en un nou string separades per espais
console.log(`exercici 18: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni
en un nou string separades per espais`)

var text = "En un lugar de La Mancha de cuyo nombre no quiero acordarme. Què tal, Manel?   Patata";

// TODO: defineix la funció separarParaules()

function separarParaules(input){
	var word = "";
	var result = [];
	for (let char of input){
		//catching the word letter by letter
		if(char.toLowerCase() != char.toUpperCase()){
			word += char;
		}
		//if the char is a empty space
		//then we have a complete word
		//push it to a list
		//reset the word variable
		else if((char ===" ") && (word != "")) {
			result.push(word);
			word = "";
		}
	}
	result.push(word);
	//convert the list to string, separating each word by empty space
	return result.join(" ");
}

var paraules = separarParaules(text);
console.log(`%c${paraules}`, 'color:green');
console.log('\n');

// exercici 19: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (podeu cridar
// la funció separarParaules() dins d'aquesta funció)
console.log(`exercici 19: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (podeu cridar
la funció separarParaules() dins d'aquesta funció)`)


// TODO defineix la funció paraulaRandom()

function paraulaRandom(text){
	var textList = separarParaules(text).split(" ");
	var rndPosition = Math.floor(Math.random() * Math.floor(textList.length));
	return textList[rndPosition];
}

console.log(`%c${paraulaRandom(text)}`,'color:green');
console.log('\n');

// exercici 20: crea una funció que agafi una data DD/MM per prompt() i et retorni el teu signe de l'horòscop i una 
// predicció del que et passarà durant el dia

console.log(`exercici 20: crea una funció que agafi una data DD/MM per prompt() i et retorni el teu signe de l'horòscop i una 
predicció del que et passarà durant el dia`)

// TODO deifineix la funció horoscop()
function horoscopoEneroMarzo(mes, dia){
	if(mes == 1){
		if(dia <= 20){
			return "Capricornio: Los Capricornio tienen una gran necesidad de sentirse aceptados e incluidos y mantener un buen estatus social."
		}else{
			return "Acuario: Los Acuario son los más populares del patio y tienen un don de gentes natural que les hace conquistar cualquier evento social. ";
		}
	}
	else if(mes == 2){
		if(dia <= 19){
			return "Acuario: Los Acuario son los más populares del patio y tienen un don de gentes natural que les hace conquistar cualquier evento social. "
		}
		else{
			return "Piscis: Los Piscis son idealistas y soñadores de nacimiento. Dados de lleno al mundo de la imaginación, sus deseos suelen ser totalmente imposibles y esto les puede llegar a causar una gran frustración con el mundo real.";
		}
	}
	else if(mes == 3){
		if(dia <= 20){
			return "Piscis: Los Piscis son idealistas y soñadores de nacimiento. Dados de lleno al mundo de la imaginación, sus deseos suelen ser totalmente imposibles y esto les puede llegar a causar una gran frustración con el mundo real.";
		}
		else{
			return "Aries: Los Aries son, de todos los signos, los que más cómodos se sienten comenzando nuevos proyectos.";
		}
	}
}

function horoscopoAbrilJunio(mes, dia){
	if(mes == 4){
		if(dia <= 20){
			return "Aries: Los Aries son, de todos los signos, los que más cómodos se sienten comenzando nuevos proyectos.";
		}
		else{
			return "Tauro: Los nacidos bajo este signo no se andan con chiquitas, lo suyo no son las aventuras y los romances breves: sólo se conformarán con su alma gemela.";
		}
	}
	if(mes == 5){
		if(dia <= 21){
			return "Tauro: Los nacidos bajo este signo no se andan con chiquitas, lo suyo no son las aventuras y los romances breves: sólo se conformarán con su alma gemela.";
		}
		else{
			return "Geminis: Las relaciones pueden llegar a ser muy complicadas para un Géminis. Curiosamente, siendo personas que experimentan cambios constantemente no se sienten muy cómodos cuando sus compañeros evolucionan y toman perspectivas diferentes ante la vida.";
		}
	}
	if(mes == 6){
		if(dia <= 21){
			return "Geminis: Las relaciones pueden llegar a ser muy complicadas para un Géminis. Curiosamente, siendo personas que experimentan cambios constantemente no se sienten muy cómodos cuando sus compañeros evolucionan y toman perspectivas diferentes ante la vida.";
		}
		else{
			return "Cancer: Los Cáncer tienen una gran tendencia a vivir en el pasado y esto se acentúa aún más cuando están solteros aunque, por el contrario, cuando están en una relación sana, se suelen concentrar más en el futuro próximo y se esfuerzan por cumplir todas sus metas.";
		}
	}

}

function horoscopoJulioSeptiembre(mes, dia){
	if(mes == 7){
		if(dia <= 23){
			return "Cancer: Los Cáncer tienen una gran tendencia a vivir en el pasado y esto se acentúa aún más cuando están solteros aunque, por el contrario, cuando están en una relación sana, se suelen concentrar más en el futuro próximo y se esfuerzan por cumplir todas sus metas.";
		}
		else{
			return "Leo: Se dice que los Leo son los más fáciles de reconocer a simple vista por tener un carácter muy marcado, y suele ser verdad. Cuando un Leo entra en la sala, todos los ojos se centran en él.";
		}
	}

	if(mes == 8){
		if(dia <= 24){
			return "Leo: Se dice que los Leo son los más fáciles de reconocer a simple vista por tener un carácter muy marcado, y suele ser verdad. Cuando un Leo entra en la sala, todos los ojos se centran en él."
		}
		else{
			return "Virgo: Una de las principales características de los nacidos bajo este signo es su forma lógica y estructurada de hacer las cosas. "
		}
	}

	if(mes == 9){
		if(dia <= 23){
			return "Virgo: Una de las principales características de los nacidos bajo este signo es su forma lógica y estructurada de hacer las cosas. ";
		}
		else{
			return "Libra: La característica más inherente a los Libra es que son personas a las que les cuesta muchísimo tomar decisiones sea cual sea la magnitud de estas.";
		}
	}

}

function horoscopoOctureDiciembre(mes, dia){

	if(mes == 10){
		if(dia <= 23){
			return "Libra: La característica más inherente a los Libra es que son personas a las que les cuesta muchísimo tomar decisiones sea cual sea la magnitud de estas.";
		}
		else{
			return "Escorpio: No hay nada ni nadie más intenso y curioso que un Escorpio. Son personas muy introvertidas, reflexivas y, a menudo, existencialistas.";
		}
	}
	

	if(mes == 11){
		if(dia <= 22){
			return "Escorpio: No hay nada ni nadie más intenso y curioso que un Escorpio. Son personas muy introvertidas, reflexivas y, a menudo, existencialistas.";
		}
		else{
			return "Sagitario: Los Sagitario tienen una gran confianza en sí mismos y a menudo son el alma de la fiesta.";
		}
	}

	if(mes == 12){
		if(dia <= 21){
			return "Sagitario: Los Sagitario tienen una gran confianza en sí mismos y a menudo son el alma de la fiesta.";
		}
		else{
			return "Capricornio: Los Capricornio tienen una gran necesidad de sentirse aceptados e incluidos y mantener un buen estatus social.";
		}
	}

}


function horoscopo(){

	userBirthDate = prompt("Escribe tu fecha de nacimiento: DD/MM ");
	//if user click Ok without any dates, or click cancel directly
	if(userBirthDate){
		//convert dia and mes in number instead of string
		//number are easier to manipulate than string
		var dia = parseInt(userBirthDate.split("/")[0], 10);
		var mes = parseInt(userBirthDate.split("/")[1], 10);
		switch(mes){
			case 1:
			case 2:
			case 3:
			console.log(`%c${horoscopoEneroMarzo(mes, dia)}`,'color:green');
			break;
			case 4:
			case 5:
			case 6:
			console.log(`%c${horoscopoAbrilJunio(mes, dia)}`,'color:green');
			break;
			case 7:
			case 8:
			case 9:
			console.log(`%c${horoscopoJulioSeptiembre(mes,dia)}`,'color:green');
			break;
			case 10:
			case 11:
			case 12:
			console.log(`%c${horoscopoOctureDiciembre(mes,dia)}`,'color:green');
			break;
			default:
			alert("Opsss.. you have entered an invalid date/date format, please try again!")
			console.log(`%c Opsss.. you have entered an invalid date/date format, please try again!`,'color:red');
		}
	}
	else{
		alert("Opsss.. please enter a date!!!")
		console.log(`%c Opsss..please enter a date!!!`,'color:red');
	}
	
}

horoscopo();
console.log('\n');

//* ------------------------------ Bucle for ------------------------------------

// exercici 21: fes un bucle que escrigui 10 vegades a la consola alternant un color i un altre

// TODO el codi aquí
console.log(`exercici 21: fes un bucle que escrigui 10 vegades a la consola alternant un color i un altre`);

for(i=0;i<10;i++){
	if(i % 2 == 0){
		console.log("%c purple", 'color:purple');
	}
	else{
		console.log('%c blue', 'color:blue');
	}
}
console.log('\n');

// exercici 22: fes un bucle que escrigui 20 números i escrigui al seu costat: "hola" si és múltiple de 2, "adeu" si
// és múltiple de 3 i "què tal? si és múltiple de 5"

// TODO el codi aquí
console.log(`exercici 22: fes un bucle que escrigui 20 números i escrigui al seu costat: "hola" si és múltiple de 2, "adeu" si
és múltiple de 3 i "què tal? si és múltiple de 5"`);

for(i=1;i<21;i++){
	if(i % 2 == 0){
		console.log(`%c ${i} hola`, 'color:blue');
		console.log('\n');
	}
	if(i % 3 == 0){
		console.log(`%c ${i} adios`, 'color:brown');
		console.log('\n');
	}
	if(i % 5 == 0){
		console.log(`%c ${i} como estas`, 'color:darkGreen');
		console.log('\n');
	}
}
console.log('\n');

// exercici 23: fes un contador que mostri a la consola els números de l'1 al número que introdueixis com a paràmentre
// (fins a 1000 com a màxim)  PISTA: usa la paraula clau "break"


console.log(`exercici 23: fes un contador que mostri a la consola els números de l'1 al número que introdueixis com a paràmentre
(fins a 1000 com a màxim)  PISTA: usa la paraula clau "break"`);

var max = prompt("Fins quin número vols contar (1-1000)?");

// TODO defineix aquí la funció contar()
function contar(max){
	//prevent null pointer and user enter non-number inputs...
	if((!max) || (isNaN(max))) {
		alert("Opsss.. please enter a number!!!");
		console.log(`%c Opsss.. please enter a number!!!`,'color:red');
	}else{
		//prevent user enter a invalid range
		if((max > 1000) || (max < 1)){
			alert("Opsss.. please enter a number between 1 and 1000!");
			console.log(`%c Opsss.. please enter a number between 1 and 1000!`,'color:red')
		}
		else{
			for(i=1;i<=max;i++){
				console.log(`%c ${i}`,'color:green');
			}
		}
	}
}
contar(max); // això ha de mostrar a la consola els números de l'1 al número introduit
console.log('\n');

// exercici 24: fes un buscador de números primers. Li fixarem un límit (p.e. 100) i agafarà cada número i el dividirà
// per tots els anteriors; si alguna de les divisions dona zero, llavors no és primer; si cap dona zero, l'escriurà a la
// consola


console.log(`exercici 24: fes un buscador de números primers. Li fixarem un límit (p.e. 100) i agafarà cada número i el dividirà
// per tots els anteriors; si alguna de les divisions dona zero, llavors no és primer; si cap dona zero, l'escriurà a la
// consola`);
// TODO el codi aquí
var result = [];
var multiples = [];

//dividendo desde 1 hasta 100
for(dividendo=1;dividendo<101;dividendo++){
	//divisor desde 1 hasta el dividendo
	//ej:  5 : 1
	//     5 : 2
	//     5 : 3 (hasta 5:5)
	for(divisor=1;divisor<=dividendo;divisor++){
		if(multiples.length <= 2){
			if(dividendo % divisor == 0)
				multiples.push(divisor);
		}
		else{
			multiples = [];
			break;
		}
	}
	//if dividendo solo tiene 2 possible divisor (1 y el mismo)
	// ponemos este numero en la lista de resultado
	if(multiples.length == 2)
		result.push(dividendo);	
	multiples = [];
}
console.log(`%c${result}`,'color:green');
console.log('\n');

// exercici 25: fes un contador que només mostri els números que tinguin un dígit contingut a la string predefinida fins a 100
// PISTA: usa la paraula clau "continue"

console.log(`exercici 25: fes un contador que només mostri els números que tinguin un dígit contingut a la string predefinida fins a 100
// PISTA: usa la paraula clau "continue"`);

var digitos = prompt("Escribe los digitos (1-9)?");

// TODO defineix la funció mostrarDigits()

function mostrarDigitos(digits){
	if((isNaN(digits)) || (!digits)){
		alert("Opsss.. you didn't enter numbers!!");
		console.log(`%c Opsss.. you didn't enter numbers!!`, 'color:red');
	}else{
		for (let number of digits){
			for(i=0;i<101;i++){
				if(i.toString().includes(number)){
					console.log(`%c${i}`,'color:green');
				}	
			}
		}
	}
}

mostrarDigitos(digitos);      // si dígits és 234, això mostrarà "2, 3, 4, 12, 13, 14, 20, 21, 22, 23..."
console.log('\n');


//* ----------------------------- Bucle while -----------------------------------

// exercici 26: llista de la compra. Fes que un prompt es repeteixi fins que l'usuari introdueixi una paraula clau; fins
// llavors, cada paraula introduida serà un item de la llista de la compra, que s'escriurà després de que l'usuari l'aturi
// amb el format:       Llista de la compra:
//                       - Pa
//                       - Mantega
//                       - Aigua

// TODO aquí el codi
console.log(`exercici 26: llista de la compra. Fes que un prompt es repeteixi fins que l'usuari introdueixi una paraula clau; fins
// llavors, cada paraula introduida serà un item de la llista de la compra, que s'escriurà després de que l'usuari l'aturi`)


userOption = prompt("Escribe los productos de compra, finaliza el programa si escribe:PARAR");
function verifyProduct(product){
	return ((userOption) && (isNaN(userOption)))  
}

if((userOption) && (isNaN(userOption))){
	var productList = [];
	debugger;
	while(userOption.toUpperCase() != 'PARAR'){
		productList.push(userOption);
		userOption = prompt("Escribe los productos de compra, finaliza el programa si escribe:PARAR");
		if(!verifyProduct(userOption)){
			alert(`Opsss.. you didn't enter a word!!`);
			console.log(`%c Opsss.. you didn't enter a word!!`, 'color:red');
			break;
		}
	}
}else{
	alert(`Opsss.. you didn't enter a word!!`)
	console.log(`%c Opsss.. you didn't enter a word!!`, 'color:red');
}

if(productList){
	console.log(productList);

	productList.forEach(product =>{
		console.log(`%c ${product}`, 'color:green');
	})
}
else{
	console.log("%c your shopping list is empty!!", "color:green");
}



//* ---------------------------- Mètodes arrays ---------------------------------

// replicar split

// paradoxa aniversari



//* ------------------------------ Objectes -------------------------------------

// funció amb "this"



console.log("-------------------- FI DELS EXERCICIS --------------------");