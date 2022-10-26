export class proyecto {
    id?: number;
    nombre: string;
    enlace: string;
    descripcion: string;
    img: string;

    constructor(nombre: string, descripcion: string, enlace:string, img:string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.enlace = enlace;
        this.img = img;
    }
}