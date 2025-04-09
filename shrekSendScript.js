async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

## **QUIROZ EN PROBLEMAS: CALOR MASCULINO**  
*Una comedia erótica gay escrita por un idiota brillante que aún vive con su madre*  

---

### **PRÓLOGO – VOZ EN OFF**

**NARRADOR (voz burlona, tipo documental barato):**  
Esta es la historia de **Quiroz Roberto Osvaldo**, un hombre común, corriente… e irremediablemente caliente.  
Guionista de sus propias fantasías, vive con su madre en un departamento de dos ambientes donde lo único que se cocina… es deseo.  
Es un idiota con sueños grandes, batitas pequeñas y un talento innato para meterse en problemas llenos de testosterona.

Y sí… escribió él mismo esta historia. Porque si no te dan bola, ¡escribite tu propia porno!

---

### **ESCENA 1 – INTERIOR – DEPARTAMENTO DE QUIROZ – TARDE**

*(Quiroz, en bata de satén, se sirve vino en una copa de Hello Kitty mientras su madre grita desde la cocina.)*

**MAMÁ (fuera de cámara):**  
¡Roberto! ¡No pongas más velas aromáticas que me da asma!

**QUIROZ**  
(ignorándola, mirando su reflejo con deseo propio)  
Esta noche… la mozzarella no va a ser lo único que se derrita.

*(Timbre. Entra MARCOS, repartidor musculoso. Se dan todos los dobles sentidos posibles con la “triple salchichón”. Todo termina con Quiroz derramando vino, la bata cayendo, y la madre gritando de fondo.)*

**MAMÁ**  
¡Estás en bata otra vez, degenerado!

---

### **ESCENA 2 – BAÑO INUNDADO – MAÑANA SIGUIENTE**

*(Juanjo, el plomero sudado, aparece mientras Quiroz juega con una esponja con forma de patito y lo mira como si fuera un chorizo en pan caliente.)*

**QUIROZ**  
¿Te gustan los trabajos... húmedos?

**JUANJO**  
Me encantan los... desagües difíciles.

*(Mientras el plomero mete el brazo hasta el fondo del caño, Quiroz se muerde el labio como si fuera a explotar. La madre golpea la puerta.)*

**MAMÁ**  
¡Dejá de mojar el piso, que después se me cae la tía Zulma!

---

### **ESCENA 3 – PLAZA DEPORTIVA – ATARDECER**

*(Cinco basquetbolistas negros lo rodean mientras Quiroz juega con la pelotita como si fuera un oráculo erótico.)*

**QUIROZ**  
Me encanta el básquet. Tantos cuerpos… tan poco tiempo.

**TYRELL**  
Vos jugás con fuego, blanco.

**QUIROZ**  
Y me quemo feliz.

*(Termina en el piso, cubierto de sudor, diciendo cosas como “encestame otra vez, campeón” mientras los demás se ríen.)*

---

### **ESCENA 4 – COMISARÍA – NOCHE**

*(Arrestado por “exceso de homosexualidad en vía pública”, Quiroz es esposado por un policía uniformado que podría tranquilamente ser stripper en un boliche gay de Cosquín.)*

**QUIROZ**  
¿Y si me portaba mal... solo para que me pongas las esposas?

**POLICÍA**  
Estás a punto de perder todos tus derechos... menos el de disfrutar.

*(Lo meten en la celda. ¿Quién está adentro? TODOS los anteriores. Porque esto lo escribió Quiroz y en su mundo hay coherencia narrativa emocional... y mucho bulto.)*

---

### **ESCENA 5 – CELDA DE LA FANTASÍA – MADRUGADA**

*(Todos lo rodean. Uno a uno se acercan. El policía cierra la celda desde afuera. Quiroz está en el centro, listo para su “castigo”.)*

**POLICÍA**  
Este... es tu castigo, Quiroz.

**QUIROZ**  
(susurrando, con voz intensa)  
Y mi premio... por escribir tan bien.

*(Risas, caricias, sudor, y un simbolismo de lluvia torrencial desde una cañería rota. Todo lo que ocurre ahí solo puede describirse con palabras como “gemido coral”, “tormenta de testosterona” y “estética lubricada”.)*

---

### **EPÍLOGO – AMANECER**

*(Quiroz sale de la comisaría con la bata rasgada, el pelo hecho un desastre, y una sonrisa que desafía las leyes del placer.)*

**QUIROZ**  
(voz en off, como si esto fuera una obra maestra existencial)  
La sociedad me quiso callar. Me quiso vestir. Me quiso sacar la bata...  
Pero no pudieron. Porque yo soy Quiroz.  
Soy el guionista de mi vida...  
…y de esta porno que empieza con pizza y termina con una lluvia blanca de libertad.

*(Corte a: Quiroz llegando a casa. Su madre lo espera en la puerta.)*

**MAMÁ**  
¿Otra vez desnudo en la calle, Roberto?

**QUIROZ**  
(triunfante, mirando al horizonte)  
¡Mamá, soy una estrella del cine... alternativo!

*(Se enciende una vela. Explota un caño. Y una remera que dice “#SoyQuiroz” flamea al viento.)*

---

**FIN**  
*(O el comienzo… de la saga más absurda, caliente y autorreferencial del cine que nadie pidió pero todos vamos a amar.)*


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
