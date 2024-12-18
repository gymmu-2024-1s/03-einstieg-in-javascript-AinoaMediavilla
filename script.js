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
    const currentLetter = input[i] //speicher das current zeichen aus input
    const currentUppercase = currentLetter.toUpperCase()
    result.push(currentUppercaseLetter)
  }
  return result.join("") // Macht aus der Liste einen Text
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um alle e's zu zählen
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn der aktuelle Zeichen eine 'e' ist, dann erhöhen wir die Variable
    // count um 1.
    if (currentElement === "e") {
      count = count + 1
    }
    if (currentElement === "E") {
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
  return /[A-Z]/.test(args) //Sucht zuerst alle zeichen zwischen a und z
  //Schreibe eine Funktion, die testet, ob in einem Text mindestens eine Grossbuchstabe vorkommt.
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  //Schreibe eine Funktion, die testet, ob in einem Text mindestens ein Sonderzeichen vorkommt.
  const result = []
  let hasSonderzeichen = false
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const currentUppercaseletter = currentletter.toUpperCase()
    result.push(currentUppercaseletter)

    // Wenn der aktuelle Zeichen ein Sonderzeichen ist, dann gib true aus
  }
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const lowercase = currentElement.tolowerCase() //current element von grossen buchstaben in kleine buchstaben umwandeln
    if (currentElement === lowercase) {
      hasSonderzeichen = true
    } else {
      hasSonderzeichen = false
    }
  }
  return hasSonderzeichen
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
    count = count + 1
  }
  let has6 = false
  if (count === 6) {
    has6 = true
  }
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
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

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
  for (let1 = 0; i < input.length; i++) {
    if (input[i] === "e") {
      count++
    }
    if (count === 3) {
      return i
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []
  // Lesen sie die eingabe nur bis zum ersten Leerzeichen.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      break
    }
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = arg
  const result = []
  //lesen sie die eingabe bis zum Zeichen '$' als ersten Teil einer Liste und den Rest als zweiten Teil einer Liste
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$") {
      break
    }
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe19(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //sollte 'aa' heissen
    if (currentElement === "aa") {
      result.push("aa")
    }
  }
  //jedes zeichen sollte verdoppelt werden
  for (let i = 0; i < result.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe22(args) {
  const input = args
  const result = []
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe24(args) {
  //vertausche
}

export function aufgabe40(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um alle a's zu zählen
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn der aktuelle Zeichen eine 'a' ist, dann erhöhen wir die Variable
    // count um 1.
    if (currentElement === "a") {
      count = count + 1
    }
    if (currentElement === "A") {
      count = count + 1
    }
  }

  // Gib die Anzahl der a's aus
  return count
}
linkupExerciseHandler("[data-click=aufgabe40]", aufgabe40)
