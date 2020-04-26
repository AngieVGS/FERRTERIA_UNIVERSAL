import { Ubicacion } from './Ubicacion';

export class Empresa {
  nombre = 'Ferreteria Universal S.A.S';
  telefono = ['(+57) 311 4697080', '(+57) 310 5759823'];
  whatsapp = '573105759823';
  ubicacion = new Ubicacion(
    'calle 20 # 14-32',
    'Tunja',
    'Boyaca',
    'Colombia',
    'https://goo.gl/maps/jfKJhRUi57KQjuXL8'
  );
  email = 'ferreteriauniversaltunja@gmail.com';
  instagram = 'https://www.instagram.com/ferreteriauniversaltunja/?hl=es-la';
  facebook = 'https://www.facebook.com/FerreteriaUniversalSas/';
  twitter = 'https://twitter.com/FerreteriaUniv2';
  linkendin = 'https://www.linkedin.com/company/ferreteria-universal-s-a-s/';
  mision = 'Prestar un servicio excelente a la comunidad en general, con atención, variedad de productos y precios, calidad y asesoría.'+
  'De esta forma generamos opciones de compra por parte del cliente y a la vez una estrategia de venta,'+
  ' que retribuya la inversión y el esfuerzo de los socios, promoviendo fuente de empleo y desarrollo integral'+
  ' de nuestros colaboradores. Capacitar dia a dia a nuestros colaboradores para que conzcan cada uno de los productos,'
  +' sus caracteristicas, fortalezas y debilidades. Creando una imagen de confianza ante la comunidad y un liderazgo en'+
  ' el sector ferretero local y regional';
  vision = ' En el proximo decenio, afianzaremos y fortaleceremos nuestro liderazgo como distribuidores y '+
  ' comercializadores de productos nacionales e importados. Ampliaremos esa gama de productos con calidad y precio.'+
  'Seremos reconocidos a nivel local y regional por nuestra asesoria apropiada, la atención y tecnología.'+
  'Ampliaremos nuestro servicio a una red de distribución local, y regional. Fortaleceremos el comercio local,'+
  'creando sentido de pertenencia por nuestra cuidad.Seremos reconocidos por nuetro esfuerzo, dedicación, colaboración,'+
  'y por afianzarnos del sector ferretero.';
  quehacemos =
    'Actualmente ofrecemos Herraminetas, Herragro, Toolcraft, Stanley, Ranger, Colima, Tornillería, Carretillas,'+
    ' Manilas, Lijas, Abrasivos, Puntillas, Alambres, Guayas, Cerraduras, Herramientas eléctricas, Herrajes, '+
    'Tubería PVC y Sanitaria y todo lo relacionado con el ramo.';
  historia = 'El 28 de febrero de 1980 iniciamos esta empresa, en el sur de la ciudad de Tunja, en un pequeño local'+
  ' con poca mercancía y poco conocimiento del mercado, con el nombre de FERRETERIA GALINDO. Años mas tarde hacia'+
  ' 1988, ya conocedores de productos y del mercado, se abre otro punto de venta en el sector la plaza de mercado'+
  ' (hoy Plaza Real) , cambiando la antigua razón social con el nombre de FERRETERIA UNIVERSO, manteniendo los dos'+
  ' puntos de Venta. En 1993  la empresa comienza una nueva etapa, cambiamos de administración y se generan otros'+
  ' rumbos, e ideologías que fortalecieron la empresa. Para 2001 la empresa se divide y nace entonces FERRETERIA '+
  'UNIVERSAL LTDA. Hoy día es una empresa que busca siempre ofrecer los mejores productos y con la mejor calidad.';
  servVenta = ' Contamos con capacitacion de los productos que ofrecemos, por lo cual te brindaremos la mejor' +
  ' asesoria en los productos de nuestro catalogo. Te brindaremos diferentes marcas y con diferentes precios pero siempre'+
  ' con la mejor calidad y garantia.'
  servMantenimiento = ' Nuestros colaboradores cuentan con conocimiento y experiencia en mantenimiento de una amplia gama'+
  ' de herramientas electricas, por lo cual te brindaremos un mantenimiento garantizado y con los mejores repuestos.';
  servCerrajeria = 'Ofrecemos servicio de cambio de guardas, duplicados de llaves (Casa, Carro, Moto),  mantenimiento'+
  ' y venta de chapas y candados; brindando la mayor seguridad y confianza a nuestros clientes';

