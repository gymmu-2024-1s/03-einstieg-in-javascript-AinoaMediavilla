import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      //auch E ignorieren
    } else {
      result.push(currentElement)
    }
    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const currentUpperCaseLetter = currentElement.toUpperCase()
    result.push(currentUpperCaseLetter)
  }
  return result.join("")
} //
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args

  // Erstelle eine Variable um alle e's zu zählen
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn der aktuelle Zeichen eine 'e' ist, dann erhöhen wir die Variable
    // count um 1.
    if (currentElement === "e") {
      count = count + 1
    }
  }

  // Gib die Anzahl der e's aus
  return count
}

//Beispiel für den Aufruf
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)
export function aufgabe04(args) {
  const input = args
  //erstelle einen code um die wörter zu zählen
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn der aktuelle Zeichen ein Leerzeichen ist, dann erhöhen wir die Variable count um 1
    if (currentElement === " ") {
      count = count + 1
    }
  }
  return count + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  //Schreibe eine Funktion, die testet, ob in einem Text mindestens eine Grossbuchstabe vorkommt.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn der aktuelle Zeichen ein Grossbuchstabe ist, dann gib true aus
    if (currentElement === currentElement.toUpperCase()) {
      return true
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  //Schreibe eine Funktion, die testet, ob in einem Text mindestens ein Sonderzeichen vorkommt.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn der aktuelle Zeichen ein Sonderzeichen ist, dann gib true aus
    if (
      currentElement === "!" ||
      currentElement === "@" ||
      currentElement === "#" ||
      currentElement === "$" ||
      currentElement === "%" ||
      currentElement === "^" ||
      currentElement === "&" ||
      currentElement === "*" ||
      currentElement === "(" ||
      currentElement === ")" ||
      currentElement === "-" ||
      currentElement === "_" ||
      currentElement === "+" ||
      currentElement === "=" ||
      currentElement === "[" ||
      currentElement === "]" ||
      currentElement === "{" ||
      currentElement === "}" ||
      currentElement === "|" ||
      currentElement === ";" ||
      currentElement === ":" ||
      currentElement === "'" ||
      currentElement === "," ||
      currentElement === "<" ||
      currentElement === ">" ||
      currentElement === "?" ||
      currentElement === "/"
    ) {
      return true
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  let hasund = false
  //schreibe eine Funktion, die testet, ob in einem Text das Wort 'und' vorkommt.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] //das aktuelle Zeichen
    // Wenn der aktuelle Zeichen 'und' ist, dann gib true aus
    if (currentElement === "u") {
      const nextElement = input[i + 1]
      if (nextElement === "n") {
        const nextNextElement = input[i + 2]
        if (nextNextElement === "d") {
          hasund = true
        }
      }
    }
  }
  return hasund
}

linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)
export function aufgabe08(args) {
  //Ersetze alle `e`s mit einer `3`

  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      result.push("3")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  //Teste ob eine Eingabe genau sechs Zeichen lang ist.
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    if (result.length === 6) {
      return true
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  //Teste ob eine Eingabe ein korrekter RGB Hexcode ist.
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    if (result.length === 7) {
      return true
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  //Gib den ASCII code eines einzelnen Buchstabens an.

  const input = args //Buchstabe
  let asciiCode = 0
  asciiCode = input.charCodeAt(0)
  return asciiCode
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  //suche die position des erste e in einem text
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      return i
    }
  }
  return -1
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)¨

export function aufgabe13(args) {
//die position des letzten e in einem text
  const input = args
  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    if (currentElement === "e") {
      return i
    }
  }
  return -1
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)


export function aufgabe14(args) {
  const input = args
  let count = 0
// suche die position des dritten e's
for( let1 = 0; i < input.length; i++){
  if (input)