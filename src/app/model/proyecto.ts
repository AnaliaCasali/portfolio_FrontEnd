export class Proyecto {

    id? : number;
    nombre?: string;
    descripcion? : string;
    inicio?: string;
    fin?: string;
    
    constructor (nombre: string,descripcion:string, inicio: string,fin: string) {
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.inicio=inicio;
        this.fin=fin;
    }
    
    }
    