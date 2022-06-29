var myMap;
var myCollection;
var ctr=[68.970663, 33.074909]; //Координаты города Мурманск
//Инициализация карты
ymaps.ready(init);

//Функция инициализации карты в стартовом состоянии
function init() {
  document.getElementById('map').style.display = 'block';

  myMap = new ymaps.Map('map', {
    center: ctr, // Мурманск
    zoom: 11
  },
  {
    searchControlProvider: 'yandex#search'
  });
}
//Функция возвращения к стартовому состоянию карты
function backToMap() {
  if (myMap!=null) myMap.destroy();
  init();
}
//Запрос на отрисовку территории Мурманска
function getTerritory()
{
  if (myMap!=null) myMap.destroy();
  ymaps.ready(territoryInit());
}
//Функция отрисовки территории Мурманска
function territoryInit()
{
  document.getElementById('map').style.display = 'block';

  myMap = new ymaps.Map('map', {
    center: ctr, // Мурманск
    zoom: 11
  },
  {
    searchControlProvider: 'yandex#search'
  });
    // Создаем многоугольник, используя класс GeoObject.
    var myGeoObject = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
                // Координаты вершин внешнего контура.
                [
                    [68.978828, 32.940866],[68.946811, 32.937645],[68.949923, 32.968808],[68.947433, 32.965778],
                    [68.944495, 32.966440],[68.941996, 32.969528],[68.940052, 32.975190],[68.934093, 32.936362],
                    [68.902068, 32.932781],[68.895124, 33.072504],[68.889283, 33.064075],[68.888182, 33.081023],
                    [68.886416, 33.079036],[68.882912, 33.083555],[68.885778, 33.096274],[68.884319, 33.104100],
                    [68.886637, 33.109520],[68.886871, 33.113784],[68.887690, 33.113621],[68.939336, 33.262386],
                    [68.952887, 33.265610]/*первомай-октябрь*/,[68.953528, 33.294031],[68.997069, 33.288467],[68.997551, 33.207662]/* октябрьский-лениниский*/,
                    [69.025166, 33.141824],[69.024349, 33.125960],[69.022840, 33.120626],[69.024650, 33.112767],
                    [69.029446, 33.116898],[69.029446, 33.116898],[69.029446, 33.116898],[69.041152, 33.145036],
                    [69.040942, 33.145024],[69.040573, 33.157836],[69.039519, 33.162991],[69.036091, 33.166673],
                    [69.035564, 33.169618],[69.035775, 33.173153],[69.039518, 33.178606],[69.041199, 33.186769],
                    [69.041226, 33.188288],[69.040338, 33.190126],[69.040227, 33.201860],[69.042546, 33.203217],
                    [69.043477, 33.213829],[69.045809, 33.221988],[69.045694, 33.229577],[69.047023, 33.235231],
                    [69.047302, 33.237352],[69.048380, 33.238035],[69.048734, 33.240504],[69.049155, 33.241317],
                    [69.048658, 33.243595],[69.047587, 33.251206],[69.047797, 33.251478],[69.048740, 33.251700],
                    [69.049345, 33.247752],[69.051165, 33.250057],[69.054345, 33.245464],[69.063374, 33.251245],
                    [69.063665, 33.250757],[69.062919, 33.244602],[69.060799, 33.238182],[69.055424, 33.236877],
                    [69.054679, 33.233243],[69.053568, 33.231903],[69.053934, 33.227564],[69.053934, 33.227564],
                    [69.056723, 33.228258],[69.058178, 33.231950],[69.059477, 33.231710],[69.059486, 33.228942],
                    [69.061646, 33.227458],[69.061541, 33.226676],[69.063118, 33.218562],[69.062513, 33.215097],
                    [69.059541, 33.211958],[69.059778, 33.209647],[69.057132, 33.206096],[69.056780, 33.207149],
                    [69.054714, 33.204263],[69.050529, 33.203867],[69.049742, 33.202487],[69.049054, 33.198861],
                    [69.049272, 33.198595],[69.049441, 33.199643],[69.051953, 33.199559],[69.052113, 33.197769],
                    [69.052904, 33.197154],[69.056604, 33.195487],[69.057234, 33.193861],[69.058473, 33.193358],
                    [69.059050, 33.192594],[69.059728, 33.188303],[69.059336, 33.183111],[69.059546, 33.171094],
                    [69.060444, 33.168987],[69.061997, 33.158567],[69.060922, 33.155895],[69.060726, 33.153129],
                    [69.058863, 33.151459],[69.057262, 33.144512],[69.057668, 33.138474],[69.053137, 33.126851],
                    [69.052171, 33.118608],[69.052840, 33.111327],[69.051445, 33.085070],[69.051749, 33.084330],
                    [69.048843, 33.072073],[69.042622, 33.070076],[68.986431, 33.021750]/*ленин-первомай */,[68.986310, 33.019851],
                    [68.986954, 33.019875],[68.985720, 33.004193],[68.980539, 32.964412],[68.978828, 32.940866]
                ]
            ],
            // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
            fillRule: "nonZero"
        },
        // Описываем свойства геообъекта.
        properties:{
            // Содержимое балуна.
            balloonContent: "Территория города Мурманск"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#FFFFFF',
        // Прозрачность заливки.
        fillOpacity: 0.2,
        // Цвет обводки.
        strokeColor: '#000000',
        // Прозрачность обводки.
        strokeOpacity: 1,
        // Ширина обводки.
        strokeWidth: 3,
        // Стиль обводки.
        strokeStyle: 'shortdash'
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myGeoObject);
}
//Запрос на отрисовку округов г.Мурманск
function getDistricts()
{
  if (myMap!=null) myMap.destroy();
  ymaps.ready(districtsInit());
}
//Функция отрисовки округов г.Мурманск
function districtsInit()
{
  document.getElementById('map').style.display = 'block';

  myMap = new ymaps.Map('map', {
    center: ctr, // Мурманск
    zoom: 11
  },
  {
    searchControlProvider: 'yandex#search'
  });
    // Создаем многоугольник, используя класс GeoObject.
    var pervomai = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
                // Координаты вершин внешнего контура.
                [
                  [68.986431, 33.021750] /*ленинского - первомайского*/,[68.986310, 33.019851],
                  [68.986954, 33.019875],[68.985720, 33.004193],[68.980539, 32.964412],[68.978828, 32.940866],
                  [68.946811, 32.937645],[68.949923, 32.968808],[68.947433, 32.965778],
                  [68.944495, 32.966440],[68.941996, 32.969528],[68.940052, 32.975190],[68.934093, 32.936362],
                  [68.902068, 32.932781],[68.895124, 33.072504],[68.889283, 33.064075],[68.888182, 33.081023],
                  [68.886416, 33.079036],[68.882912, 33.083555],[68.885778, 33.096274],[68.884319, 33.104100],
                  [68.886637, 33.109520],[68.886871, 33.113784],[68.887690, 33.113621],[68.939336, 33.262386],
                  [68.952887, 33.265610]/*первомайский - октяборьский*/,[68.954170, 33.263702], [68.958320, 33.247102],
                  [68.958090, 33.243004],[68.960409, 33.239313],[68.960564, 33.236738],[68.959737, 33.232755],
                  [68.961285, 33.216625],[68.961718, 33.205542],[68.961480, 33.201753],[68.960459, 33.195787],
                  [68.957907, 33.187074],[68.956006, 33.178114],[68.954819, 33.175272],[68.952559, 33.165983],
                  [68.952097, 33.159838],[68.950915, 33.153264],[68.950639, 33.147178],[68.949404, 33.141620],
                  [68.949568, 33.134243],[68.948514, 33.131022],[68.948557, 33.129100],[68.945101, 33.122250],
                  [68.944798, 33.117563],[68.946527, 33.117323],[68.947222, 33.111962],[68.947222, 33.111962],
                  [68.950188, 33.089912],[68.950188, 33.089912],[68.954666, 33.063065],[68.967525, 33.064184]/*все округа*/,
                  [68.967633, 33.058237],[68.971159, 33.056058],[68.983729, 33.027776],[68.986431, 33.021750]
                ]
            ],
            // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
            fillRule: "nonZero"
        },
        // Описываем свойства геообъекта.
        properties:{
            // Содержимое балуна.
            balloonContent: "Территория Первомайского округа"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#FF0000',
        // Прозрачность заливки.
        fillOpacity: 0.2,
        // Цвет обводки.
        strokeColor: '#000000',
        // Прозрачность обводки.
        strokeOpacity: 1,
        // Ширина обводки.
        strokeWidth: 3,
        // Стиль обводки.
        strokeStyle: 'solid'
    });
    var octyabr = new ymaps.GeoObject({
      // Описываем геометрию геообъекта.
      geometry: {
          // Тип геометрии - "Многоугольник".
          type: "Polygon",
          // Указываем координаты вершин многоугольника.
          coordinates: [
              // Координаты вершин внешнего контура.
              [
                [68.952887, 33.265610]/*первомайский - октяборьский*/,[68.954170, 33.263702], [68.958320, 33.247102],
                [68.958090, 33.243004],[68.960409, 33.239313],[68.960564, 33.236738],[68.959737, 33.232755],
                [68.961285, 33.216625],[68.961718, 33.205542],[68.961480, 33.201753],[68.960459, 33.195787],
                [68.957907, 33.187074],[68.956006, 33.178114],[68.954819, 33.175272],[68.952559, 33.165983],
                [68.952097, 33.159838],[68.950915, 33.153264],[68.950639, 33.147178],[68.949404, 33.141620],
                [68.949568, 33.134243],[68.948514, 33.131022],[68.948557, 33.129100],[68.945101, 33.122250],
                [68.944798, 33.117563],[68.946527, 33.117323],[68.947222, 33.111962],[68.947222, 33.111962],
                [68.950188, 33.089912],[68.950188, 33.089912],[68.954666, 33.063065],[68.967525, 33.064184]/*все округа*/,
                [68.979920, 33.092779],[68.983962, 33.092665],[68.982663, 33.095728],[68.986660, 33.094614],
                [68.984761, 33.097676],[68.983562, 33.111039],[68.983562, 33.111039],[68.985161, 33.145279],
                [68.989785, 33.164262],[68.988857, 33.166743],[68.989097, 33.169196],[68.994250, 33.174567],
                [68.993112, 33.184839],[68.993329, 33.186199],[68.995239, 33.184857],[68.997074, 33.190379],
                [68.997104, 33.199031],[68.997950, 33.201095],[68.997551, 33.207662]/* октябрьский-лениниский*/,[68.997069, 33.288467],[68.953528, 33.294031],[68.952887, 33.265610]/*первомай-октябрь*/                   
              ]
          ],
          // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
          fillRule: "nonZero"
      },
      // Описываем свойства геообъекта.
      properties:{
          // Содержимое балуна.
          balloonContent: "Территория Октябрьского округа"
      }
  }, {
      // Описываем опции геообъекта.
      // Цвет заливки.
      fillColor: '#00FF00',
      // Прозрачность заливки.
      fillOpacity: 0.2,
      // Цвет обводки.
      strokeColor: '#000000',
      // Прозрачность обводки.
      strokeOpacity: 1,
      // Ширина обводки.
      strokeWidth: 3,
      // Стиль обводки.
      strokeStyle: 'solid'
  });

  var lenin = new ymaps.GeoObject({
    // Описываем геометрию геообъекта.
    geometry: {
        // Тип геометрии - "Многоугольник".
        type: "Polygon",
        // Указываем координаты вершин многоугольника.
        coordinates: [
            // Координаты вершин внешнего контура.
            [
              [68.967525, 33.064184]/*все округа*/,
              [68.979920, 33.092779],[68.983962, 33.092665],[68.982663, 33.095728],[68.986660, 33.094614],
              [68.984761, 33.097676],[68.983562, 33.111039],[68.983562, 33.111039],[68.985161, 33.145279],
              [68.989785, 33.164262],[68.988857, 33.166743],[68.989097, 33.169196],[68.994250, 33.174567],
              [68.993112, 33.184839],[68.993329, 33.186199],[68.995239, 33.184857],[68.997074, 33.190379],
              [68.997104, 33.199031],[68.997950, 33.201095],[68.997551, 33.207662]/* октябрьский-лениниский*/,
              [68.997551, 33.207662]/* октябрьский-лениниский*/,
              [69.025166, 33.141824],[69.024349, 33.125960],[69.022840, 33.120626],[69.024650, 33.112767],
              [69.029446, 33.116898],[69.029446, 33.116898],[69.029446, 33.116898],[69.041152, 33.145036],
              [69.040942, 33.145024],[69.040573, 33.157836],[69.039519, 33.162991],[69.036091, 33.166673],
              [69.035564, 33.169618],[69.035775, 33.173153],[69.039518, 33.178606],[69.041199, 33.186769],
              [69.041226, 33.188288],[69.040338, 33.190126],[69.040227, 33.201860],[69.042546, 33.203217],
              [69.043477, 33.213829],[69.045809, 33.221988],[69.045694, 33.229577],[69.047023, 33.235231],
              [69.047302, 33.237352],[69.048380, 33.238035],[69.048734, 33.240504],[69.049155, 33.241317],
              [69.048658, 33.243595],[69.047587, 33.251206],[69.047797, 33.251478],[69.048740, 33.251700],
              [69.049345, 33.247752],[69.051165, 33.250057],[69.054345, 33.245464],[69.063374, 33.251245],
              [69.063665, 33.250757],[69.062919, 33.244602],[69.060799, 33.238182],[69.055424, 33.236877],
              [69.054679, 33.233243],[69.053568, 33.231903],[69.053934, 33.227564],[69.053934, 33.227564],
              [69.056723, 33.228258],[69.058178, 33.231950],[69.059477, 33.231710],[69.059486, 33.228942],
              [69.061646, 33.227458],[69.061541, 33.226676],[69.063118, 33.218562],[69.062513, 33.215097],
              [69.059541, 33.211958],[69.059778, 33.209647],[69.057132, 33.206096],[69.056780, 33.207149],
              [69.054714, 33.204263],[69.050529, 33.203867],[69.049742, 33.202487],[69.049054, 33.198861],
              [69.049272, 33.198595],[69.049441, 33.199643],[69.051953, 33.199559],[69.052113, 33.197769],
              [69.052904, 33.197154],[69.056604, 33.195487],[69.057234, 33.193861],[69.058473, 33.193358],
              [69.059050, 33.192594],[69.059728, 33.188303],[69.059336, 33.183111],[69.059546, 33.171094],
              [69.060444, 33.168987],[69.061997, 33.158567],[69.060922, 33.155895],[69.060726, 33.153129],
              [69.058863, 33.151459],[69.057262, 33.144512],[69.057668, 33.138474],[69.053137, 33.126851],
              [69.052171, 33.118608],[69.052840, 33.111327],[69.051445, 33.085070],[69.051749, 33.084330],
              [69.048843, 33.072073],[69.042622, 33.070076],[68.986431, 33.021750]/*ленин-первомай */,  
              [68.967525, 33.064184]/*все округа*/,[68.986431, 33.021750],[68.983729, 33.027776],[68.971159, 33.056058],[68.967633, 33.058237],             
            ]
        ],
        // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
        fillRule: "nonZero"
    },
    // Описываем свойства геообъекта.
    properties:{
        // Содержимое балуна.
        balloonContent: "Территория Ленинского округа"
    }
}, {
    // Описываем опции геообъекта.
    // Цвет заливки.
    fillColor: '#0000FF',
    // Прозрачность заливки.
    fillOpacity: 0.2,
    // Цвет обводки.
    strokeColor: '#000000',
    // Прозрачность обводки.
    strokeOpacity: 1,
    // Ширина обводки.
    strokeWidth: 3,
    // Стиль обводки.
    strokeStyle: 'solid'
});
    
    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(pervomai);
    myMap.geoObjects.add(octyabr);
    myMap.geoObjects.add(lenin);
}
//Запрос на постановку метки морского порта
function getPort()
{
  if (myMap!=null) myMap.destroy();
  ymaps.ready(portInit());
}
//Функция постановки метки морского порта
function portInit()
{
  document.getElementById('map').style.display = 'block';

  myMap = new ymaps.Map('map', {
    center: [68.978908, 33.067686],
    zoom: 11
  },
  {
    searchControlProvider: 'yandex#search'
  });
  myPlaceMark=new ymaps.Placemark(
    [68.978908, 33.067686],
    {
      balloonContentHeader: 'Мурманский морской торговый порт'
    },
    {
      preset:'islands#lightBlueWaterwayIcon'
    });
  myMap.geoObjects.add(myPlaceMark);
}
//Запрос на постановку метки аэропорта
function getAirPort()
{
  if (myMap!=null) myMap.destroy();
  ymaps.ready(airPortInit());
}
//Функция постановки метки аэропорта
function airPortInit()
{
  document.getElementById('map').style.display = 'block';

  myMap = new ymaps.Map('map', {
    center: [68.785064, 32.758047], // Мурманск
    zoom: 11
  },
  {
    searchControlProvider: 'yandex#search'
  });
  myPlaceMark=new ymaps.Placemark(
    [68.785064, 32.758047],
    {
      balloonContentHeader: 'Аэропорт города Мурманск',
      balloonContentBody: 'Международный аэропорт Мурманск им. Николая II'
    },
    {
      preset:'islands#lightBlueAirportIcon'
    });
  myMap.geoObjects.add(myPlaceMark);
}
//Запрос на постановку меток мед. учреждений
function hospitalMap() {
  if (myMap != null) myMap.destroy();
  ymaps.ready(hospitalInit);
}
//Функция постановки меток мед. учреждений
async function hospitalInit() 
{
  document.getElementById('map').style.display = 'block';

  myMap = new ymaps.Map('map', 
  {
    center: ctr, // Мурманск
    zoom: 11
  },
  {
    searchControlProvider: 'yandex#search'
  });
  clusterer = new ymaps.Clusterer(
  {
    preset: 'islands#invertedLightBlueClusterIcons',
    groupByCoordinates: false,
    clusterDisableClickZoom: true,
    clusterHideIconOnBalloonOpen: false,
    geoObjectHideIconOnBalloonOpen: false
  });
  let res = await getFromServer('hospital')
    geoObjects = [];
    document.getElementById("HOSPITALnum").innerHTML = res.length;
  for(var i = 0, len = res.length; i < len; i++) 
  {
    if (res[i].Extra=="")
    {
    geoObjects[i] = new ymaps.Placemark(
      [res[i].Coordinate1,res[i].Coordinate2],  
      {
        balloonContentBody: res[i].Name,
        clusterCaption: 'Медецинское учреждение № <strong>' + (i+1) + '</strong>'
      },
      {
        preset: 'islands#lightBlueMedicalIcon'
      });
    }
    else
    {
      geoObjects[i] = new ymaps.Placemark(
        [res[i].Coordinate1,res[i].Coordinate2], 
        {
          balloonContentBody: res[i].Name,
          balloonContentFooter: res[i].Extra,
          clusterCaption: 'Медецинское учреждение № <strong>' + (i+1) + '</strong>'
        },
        {
          preset: 'islands#lightBlueMedicalIcon'
        });
    }
  }
  clusterer.options.set(
    {
      gridSize: 80,
      clusterDisableClickZoom: true
    });
  clusterer.add(geoObjects);
  myMap.geoObjects.add(clusterer);
}
//Запрос на постановку меток ПОО
function getPOO()
{
  if (myMap != null) myMap.destroy();
  ymaps.ready(pooInit);
}
//Функция постановки меток ПОО
async function pooInit()
{
  document.getElementById('map').style.display = 'block';

  myMap = new ymaps.Map('map', 
  {
    center: ctr, // Мурманск
    zoom: 11
  },
  {
    searchControlProvider: 'yandex#search'
  });
  clusterer = new ymaps.Clusterer(
  {
    preset: 'islands#invertedLightBlueClusterIcons',
    groupByCoordinates: false,
    clusterDisableClickZoom: true,
    clusterHideIconOnBalloonOpen: false,
    geoObjectHideIconOnBalloonOpen: false
  });
    let res = await getFromServer('poo');
    document.getElementById("POOnum").innerHTML = res.length;
  geoObjects=[];
  for(var i = 0, len = res.length; i < len; i++) 
  {
    if (res[i].Extra=="")
    {
    geoObjects[i] = new ymaps.Placemark(
      [res[i].Coordinate1,res[i].Coordinate2],  
      {
        balloonContentBody: res[i].Name,
        clusterCaption: 'Объект № <strong>' + (i+1) + '</strong>'
      },
      {
        preset: 'islands#lightBlueAttentionIcon'
      });
    }
    else
    {
      geoObjects[i] = new ymaps.Placemark(
        [res[i].Coordinate1,res[i].Coordinate2],   
        {
          balloonContentBody: res[i].Name,
          balloonContentFooter: res[i].Extra,
          clusterCaption: 'Объект № <strong>' + (i+1) + '</strong>'
        },
        {
          preset: 'islands#lightBlueAttentionIcon'
        });
    }
  }
  clusterer.options.set(
    {
      gridSize: 80,
      clusterDisableClickZoom: true
    });
  clusterer.add(geoObjects);
  myMap.geoObjects.add(clusterer);
}
//Запрос на постановку меток КВО
function getKVO()
{
  if (myMap != null) myMap.destroy();
  ymaps.ready(kvoInit);
}
//Функция постановки меток КВО
async function kvoInit()
{
  document.getElementById('map').style.display = 'block';
  myMap = new ymaps.Map('map', 
  {
    center: ctr, // Мурманск
    zoom: 11
  },
  {
    searchControlProvider: 'yandex#search'
  });
  clusterer = new ymaps.Clusterer(
  {
    preset: 'islands#invertedLightBlueClusterIcons',
    groupByCoordinates: false,
    clusterDisableClickZoom: true,
    clusterHideIconOnBalloonOpen: false,
    geoObjectHideIconOnBalloonOpen: false
  });
    let res = await getFromServer('kvo');
    document.getElementById("KVOnum").innerHTML = res.length;
  geoObjects=[];
  for(var i = 0, len = res.length; i < len; i++) 
  {
    if (res[i].Extra=="")
    {
    geoObjects[i] = new ymaps.Placemark(
      [res[i].Coordinate1,res[i].Coordinate2], 
      {
        balloonContentBody: res[i].Name,
        clusterCaption: 'Объект № <strong>' + (i+1) + '</strong>'
      },
      {
        preset: 'islands#lightBlueAttentionIcon'
      });
    }
    else
    {
      geoObjects[i] = new ymaps.Placemark(
        [res[i].Coordinate1,res[i].Coordinate2], 
        {
          balloonContentBody: res[i].Name,
          balloonContentFooter: res[i].Extra,
          clusterCaption: 'Объект № <strong>' + (i+1) + '</strong>'
        },
        {
          preset: 'islands#lightBlueAttentionIcon'
        });
    }
    
  }
  clusterer.options.set(
    {
      gridSize: 80,
      clusterDisableClickZoom: true
    });
  clusterer.add(geoObjects);
  myMap.geoObjects.add(clusterer);

}
//Запрос на постановку меток мостов
function getBridges()
{
  if (myMap != null) myMap.destroy();
  ymaps.ready(bridgesInit);
}
//Функция постановки меток мостов
async function bridgesInit()
{
  document.getElementById('map').style.display = 'block';

  myMap = new ymaps.Map('map', 
  {
    center: ctr, // Мурманск
    zoom: 11
  },
  {
    searchControlProvider: 'yandex#search'
  });
  clusterer = new ymaps.Clusterer(
  {
    preset: 'islands#invertedLightBlueClusterIcons',
    groupByCoordinates: false,
    clusterDisableClickZoom: true,
    clusterHideIconOnBalloonOpen: false,
    geoObjectHideIconOnBalloonOpen: false
  });
    let res = await getFromServer('bridg');
    document.getElementById("BRIDGESnum").innerHTML = res.length;
  geoObjects=[];
  for(var i = 0, len = res.length; i < len; i++) 
  {
    if (res[i].Extra=="")
    {
    geoObjects[i] = new ymaps.Placemark(
      [res[i].Coordinate1,res[i].Coordinate2],  
      {
        balloonContentBody: res[i].Name,
        clusterCaption: 'Мост № <strong>' + (i+1) + '</strong>'
      },
      {
        preset: 'islands#lightBlueAutoIcon'
      });
    }
    else
    {
      geoObjects[i] = new ymaps.Placemark(
        [res[i].Coordinate1,res[i].Coordinate2],  
        {
          balloonContentBody: res[i].Name,
          balloonContentFooter: res[i].Extra,
          clusterCaption: 'Мост № <strong>' + (i+1) + '</strong>'
        },
        {
          preset: 'islands#lightBlueAutoIcon'
        });
    }
  }
  clusterer.options.set(
    {
      gridSize: 80,
      clusterDisableClickZoom: true
    });
  clusterer.add(geoObjects);
  myMap.geoObjects.add(clusterer);

}
//Запрос на постановку меток инфекционных стационаров
function getInfec() {
  if (myMap != null) myMap.destroy();
  ymaps.ready(infecInit);
}
//Функция постановки меток инфекционных стационаров
async function infecInit() 
{
  document.getElementById('map').style.display = 'block';

  myMap = new ymaps.Map('map', 
  {
    center: ctr, // Мурманск
    zoom: 11
  },
  {
    searchControlProvider: 'yandex#search'
  });
  clusterer = new ymaps.Clusterer(
  {
    preset: 'islands#invertedLightBlueClusterIcons',
    groupByCoordinates: false,
    clusterDisableClickZoom: true,
    clusterHideIconOnBalloonOpen: false,
    geoObjectHideIconOnBalloonOpen: false
  });
    let res = await getFromServer('infec');
    if (res != -1) {
        document.getElementById("INFECnum").innerHTML = res.length;
        geoObjects = [];
        for (var i = 0, len = res.length; i < len; i++) {
            if (res[i].Extra == "") 
            {
                geoObjects[i] = new ymaps.Placemark(
                  [res[i].Coordinate1,res[i].Coordinate2],
                    {
                        balloonContentBody: res[i].Name,
                        clusterCaption: 'Медецинское учреждение № <strong>' + (i + 1) + '</strong>'
                    },
                    {
                        preset: 'islands#lightBlueMedicalIcon'
                    });
            }
            else {
                geoObjects[i] = new ymaps.Placemark(
                  [res[i].Coordinate1,res[i].Coordinate2],
                    {
                        balloonContentBody: res[i].Name,
                        balloonContentFooter: res[i].Extra,
                        clusterCaption: 'Медецинское учреждение № <strong>' + (i + 1) + '</strong>'
                    },
                    {
                        preset: 'islands#lightBlueMedicalIcon'
                    });
            }
        }
        clusterer.options.set(
            {
                gridSize: 80,
                clusterDisableClickZoom: true
            });
        clusterer.add(geoObjects);
        myMap.geoObjects.add(clusterer);
    }
    else
      alert("Не удалось загрузить объекты");
  
}
//Запрос к серверу за получением списка координат
async function getFromServer(name)
{
  let response = await fetch(/*`https://kazan1.herokuapp.com/objects?query=${name}`*/`http://localhost:5000/objects?query=${name}`,
 {
    method: 'GET',
    headers:
    {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }).catch(err => alert("Кажется что-то пошло не так"));
if (response.ok) 
{
        let res = await response.json();
        return res;
    }
}
