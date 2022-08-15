export class persona{

    id?: number;
    nombre: String;
    apellido: String;
    tel: String;
    img: String;
    dni:String;

    constructor(nombre: String, apellido: String, img: String, tel: String, dni: String){
    this.nombre =nombre;
    this.apellido=apellido;
    this.img =img;
    this.tel =tel;
    this.dni=dni;    
    }

}