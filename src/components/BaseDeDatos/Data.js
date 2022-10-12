
const provincias = [{
    id:"1",
    img: "/images/img/mendoza.jpg",
    provincia :"Mendoza",
    subtitulo:"Vola a cualquier lugar del pais hasta en 12 cuotas!",
    logo:"/images/img/logo-fly.png",
    info:"Mendoza es una ciudad de la región de Cuyo en Argentina y es el corazón de la zona vitivinícola argentina, famosa por sus Malbecs y otros vinos tintos.",
    tituloInfo: "Qué ver en Mendoza:",
    infoLarge: "Circuito de Alta Montaña Termas de Cacheuta. Dejando atrás la ciudad para empezar a surcar la precordillera, las Termas de Cacheuta son el primer punto popular de este camino Uspallata, Potrerillos, Puente del Inca, Mirador ,Aconcagua ,Las Cuevas, Laguna de Horcones, Confluencia "
    ,
    precio:"$24.000"

  },
  {
    id:"2",
    img: "/images/img/iguazu.jpg",
    provincia :"Iguazu",
    subtitulo:"Vola a cualquier lugar del pais hasta en 12 cuotas!",
    logo:"/images/img/logo-fly.png",
    tituloInfo: "Qué ver en Iguazu:",
    infoLarge: "Las magníficas Cataratas del Iguazú, una de las Siete Maravillas del Mundo, están conformadas por 275 saltos de agua que caen desde las más diversas alturas. La más alta, de 80 metros, es conocida como la Garganta del Diablo Un contexto vegetal inigualable enmarca a uno de los paisajes naturales más opulentos del mundo: las Cataratas del Iguazú. Se trata de más de 2 km de cascadas que superan los 70 metros de altura, una manifestación espectacular de uno de los recursos cada vez más escasos del planeta: el agua. "
    ,
    info:"Las cataratas del Iguazú son un conjunto de cataratas que se localizan sobre el río Iguazú, en el límite entre la provincia argentina de Misiones y el estado brasileño de Paraná.",
    precio:"$18.000"

  },
  {
    id:"3",
    img: "/images/img/calafa.jpg",
    provincia :"Calafate",
    subtitulo:"Vola a cualquier lugar del pais hasta en 12 cuotas!",
    logo:"/images/img/logo-fly.png",
    tituloInfo: "Qué ver en Calafate:",
    infoLarge: "7 cosas para hacer en El Calafate -Glaciar Perito Moreno. -Trekking en el Glaciar Perito Moreno. - Navegación al glaciar Upsala, Spegazzini y Onelli. -Laguna Nimez.- Balcones de El Calafate. -Bahía Redonda y Punta Soberana.-Centro de El Calafate y plazoletas."
    ,
    info:"El Parque Nacional Los Glaciares se encuentra en los Andes Australes del suroeste de Argentina. Más conocido por el Perito Moreno y las espectaculares cascadas de hielo desde su pared frontal hacia el lago Argentino.",
    precio:"$26.000"

  }]

  // FN asincrona que mediante una promesa envia los datos del Json
 export const Data = () => {
       return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(provincias)
        
        }, 2000)
        
      })
    }
 export const DataById = (id) => {
       return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(provincias.find(provincias =>{
            return provincias.id == id
          } ))
        }, 500)
        
      })
    }
    
    // console.log(provincias.find(provincias =>{
    //   return provincias.id == id
    // } ));
  