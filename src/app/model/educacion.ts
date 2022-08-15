export class Educacion {

    id? : number;
    escuela?: string;
    titulo?: string;
    imagen?: string;
    carrera?: string;
    puntaje? : string;
    inicio?: string;
    fin?: string;


    
    constructor (escuela: string, titulo: string,imagen:string,carrera:string, puntaje: string, inicio: string,fin: string) {
        this.titulo=titulo;
        this.carrera=carrera;
        this.imagen=imagen;
        this.escuela=escuela;
        this.puntaje=puntaje;
        this.inicio=inicio;
        this.fin=fin;
    }
    
    }
    