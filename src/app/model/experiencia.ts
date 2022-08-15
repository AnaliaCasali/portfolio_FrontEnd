export class Experiencia {

id? : number;
nombre?: string;
puesto?: string;
imagen?: string;
descripcion? : string;
inicio?: string;
fin?: string;

constructor (nombre: string, puesto: string,imagen:string,descripcion:string, inicio: string,fin: string) {
    this.nombre=nombre;
    this.puesto=puesto;
    this.imagen=imagen;
    this.descripcion=descripcion;
    this.inicio=inicio;
    this.fin=fin;
}

}
