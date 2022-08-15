export class Perfil{

    id?: number;
     nombres: string;
     apellido: string;
     fecha_nacimiento : string;
     nacionalidad: string;
     mail: string;
     sobreMi: string;
     ocupacion: string;
     image_background_header: string;    
     image_perfil: string;   
     domicilio: string;
     linkedin: string;    
     github: string;
     telefono: string;
     dni: string;

    constructor( nombres: string,
        apellido: string,
        fecha_nacimiento : string,
        nacionalidad: string,
        mail: string,
        sobreMi: string,
        ocupacion: string,
        image_background_header: string,    
        image_perfil: string,   
        domicilio: string,
        linkedin: string,    
        github: string,
        telefono: string,
        dni: string){
            this.nombres=nombres ;
            this.apellido= apellido;
            this.fecha_nacimiento = fecha_nacimiento ;
            this.nacionalidad= nacionalidad ;
            this.mail=  mail;
            this.sobreMi=  sobreMi;
            this.ocupacion=  ocupacion;
            this.image_background_header=  image_background_header;    
            this.image_perfil=  image_perfil;   
            this.domicilio=  domicilio;
            this.linkedin=  linkedin;    
            this.github=  github;
            this.telefono=  telefono;
            this.dni=  dni;
        }

}