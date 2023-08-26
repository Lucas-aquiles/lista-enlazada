class NodoLista {
    constructor(item) {
        this.item = item
        this.siguiente = null 
        this.prev = null;
              
    }
}

class ListaEnlazada {
    constructor(cabecera = null) {
        this.cabecera = cabecera;
        this.tail = null;
    }

    magnitud() {
        let contador = 0; 
        let nodo = this.cabecera;
        while (nodo) {
            contador++;
            nodo = nodo.siguiente
        }
        return contador;
    }
}

let nodo1 = new NodoLista(2)
console.log(nodo1)
let nodo2 = new NodoLista(5)
nodo1.siguiente = nodo2
//nodo 1 ya esta enlazada a nodo 2
console.log(nodo1)


let lista = new ListaEnlazada(nodo1)
console.log(lista)

console.log(lista.cabecera.siguiente.dato) //devuelve 5
console.log(lista.magnitud())