  public getCategorias(): any[] {
    return [
      {
        categoria: 'Articulos Seguridad',
      },
      {
        categoria: 'Elementos de Unión',
      },
      {
        categoria: 'Equipamiento Para Soldadura',
      },
      {
        categoria: 'Equipos de Protección individual',
      },
      {
        categoria: 'Herrajes',
      },
      {
        categoria: 'Herramientas Abrasivas',
      },
      {
        categoria: 'Herramientas de Mano',
      },
      {
        categoria: 'Herramientas Eléctricas',
      },
      {
        categoria: 'Herramientas para Máquinas complementos',
      },
      {
        categoria: 'Herramientas de Sujeción',
      },
      {
        categoria: 'Herramientas manuales para huerto y Jardín',
      },
      {
        categoria: 'Herramientas para Construcción e instaladores',
      },
      {
        categoria: 'Herramientas para madera y carpinteria',
      },
      {
        categoria: 'Mangueras',
      },
      {
        categoria: 'Máquinas manuales para construcción y obras públicas',
      },
      {
        categoria: 'Materiales de desgaste para Construcción y obras públicas',
      },
      {
        categoria: 'Medición Dimensional',
      },
      {
        categoria: 'Productos de Fijación y sellado',
      },
      {
        categoria: 'Productos de Impermeabilización',
      },
      {
        categoria: 'Productos para limpieza profesional',
      },
      {
        categoria: 'Rejillas',
      },
      {
        categoria: 'Rodamientos y Ruedas',
      },
      {
        categoria: 'Tuberías y accesorios',
      },
      {
        categoria: 'Utensilios de limpieza',
      },
      {
        categoria: 'Válvulas',
      },
      {
        categoria: 'Varios Ferreteria',
      },
    ];
  }

