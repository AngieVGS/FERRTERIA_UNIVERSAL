export class Ubicacion {
  direccion: string;
  ciudad: string;
  departamento: string;
  pais: string;
  mapsLocation: string ;

  constructor(direccion: string, ciudad: string, departamento: string, pais: string, mapsLocation: string ){
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.departamento = departamento;
    this.pais = pais;
    this.mapsLocation = mapsLocation;
  }
}
