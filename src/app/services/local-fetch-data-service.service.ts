import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalFetchDataServiceService {

  //waiting to connect to the database can be too slow for the free plan; user should experience no delays

  hardCode:any={
    "imo": {
      "list": [
      {
        "text": "Nota diario La Capital",
        "link": "https://www.lacapital.com.ar/suscriptores/la-historia-julian-medallas-y-los-secretos-la-matematica-n10022443.html"
      },
      {
        "text": "Nota diario La Capital",
        "link": "https://www.lacapital.com.ar/educacion/un-rosarino-gano-una-medalla-plata-la-olimpiada-internacional-matematica-n10022067.html"
      },
      {
        "text": "Resultados oficiales",
        "link": "https://www.imo-official.org/participant_r.aspx?id=29140"
      },
      {
        "text": "Recorte Billiken",
        "link": "https://billiken.lat/interesante/un-estudiante-argentino-gano-una-medalla-en-la-olimpiada-internacional-de-matematica/"
      }
    ]},
    "ibero": {
      "list": [
      {
        "text": "Nota diario La Capital",
        "link": "https://www.lacapital.com.ar/educacion/oro-perfecto-y-plata-chicos-del-politecnico-la-olimpiada-iberoamericana-matematica-n2697643.html"
      }
    ]},
    "ai": {
      "list": [
      {
        "text": "Publicación de la Escuela",
        "link": "https://ne-np.facebook.com/poli.unr/videos/el-pasado-2-de-julio-nuestros-alumnos-pusieron-a-prueba-sus-habilidades-en-progr/835160187456094/"
      }
    ]},
    "oia": {
      "list": [
      {
        "text": "Resultados Oficiales",
        "link": "https://www.oia.unsam.edu.ar/oia-certamen-nacional-de-programacion-2022/"
      }
    ]},
    "qatar": {
      "list": [
      {
        "text": "Código Fuente (versión original)",
        "link": "https://github.com/julian4132/webpage"
      },
      {
        "text": "Código Fuente (migrado a React)",
        "link": "https://github.com/julian4132/reactWebpage"
      }
    ]},
    "connectfour": {
      "list": [
      {
        "text": "Código Fuente",
        "link": "https://github.com/julian4132/cuatroenlinea"
      }
    ]},
    "argprog": {
      "list": [
      {
        "text": "Código Fuente (Frontend)",
        "link": "https://github.com/julian4132/Portfolio"
      },
      {
        "text": "Código Fuente (Backend)",
        "link": "https://github.com/julian4132/Backend"
      }
    ]}

  }

  constructor() { }

  fetchLinks(name:string){
    console.log("adawscsae"+name)
    return this.hardCode[name];
  }
}