  getProductos(): any[] {
    return [
      {
        nombre: 'Cadenas y antirrobos',
        categoria: 'Articulos Seguridad',
        imagen: '/assets/productos/Cadenas y antirrobos.jpg',
      },
      {
        nombre: 'Candados',
        categoria: 'Articulos Seguridad',
        imagen: '/assets/productos/Candados.jpg',
      },
      {
        nombre: 'Llaves',
        categoria: 'Articulos Seguridad',
        imagen: '/assets/productos/Llaves.jpg',
      },
      {
        nombre: 'Portacandados',
        categoria: 'Articulos Seguridad',
        imagen: '/assets/productos/Portacandados.jpg',
      },
      {
        nombre: 'Abrazaderas',
        categoria: 'Elementos de Unión',
        imagen: '/assets/productos/Abrazaderas.jpg',
      },
      {
        nombre: 'Anclajes',
        categoria: 'Elementos de Unión',
        imagen: '/assets/productos/Anclajes.jpg',
      },
      {
        nombre: 'Arandelas',
        categoria: 'Elementos de Unión',
        imagen: '/assets/productos/Arandelas.jpg',
      },
      {
        sinonimos: 'Pines',
        nombre: 'Clavijas y pasadores',
        categoria: 'Elementos de Unión',
        imagen: '/assets/productos/Clavijas y pasadores.jpg',
      },
      {
        nombre: 'Remaches',
        categoria: 'Elementos de Unión',
        imagen: '/assets/productos/Remaches.jpg',
      },
      {
        sinonimos: 'Tacos',
        nombre: 'Chazos',
        categoria: 'Elementos de Unión',
        imagen: '/assets/productos/Chazos.jpg',
      },
      {
        nombre: 'Tornillos autoperforantes',
        categoria: 'Elementos de Unión',
        imagen: '/assets/productos/Tornillos autoperforantes.jpg',
      },
      {
        nombre: 'Tornillos para madera',
        categoria: 'Elementos de Unión',
        imagen: '/assets/productos/Tornillos para madera.jpg',
      },
      {
        nombre: 'Tornillos para metales',
        categoria: 'Elementos de Unión',
        imagen: '/assets/productos/Tornillos para metales.jpg',
      },
      {
        nombre: 'Tuercas',
        categoria: 'Elementos de Unión',
        imagen: '/assets/productos/Tuercas.jpg',
      },
      {
        nombre: 'Equipos portátiles de soldadura',
        categoria: 'Equipamiento Para Soldadura',
        imagen: '/assets/productos/Equipos portátiles de soldadura.jpg',
      },
      {
        nombre: 'Gafas y máscaras de soldadura',
        categoria: 'Equipamiento Para Soldadura',
        imagen: '/assets/productos/Gafas y máscaras de soldadura.jpg',
      },
      {
        nombre: 'Materiales para soldadura',
        categoria: 'Equipamiento Para Soldadura',
        imagen: '/assets/productos/Materiales para soldadura.jpg',
      },
      {
        nombre: 'Sopletes',
        categoria: 'Equipamiento Para Soldadura',
        imagen: '/assets/productos/Sopletes.jpg',
      },
      {
        nombre: 'Arneses y prendas de seguridad en altura',
        categoria: 'Equipos de Protección individual',
        imagen:
          '/assets/productos/Arneses y prendas de seguridad en altura.jpg',
      },
      {
        nombre: 'Cascos',
        categoria: 'Equipos de Protección individual',
        imagen: '/assets/productos/Cascos.jpg',
      },
      {
        nombre: 'Cinturones y fajas',
        categoria: 'Equipos de Protección individual',
        imagen: '/assets/productos/Cinturones y fajas.jpg',
      },
      {
        nombre: 'Gafas de protección',
        categoria: 'Equipos de Protección individual',
        imagen: '/assets/productos/Gafas de protección.jpg',
      },
      {
        nombre: 'Guantes de seguridad',
        categoria: 'Equipos de Protección individual',
        imagen: '/assets/productos/Guantes de seguridad.jpg',
      },
      {
        nombre: 'Mascarillas',
        categoria: 'Equipos de Protección individual',
        imagen: '/assets/productos/Mascarillas.jpg',
      },
      {
        nombre: 'Protección auditiva',
        categoria: 'Equipos de Protección individual',
        imagen: '/assets/productos/Protección auditiva.jpg',
      },
      {
        nombre: 'Amortiguadores de puertas',
        categoria: 'Herrajes',
        imagen: '/assets/productos/Amortiguadores de puertas.jpg',
      },
      {
        sinonimos: 'Botones y manijas',
        nombre: 'Asas, pomos y tiradores para carpintería',
        categoria: 'Herrajes',
        imagen:
          '/assets/productos/Asas, pomos y tiradores para carpintería.jpg',
      },
      {
        nombre: 'Bisagras para puertas y ventanas',
        categoria: 'Herrajes',
        imagen: '/assets/productos/Bisagras para puertas y ventanas.jpg',
      },
      {
        nombre: 'Cerraduras de exterior',
        categoria: 'Herrajes',
        imagen: '/assets/productos/Cerraduras de exterior.jpg',
      },
      {
        nombre: 'Cerraduras de interior',
        categoria: 'Herrajes',
        imagen: '/assets/productos/Cerraduras de interior.jpg',
      },
      {
        nombre: 'Cerraduras de seguridad para puertas',
        categoria: 'Herrajes',
        imagen: '/assets/productos/Cerraduras de seguridad para puertas.jpg',
      },
      {
        nombre: 'Cerraduras para muebles',
        categoria: 'Herrajes',
        imagen: '/assets/productos/Cerraduras para muebles.jpg',
      },
      {
        nombre: 'Cerraduras para ventanas y puertas',
        categoria: 'Herrajes',
        imagen: '/assets/productos/Cerraduras para ventanas y puertas.jpg',
      },
      {
        nombre: 'Cerrojos para puertas',
        categoria: 'Herrajes',
        imagen: '/assets/productos/Cerrojos para puertas.jpg',
      },
      {
        nombre: 'Cierra puertas',
        categoria: 'Herrajes',
        imagen: '/assets/productos/Cierra puertas.jpg',
      },
      {
        nombre: 'Cilindros para llaves',
        categoria: 'Herrajes',
        imagen: '/assets/productos/Cilindros para llaves.jpg',
      },
      {
        nombre: 'Herrajes para vidrio',
        categoria: 'Herrajes',
        imagen: '/assets/productos/Herrajes para vidrio.jpg',
      },
      {
        nombre: 'Pestillos',
        categoria: 'Herrajes',
        imagen: '/assets/productos/Pestillos.jpg',
      },
      {
        nombre: 'Sistemas correderos',
        categoria: 'Herrajes',
        imagen: '/assets/productos/Sistemas correderos.jpg',
      },
      {
        nombre: 'Abrasivos en bruto',
        categoria: 'Herramientas Abrasivas',
        imagen: '/assets/productos/Abrasivos en bruto.jpg',
      },
      {
        nombre: 'Bandas, rollos y papel de lija',
        categoria: 'Herramientas Abrasivas',
        imagen: '/assets/productos/Bandas, rollos y papel de lija.jpg',
      },
      {
        nombre: 'Cardas y cepillos',
        categoria: 'Herramientas Abrasivas',
        imagen: '/assets/productos/Cardas y cepillos.jpg',
      },
      {
        nombre: 'Discos abrasivos',
        categoria: 'Herramientas Abrasivas',
        imagen: '/assets/productos/Discos abrasivos.jpg',
      },
      {
        nombre: 'Discos de corte y desbaste',
        categoria: 'Herramientas Abrasivas',
        imagen: '/assets/productos/Discos de corte y desbaste.jpg',
      },
      {
        nombre: 'Discos de tronzado',
        categoria: 'Herramientas Abrasivas',
        imagen: '/assets/productos/Discos de tronzado.jpg',
      },
      {
        nombre: 'Alicates',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Alicates.jpg',
      },
      {
        sinonimos: 'cepillo,grata',
        nombre: 'Cepillos metálicos',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Cepillos metálicos.jpg',
      },
      {
        sinonimos: 'Bisturí',
        nombre: 'Cutters',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Cutters.jpg',
      },
      {
        nombre: 'Destornilladores',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Destornilladores.jpg',
      },
      {
        nombre: 'Extractores',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Extractores.jpg',
      },
      {
        nombre: 'Herramientas para tornillos especiales y de seguridad',
        categoria: 'Herramientas de Mano',
        imagen:
          '/assets/productos/Herramientas para tornillos especiales y de seguridad.jpg',
      },
      {
        nombre: 'Limas y escofinas',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Limas y escofinas.jpg',
      },
      {
        nombre: 'Llaves ajustables',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Llaves ajustables.jpg',
      },
      {
        sinonimos: 'Llaves bristol',
        nombre: 'Llaves allen',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Llaves allen.jpg',
      },
      {
        nombre: 'Llaves de tubo',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Llaves de tubo.jpg',
      },
      {
        nombre: 'Llaves de vaso',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Llaves de vaso.jpg',
      },
      {
        nombre: 'Llaves estrella',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Llaves estrella.jpg',
      },
      {
        nombre: 'Llaves fijas',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Llaves fijas.jpg',
      },
      {
        nombre: 'Maletines y kits de herramientas',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Maletines y kits de herramientas.jpg',
      },
      {
        nombre: 'Martillos y mazas',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Martillos y mazas.jpg',
      },
      {
        nombre: 'Porta puntas y puntas de atornillar',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Porta puntas y puntas de atornillar.jpg',
      },
      {
        nombre: 'Sierras de mano',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Sierras de mano.jpg',
      },
      {
        nombre: 'Tenazas',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Tenazas.jpg',
      },
      {
        nombre: 'Tijeras industriales',
        categoria: 'Herramientas de Mano',
        imagen: '/assets/productos/Tijeras industriales.jpg',
      },
      {
        sinonimos: 'Esmeril',
        nombre: 'Afiladoras de sobremesa',
        categoria: 'Herramientas Eléctricas',
        imagen: '/assets/productos/Afiladoras de sobremesa.jpg',
      },
      {
        sinonimos: 'Pulidora',
        nombre: 'Amoladoras',
        categoria: 'Herramientas Eléctricas',
        imagen: '/assets/productos/Amoladoras.jpg',
      },
      {
        nombre: 'Atornilladores eléctricos',
        categoria: 'Herramientas Eléctricas',
        imagen: '/assets/productos/Atornilladores eléctricos.jpg',
      },
      {
        nombre: 'Clavadoras',
        categoria: 'Herramientas Eléctricas',
        imagen: '/assets/productos/Clavadoras.jpg',
      },
      {
        sinonimos: 'Pistola Calor',
        nombre: 'Decapadoras',
        categoria: 'Herramientas Eléctricas',
        imagen: '/assets/productos/Decapadoras.jpg',
      },
      {
        nombre: 'Grapadoras',
        categoria: 'Herramientas Eléctricas',
        imagen: '/assets/productos/Grapadoras.jpg',
      },
      {
        nombre: 'Ingleteadoras',
        categoria: 'Herramientas Eléctricas',
        imagen: '/assets/productos/Ingleteadoras.jpg',
      },
      {
        nombre: 'Lijadoras para maderas',
        categoria: 'Herramientas Eléctricas',
        imagen: '/assets/productos/Lijadoras para maderas.jpg',
      },
      {
        sinonimos: 'Polichadora',
        nombre: 'Lijadoras para trabajos de pintura',
        categoria: 'Herramientas Eléctricas',
        imagen: '/assets/productos/Lijadoras para trabajos de pintura.jpg',
      },
      {
        nombre: 'Ruteadora',
        categoria: 'Herramientas Eléctricas',
        imagen: '/assets/productos/Ruteadora.jpg',
      },
      {
        nombre: 'Sierras circulares manuales',
        categoria: 'Herramientas Eléctricas',
        imagen: '/assets/productos/Sierras circulares manuales.jpg',
      },
      {
        nombre: 'Taladros eléctricos',
        categoria: 'Herramientas Eléctricas',
        imagen: '/assets/productos/Taladros eléctricos.jpg',
      },
      {
        nombre: 'Atornilladores',
        categoria: 'Herramientas para Máquinas complementos',
        imagen: '/assets/productos/Atornilladores.jpg',
      },
      {
        nombre: 'Avellanadores',
        categoria: 'Herramientas para Máquinas complementos',
        imagen: '/assets/productos/Avellanadores.jpg',
      },
      {
        nombre: 'Brocas de acero',
        categoria: 'Herramientas para Máquinas complementos',
        imagen: '/assets/productos/Brocas de acero.jpg',
      },
      {
        nombre: 'Brocas de diamante',
        categoria: 'Herramientas para Máquinas complementos',
        imagen: '/assets/productos/Brocas de diamante.jpg',
      },
      {
        nombre: 'Brochas',
        categoria: 'Herramientas para Máquinas complementos',
        imagen: '/assets/productos/Brochas.jpg',
      },
      {
        sinonimos: 'Sierra Copa',
        nombre: 'Coronas',
        categoria: 'Herramientas para Máquinas complementos',
        imagen: '/assets/productos/Coronas.jpg',
      },
      {
        nombre: 'Discos de diamante',
        categoria: 'Herramientas para Máquinas complementos',
        imagen: '/assets/productos/Discos de diamante.jpg',
      },
      {
        nombre: 'Fresas de diamante',
        categoria: 'Herramientas para Máquinas complementos',
        imagen: '/assets/productos/Fresas de diamante.jpg',
      },
      {
        nombre: 'Fresas frontales escariadora',
        categoria: 'Herramientas para Máquinas complementos',
        imagen: '/assets/productos/Fresas frontales escariadora.jpg',
      },
      {
        nombre: 'Fresas para ángulos',
        categoria: 'Herramientas para Máquinas complementos',
        imagen: '/assets/productos/Fresas para ángulos.jpg',
      },
      {
        nombre: 'Fresas para ranurar escariadora',
        categoria: 'Herramientas para Máquinas complementos',
        imagen: '/assets/productos/Fresas para ranurar escariadora.jpg',
      },
      {
        sinonimos: 'Segueta',
        nombre: 'Hojas de sierra',
        categoria: 'Herramientas para Máquinas complementos',
        imagen: '/assets/productos/Hojas de sierra.jpg',
      },
      {
        nombre: 'Machos de roscar',
        categoria: 'Herramientas para Máquinas complementos',
        imagen: '/assets/productos/Machos de roscar.jpg',
      },
      {
        nombre: 'Terrajas de roscar',
        categoria: 'Herramientas para Máquinas complementos',
        imagen: '/assets/productos/Terrajas de roscar.jpg',
      },
      {
        sinonimos: 'Tornillos de apriete o sargentos',
        nombre: 'Prensas',
        categoria: 'Herramientas de Sujeción',
        imagen: '/assets/productos/Prensas.jpg',
      },
      {
        nombre: 'Tornillos de banco',
        categoria: 'Herramientas de Sujeción',
        imagen: '/assets/productos/Tornillos de banco.jpg',
      },
      {
        nombre: 'Azadas y azadones',
        categoria: 'Herramientas manuales para huerto y Jardín',
        imagen: '/assets/productos/Azadas y azadones.jpg',
      },
      {
        sinonimos: 'Tijera Podadora',
        nombre: 'Cortasetos manuales',
        categoria: 'Herramientas manuales para huerto y Jardín',
        imagen: '/assets/productos/Cortasetos manuales.jpg',
      },
      {
        nombre: 'Hachas',
        categoria: 'Herramientas manuales para huerto y Jardín',
        imagen: '/assets/productos/Hachas.jpg',
      },
      {
        sinonimos: 'Trinches',
        nombre: 'Horcas',
        categoria: 'Herramientas manuales para huerto y Jardín',
        imagen: '/assets/productos/Horcas.jpg',
      },
      {
        sinonimos: 'Paladraga',
        nombre: 'Palas para agricultura y jardinería',
        categoria: 'Herramientas manuales para huerto y Jardín',
        imagen: '/assets/productos/Palas para agricultura y jardinería.jpg',
      },
      {
        nombre: 'Podaderas y corta ramas',
        categoria: 'Herramientas manuales para huerto y Jardín',
        imagen: '/assets/productos/Podaderas y corta ramas.jpg',
      },
      {
        nombre: 'Rastrillos y escobas de lamas',
        categoria: 'Herramientas manuales para huerto y Jardín',
        imagen: '/assets/productos/Rastrillos y escobas de lamas.jpg',
      },
      {
        sinonimos: 'Valdes',
        nombre: 'Regaderas y cubos',
        categoria: 'Herramientas manuales para huerto y Jardín',
        imagen: '/assets/productos/Regaderas y cubos.jpg',
      },
      {
        nombre: 'Serruchos de poda',
        categoria: 'Herramientas manuales para huerto y Jardín',
        imagen: '/assets/productos/Serruchos de poda.jpg',
      },
      {
        nombre: 'Tijeras de podar manuales',
        categoria: 'Herramientas manuales para huerto y Jardín',
        imagen: '/assets/productos/Tijeras de podar manuales.jpg',
      },
      {
        nombre: 'Cortatubos',
        categoria: 'Herramientas para Construcción e instaladores',
        imagen: '/assets/productos/Cortatubos.jpg',
      },
      {
        sinonimos: 'cizalla',
        nombre: 'Cortavarillas',
        categoria: 'Herramientas para Construcción e instaladores',
        imagen: '/assets/productos/Cortavarillas.jpg',
      },
      {
        nombre: 'Curvatubos',
        categoria: 'Herramientas para Construcción e instaladores',
        imagen: '/assets/productos/Curvatubos.jpg',
      },
      {
        nombre: 'Herramientas diversas para electricidad',
        categoria: 'Herramientas para Construcción e instaladores',
        imagen: '/assets/productos/Herramientas diversas para electricidad.jpg',
      },
      {
        nombre: 'Herramientas para fontanería',
        categoria: 'Herramientas para Construcción e instaladores',
        imagen: '/assets/productos/Herramientas para fontanería.jpg',
      },
      {
        nombre: 'Llanas y espátulas',
        categoria: 'Herramientas para Construcción e instaladores',
        imagen: '/assets/productos/Llanas y espatulas.jpg',
      },
      {
        nombre: 'Niveles',
        categoria: 'Herramientas para Construcción e instaladores',
        imagen: '/assets/productos/Niveles.jpg',
      },
      {
        nombre: 'Palas para construcción',
        categoria: 'Herramientas para Construcción e instaladores',
        imagen: '/assets/productos/Palas para construcción.jpg',
      },
      {
        sinonimos: 'Paletas',
        nombre: 'Palustres',
        categoria: 'Herramientas para Construcción e instaladores',
        imagen: '/assets/productos/Palustres.jpg',
      },
      {
        nombre: 'Pelacables y cortacables',
        categoria: 'Herramientas para Construcción e instaladores',
        imagen: '/assets/productos/Pelacables y cortacables.jpg',
      },
      {
        sinonimos: 'Picos',
        nombre: 'Picas',
        categoria: 'Herramientas para Construcción e instaladores',
        imagen: '/assets/productos/Picas.jpg',
      },
      {
        nombre: 'Brocas para madera',
        categoria: 'Herramientas para madera y carpinteria',
        imagen: '/assets/productos/Brocas para madera.jpg',
      },
      {
        nombre: 'Cuchillas y discos para madera',
        categoria: 'Herramientas para madera y carpinteria',
        imagen: '/assets/productos/Cuchillas y discos para madera.jpg',
      },
      {
        nombre: 'Fresas para madera',
        categoria: 'Herramientas para madera y carpinteria',
        imagen: '/assets/productos/Fresas para madera.jpg',
      },
      {
        nombre: 'Herramientas manuales para carpintería',
        categoria: 'Herramientas para madera y carpinteria',
        imagen: '/assets/productos/Herramientas manuales para carpintería.jpg',
      },
      {
        nombre: 'Hojas y sierras para madera',
        categoria: 'Herramientas para madera y carpinteria',
        imagen: '/assets/productos/Hojas y sierras para madera.jpg',
      },
      {
        nombre: 'Manguera aire',
        categoria: 'Mangueras',
        imagen: '/assets/productos/Manguera aire.jpg',
      },
      {
        nombre: 'Manguera cristal',
        categoria: 'Mangueras',
        imagen: '/assets/productos/Manguera cristal.jpg',
      },
      {
        nombre: 'Manguera gas',
        categoria: 'Mangueras',
        imagen: '/assets/productos/Manguera gas.jpg',
      },
      {
        nombre: 'Manguera jardín',
        categoria: 'Mangueras',
        imagen: '/assets/productos/Manguera jardín.jpg',
      },
      {
        nombre: 'Manguera lavadora',
        categoria: 'Mangueras',
        imagen: '/assets/productos/Manguera lavadora.jpg',
      },
      {
        nombre: 'Carretillas de obras',
        categoria: 'Máquinas manuales para construcción y obras públicas',
        imagen: '/assets/productos/Carretillas de obras.jpg',
      },
      {
        nombre: 'Cortadoras de cerámica',
        categoria: 'Máquinas manuales para construcción y obras públicas',
        imagen: '/assets/productos/Cortadoras de cerámica.jpg',
      },
      {
        nombre: 'Taladros para construcción',
        categoria: 'Máquinas manuales para construcción y obras públicas',
        imagen: '/assets/productos/Taladros para construcción.jpg',
      },
      {
        nombre: 'Brocas para construcción',
        categoria: 'Materiales de desgaste para Construcción y obras públicas',
        imagen: '/assets/productos/Brocas para construcción.jpg',
      },
      {
        nombre: 'Punteros',
        categoria: 'Materiales de desgaste para Construcción y obras públicas',
        imagen: '/assets/productos/Punteros.jpg',
      },
      {
        nombre: 'Flexómetros y cintas métricas',
        categoria: 'Medición Dimensional',
        imagen: '/assets/productos/Flexómetros y cintas métricas.jpg',
      },
      {
        nombre: 'Medidores de ángulos, goniómetros e inclinómetros',
        categoria: 'Medición Dimensional',
        imagen:
          '/assets/productos/Medidores de ángulos, goniómetros e inclinómetros.jpg',
      },
      {
        nombre: 'Micrómetros de exteriores',
        categoria: 'Medición Dimensional',
        imagen: '/assets/productos/Micrómetros de exteriores.jpg',
      },
      {
        nombre: 'Micrómetros de interiores',
        categoria: 'Medición Dimensional',
        imagen: '/assets/productos/Micrómetros de interiores.jpg',
      },
      {
        nombre: 'Pies de rey',
        categoria: 'Medición Dimensional',
        imagen: '/assets/productos/Pies de rey.jpg',
      },
      {
        nombre: 'Adhesivos especiales',
        categoria: 'Productos de Fijación y sellado',
        imagen: '/assets/productos/Adhesivos especiales.jpg',
      },
      {
        nombre: 'Adhesivos instantáneos',
        categoria: 'Productos de Fijación y sellado',
        imagen: '/assets/productos/Adhesivos instantáneos.jpg',
      },
      {
        nombre: 'Adhesivos y sellantes para la construcción',
        categoria: 'Productos de Fijación y sellado',
        imagen:
          '/assets/productos/Adhesivos y sellantes para la construcción.jpg',
      },
      {
        nombre: 'Bandas y cintas adhesivas',
        categoria: 'Productos de Fijación y sellado',
        imagen: '/assets/productos/Bandas y cintas adhesivas.jpg',
      },
      {
        nombre: 'Clavos',
        categoria: 'Productos de Fijación y sellado',
        imagen: '/assets/productos/Clavos.jpg',
      },
      {
        nombre: 'Espuma de poliuretano',
        categoria: 'Productos de Fijación y sellado',
        imagen: '/assets/productos/Espuma de poliuretano.jpg',
      },
      {
        nombre: 'Fijadores de tornillos y roscas',
        categoria: 'Productos de Fijación y sellado',
        imagen: '/assets/productos/Fijadores de tornillos y roscas.jpg',
      },
      {
        nombre: 'Masillas',
        categoria: 'Productos de Fijación y sellado',
        imagen: '/assets/productos/Masillas.jpg',
      },
      {
        nombre: 'Morteros de sellado',
        categoria: 'Productos de Fijación y sellado',
        imagen: '/assets/productos/Morteros de sellado.jpg',
      },
      {
        nombre: 'Pastas para juntas',
        categoria: 'Productos de Fijación y sellado',
        imagen: '/assets/productos/Pastas para juntas.jpg',
      },
      {
        nombre: 'Pistolas de silicona',
        categoria: 'Productos de Fijación y sellado',
        imagen: '/assets/productos/Pistolas de silicona.jpg',
      },
      {
        nombre: 'Siliconas',
        categoria: 'Productos de Fijación y sellado',
        imagen: '/assets/productos/Siliconas.jpg',
      },
      {
        nombre: 'Cintas Flanche',
        categoria: 'Productos de Impermeabilización',
        imagen: '/assets/productos/Cintas Flanche.jpg',
      },
      {
        nombre: 'Emulsión',
        categoria: 'Productos de Impermeabilización',
        imagen: '/assets/productos/Emulsión.jpg',
      },
      {
        nombre: 'Estuco plástico',
        categoria: 'Productos de Impermeabilización',
        imagen: '/assets/productos/Estuco plástico.jpg',
      },
      {
        nombre: 'Inmunizante',
        categoria: 'Productos de Impermeabilización',
        imagen: '/assets/productos/Inmunizante.jpg',
      },
      {
        nombre: 'Desatascadores',
        categoria: 'Productos para limpieza profesional',
        imagen: '/assets/productos/Desatascadores.jpg',
      },
      {
        nombre: 'Desengrasantes',
        categoria: 'Productos para limpieza profesional',
        imagen: '/assets/productos/Desengrasantes.jpg',
      },
      {
        nombre: 'Rejillas cúpula',
        categoria: 'Rejillas',
        imagen: '/assets/productos/Rejillas cupula.jpg',
      },
      {
        nombre: 'Rejillas disco',
        categoria: 'Rejillas',
        imagen: '/assets/productos/Rejillas disco.jpg',
      },
      {
        nombre: 'Rejillas planas',
        categoria: 'Rejillas',
        imagen: '/assets/productos/Rejillas planas.jpg',
      },
      {
        nombre: 'Rejillas sifón',
        categoria: 'Rejillas',
        imagen: '/assets/productos/Rejillas sifon.jpg',
      },
      {
        nombre: 'Rejillas ventilación',
        categoria: 'Rejillas',
        imagen: '/assets/productos/Rejillas ventilacion.jpg',
      },
      {
        nombre: 'Rodachinas andamios',
        categoria: 'Rodamientos y Ruedas',
        imagen: '/assets/productos/Rodachinas andamios.jpg',
      },
      {
        nombre: 'Rodachinas industriales',
        categoria: 'Rodamientos y Ruedas',
        imagen: '/assets/productos/Rodachinas industriales.jpg',
      },
      {
        nombre: 'Rodachinas Médicas',
        categoria: 'Rodamientos y Ruedas',
        imagen: '/assets/productos/Rodachinas medicas.jpg',
      },
      {
        nombre: 'Rodachinas muebles',
        categoria: 'Rodamientos y Ruedas',
        imagen: '/assets/productos/Rodachinas muebles.jpg',
      },
      {
        nombre: 'Accesorios Bronce',
        categoria: 'Tuberías y accesorios',
        imagen: '/assets/productos/Accesorios Bronce.jpg',
      },
      {
        nombre: 'Accesorios de cobre',
        categoria: 'Tuberías y accesorios',
        imagen: '/assets/productos/Accesorios de cobre.jpg',
      },
      {
        nombre: 'Accesorios galvanizados',
        categoria: 'Tuberías y accesorios',
        imagen: '/assets/productos/Accesorios galvanizados.jpg',
      },
      {
        nombre: 'Accesorios polietileno',
        categoria: 'Tuberías y accesorios',
        imagen: '/assets/productos/Accesorios polietileno.jpg',
      },
      {
        nombre: 'Accesorios PVC',
        categoria: 'Tuberías y accesorios',
        imagen: '/assets/productos/Accesorios PVC.jpg',
      },
      {
        nombre: 'Accesorios rápidos',
        categoria: 'Tuberías y accesorios',
        imagen: '/assets/productos/Accesorios rapidos.jpg',
      },
      {
        nombre: 'Racores bronce',
        categoria: 'Tuberías y accesorios',
        imagen: '/assets/productos/Racores bronce.jpg',
      },
      {
        nombre: 'Tubería en acero',
        categoria: 'Tuberías y accesorios',
        imagen: '/assets/productos/Tubería en acero.jpg',
      },
      {
        nombre: 'Tuberías de aluminio',
        categoria: 'Tuberías y accesorios',
        imagen: '/assets/productos/Tuberías de aluminio.jpg',
      },
      {
        nombre: 'Tuberías de cobre',
        categoria: 'Tuberías y accesorios',
        imagen: '/assets/productos/Tuberías de cobre.jpg',
      },
      {
        nombre: 'Tuberías galvanizada',
        categoria: 'Tuberías y accesorios',
        imagen: '/assets/productos/Tuberías galvanizada.jpg',
      },
      {
        nombre: 'Tuberías PVC',
        categoria: 'Tuberías y accesorios',
        imagen: '/assets/productos/Tuberías PVC.jpg',
      },
      {
        nombre: 'Escobas y mangos',
        categoria: 'Utensilios de limpieza',
        imagen: '/assets/productos/Escobas y mangos.jpg',
      },
      {
        nombre: 'Válvula bola',
        categoria: 'Válvulas',
        imagen: '/assets/productos/Válvula bola.jpg',
      },
      {
        nombre: 'Válvula cheque',
        categoria: 'Válvulas',
        imagen: '/assets/productos/Válvula cheque.jpg',
      },
      {
        nombre: 'Válvula pvc',
        categoria: 'Válvulas',
        imagen: '/assets/productos/Válvula pvc.jpg',
      },
      {
        nombre: 'Válvulas cortina',
        categoria: 'Válvulas',
        imagen: '/assets/productos/Válvulas cortina.jpg',
      },
      {
        nombre: 'Básculas',
        categoria: 'Varios Ferreteria',
        imagen: '/assets/productos/Básculas.jpg',
      },
      {
        nombre: 'Clavos Herradura',
        categoria: 'Varios Ferreteria',
        imagen: '/assets/productos/Clavos Herradura.jpg',
      },
      {
        nombre: 'Cordeles',
        categoria: 'Varios Ferreteria',
        imagen: '/assets/productos/Cordeles.jpg',
      },
      {
        nombre: 'Electrobombas',
        categoria: 'Varios Ferreteria',
        imagen: '/assets/productos/Electrobombas.jpg',
      },
      {
        nombre: 'Elementos para pesca',
        categoria: 'Varios Ferreteria',
        imagen: '/assets/productos/Elementos para pesca.jpg',
      },
      {
        nombre: 'Herraduras',
        categoria: 'Varios Ferreteria',
        imagen: '/assets/productos/Herraduras.jpg',
      },
      {
        nombre: 'Manilas',
        categoria: 'Varios Ferreteria',
        imagen: '/assets/productos/Manilas.jpg',
      },
      {
        nombre: 'Nylon',
        categoria: 'Varios Ferreteria',
        imagen: '/assets/productos/Nylon.jpg',
      },
      {
        nombre: 'Piola',
        categoria: 'Varios Ferreteria',
        imagen: '/assets/productos/Piola.jpg',
      },
      {
        nombre: 'Poleas Motor',
        categoria: 'Varios Ferreteria',
        imagen: '/assets/productos/Poleas Motor.jpg',
      },
      {
        nombre: 'Poleas para carga',
        categoria: 'Varios Ferreteria',
        imagen: '/assets/productos/Poleas para carga.jpg',
      },
    ];
  }
}
