export class proyecto {
    id?: number;
    nombre: string;
    enlace: string;
    descripcion: string;
    img: string;

    constructor(nombre: string, enlace: string, descripcion:string, img:string){
        this.nombre = nombre;
        this.enlace = enlace;
        this.descripcion = descripcion;
        this.img = img;
    }
}