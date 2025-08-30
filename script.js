// Dane stacji BP w Polsce - wszystkie 88 stacji
const stacjeBP = [
    { nazwa: "Krzywousty", adres: "Bolesława Krzywoustego 129", miasto: "Poznań", kod: "61-144" },
    { nazwa: "Lipnik", adres: "Stargardzka 1", miasto: "Lipnik", kod: "73-100" },
    { nazwa: "Fordon", adres: "Fordońska 323", miasto: "Bydgoszcz", kod: "85-796" },
    { nazwa: "Port", adres: "Połęże 19A", miasto: "Gdańsk", kod: "80-720" },
    { nazwa: "Amber", adres: "Hutnicza 15A", miasto: "Gdynia", kod: "81-061" },
    { nazwa: "Chojny", adres: "Rzgocka 169", miasto: "Łódź", kod: "93-311" },
    { nazwa: "Praga", adres: "Al. Solidarności 13", miasto: "Warszawa", kod: "03-412" },
    { nazwa: "Reguły", adres: "aleja Powstańców Warszawy 17", miasto: "Michałowice", kod: "05-816" },
    { nazwa: "Słonecznik", adres: "Regulska 23", miasto: "Reguły", kod: "05-816" },
    { nazwa: "Żbik", adres: "Poznańska 69", miasto: "Pruszków", kod: "05-800" },
    { nazwa: "Tarnina", adres: "IGNACEGO MOSCICKIEGO 233", miasto: "Tarnów", kod: "33-100" },
    { nazwa: "Zamek", adres: "aleja Hugona Kołłątaja 105", miasto: "Będzin", kod: "42-500" },
    { nazwa: "Koral", adres: "Plebiscytowa", miasto: "Opole", kod: "45-360" },
    { nazwa: "Chemik", adres: "Stanisława Wyspiańskiego 51", miasto: "Kędzierzyn-Koźle", kod: "47-200" },
    { nazwa: "Kuźnia", adres: "Henryka Sienkiewicza 45", miasto: "Rybnik", kod: "44-203" },
    { nazwa: "Sztolnia", adres: "Nakielska 52", miasto: "Tarnowskie Góry", kod: "42-600" },
    { nazwa: "Romanów", adres: "Romanów 105E", miasto: "Romanów", kod: "42-260" },
    { nazwa: "Klon", adres: "Aleja Konstytucji 3 Maja 70", miasto: "Gorzów Wielkopolski", kod: "66-400" },
    { nazwa: "Promienna", adres: "Wojska Polskiego 17", miasto: "Jaworzno", kod: "43-600" },
    { nazwa: "Krak", adres: "Wielicka 22", miasto: "Kraków", kod: "30-552" },
    { nazwa: "Brda", adres: "Fordońska 48/50", miasto: "Bydgoszcz", kod: "85-719" },
    { nazwa: "Żuraw", adres: "Kard. S. Wyszyńskiego 3", miasto: "Olsztyn", kod: "10-457" },
    { nazwa: "Zagórze", adres: "Braci Mieroszewskich 2H", miasto: "Sosnowiec", kod: "41-219" },
    { nazwa: "Grobla", adres: "Grobla 75", miasto: "Gorzów Wielkopolski", kod: "66-400" },
    { nazwa: "Szyndzielnia", adres: "Partyzantów 102", miasto: "Bielsko-Biała", kod: "43-300" },
    { nazwa: "Sztygarka", adres: "Wrocławska 118", miasto: "Bytom", kod: "41-900" },
    { nazwa: "Strzelec", adres: "Wrocławska 106", miasto: "Opole", kod: "45-837" },
    { nazwa: "Trakt św. Wojciecha", adres: "Trakt św. Wojciecha 1", miasto: "Gdańsk", kod: "80-044" },
    { nazwa: "Ełk", adres: "Suwalska 40", miasto: "Ełk", kod: "19-300" },
    { nazwa: "Trybunał", adres: "Wojska Polskiego 100", miasto: "Piotrków Trybunalski", kod: "97-300" },
    { nazwa: "Lech", adres: "Andrzeja Struga 1", miasto: "Szczecin", kod: "70-784" },
    { nazwa: "Reden", adres: "Aleja Józefa Piłsudskiego 2J", miasto: "Dąbrowa Górnicza", kod: "41-300" },
    { nazwa: "Sowa", adres: "ul. Sienkiewicza 15", miasto: "Sieradz", kod: "98-200" },
    { nazwa: "Chaber", adres: "al. Wojska Polskiego 260", miasto: "Częstochowa", kod: "42-200" },
    { nazwa: "Wega", adres: "al. Marsz. Edwarda Śmigłego-Rydza 19", miasto: "Łódź", kod: "93-281" },
    { nazwa: "Młociny", adres: "ul. Arkuszowa 13", miasto: "Warszawa", kod: "01-934" },
    { nazwa: "Wirek", adres: "ul. 1 Maja 299", miasto: "Ruda Śląska", kod: "41-710" },
    { nazwa: "Karlik", adres: "ul. Strzelców Bytomskich 36", miasto: "Bytom", kod: "41-900" },
    { nazwa: "Różanka", adres: "ul. Katowicka 83", miasto: "Chorzów", kod: "41-500" },
    { nazwa: "Fort", adres: "ul. Łódzka 128", miasto: "Toruń", kod: "87-100" },
    { nazwa: "Klif", adres: "ul. Morska 40", miasto: "Gdynia", kod: "81-333" },
    { nazwa: "Kormoran", adres: "ul. Wincentego Pstrowskiego 20", miasto: "Olsztyn", kod: "10-602" },
    { nazwa: "Mazury", adres: "ul. Przemysłowa 2", miasto: "Ostróda", kod: "14-100" },
    { nazwa: "Wirynka", adres: "ul. Leśna 1", miasto: "Łęczyca", kod: "62-051" },
    { nazwa: "Perseusz", adres: "ul. Zwycięstwa 282", miasto: "Koszalin", kod: "75-653" },
    { nazwa: "Dworzec", adres: "ul. Warszawska 16", miasto: "Bielsko-Biała", kod: "43-300" },
    { nazwa: "Radzionków", adres: "ul. Strzelców Bytomskich 232", miasto: "Bytom", kod: "41-933" },
    { nazwa: "Czech", adres: "ul. Księcia Mieszka I 79", miasto: "Szczecin", kod: "71-011" },
    { nazwa: "Musiałówka", adres: "ul. Biecka 23E", miasto: "Gorlice", kod: "38-300" },
    { nazwa: "Solno", adres: "ul. Poznańska 57", miasto: "Inowrocław", kod: "88-100" },
    { nazwa: "Struga", adres: "ul. Jana III Sobieskiego 119", miasto: "Rumia", kod: "84-230" },
    { nazwa: "Akacja", adres: "ul. Lwowska 120/132", miasto: "Tarnów", kod: "33-100" },
    { nazwa: "Obotrycka", adres: "OBOTRYCKA 5", miasto: "Szczecin", kod: "71-684" },
    { nazwa: "Latkowo", adres: "LATKOWO 36A", miasto: "Latkowo", kod: "88-110" },
    { nazwa: "Wenus", adres: "MARII SKŁODOWSKIEJ-CURIE 90", miasto: "Toruń", kod: "87-100" },
    { nazwa: "Niedźwiadek", adres: "GEN. LEOPOLDA OKULICKIEGO 5B", miasto: "Piaseczno", kod: "05-500" },
    { nazwa: "Radom", adres: "MIESZKA I 2", miasto: "Radom", kod: "26-617" },
    { nazwa: "Bystrzyca", adres: "ŚW. JANA PAWŁA II 5", miasto: "Lublin", kod: "20-535" },
    { nazwa: "Lena", adres: "KRAKOWSKA 6/7", miasto: "Wrocław", kod: "50-425" },
    { nazwa: "Grosik", adres: "JAGIELLOŃSKA 32", miasto: "Częstochowa", kod: "42-200" },
    { nazwa: "Karczów", adres: "PLAC RONDO IM. RODLAKÓW 1", miasto: "Opole", kod: "45-960" },
    { nazwa: "Jabłonna", adres: "SZKOLNA 19", miasto: "Jabłonna", kod: "05-110" },
    { nazwa: "Ostrowiec", adres: "SANDOMIERSKA 87B", miasto: "Ostrowiec Świętokrzyski", kod: "27-400" },
    { nazwa: "Pomorze", adres: "MALINOWA 2", miasto: "Słupsk", kod: "76-200" },
    { nazwa: "Słupia", adres: "POPRZECZNA 1", miasto: "Słupsk", kod: "76-200" },
    { nazwa: "Batory", adres: "DROGOWA TRASA ŚREDNICOWA 48", miasto: "Chorzów", kod: "41-506" },
    { nazwa: "Meksyk", adres: "NADBRZEZIE 1A", miasto: "Kraków", kod: "31-983" },
    { nazwa: "Jaworze", adres: "ŚWIATOPEŁKA 2", miasto: "Bielsko-Biała", kod: "43-382" },
    { nazwa: "Kęty", adres: "KĘCKA 50", miasto: "Czaniec", kod: "43-354" },
    { nazwa: "Telegraf", adres: "ALEJA JERZEGO POPIEŁUSZKI 9", miasto: "Kielce", kod: "25-155" },
    { nazwa: "Jasło", adres: "PRZEMYSŁOWA 6", miasto: "Jasło", kod: "38-200" },
    { nazwa: "Smyków", adres: "KS. JÓZEFA SKWIRUTA 9", miasto: "Bochnia", kod: "32-700" },
    { nazwa: "Bochnia", adres: "BRZESKA 14", miasto: "Bochnia", kod: "32-700" },
    { nazwa: "Arki", adres: "CHORZOWSKA 32", miasto: "Bytom", kod: "41-900" },
    { nazwa: "Deteeśka", adres: "ALEJA POWSTAŃ ŚLĄSKICH 45", miasto: "Ruda Śląska", kod: "41-700" },
    { nazwa: "Magnolia", adres: "KATOWICKA", miasto: "Mysłowice", kod: "41-400" },
    { nazwa: "Meteor", adres: "ODWODNICA KOROLA", miasto: "Tarnowskie Góry", kod: "42-600" },
    { nazwa: "Nowa Wieś", adres: "OŚWIĘCIMSKA 87", miasto: "Nowa Wieś", kod: "32-651" },
    { nazwa: "Dunajec", adres: "TARNOWSKA 177", miasto: "Nowy Sącz", kod: "33-300" },
    { nazwa: "Finezja", adres: "LUBELSKA 138", miasto: "Lubartów", kod: "21-100" },
    { nazwa: "Kosakowo", adres: "HIERONIMA DERDOWSKIEGO 1", miasto: "Pogórze", kod: "81-198" },
    { nazwa: "Orawa", adres: "Chyżne 297A", miasto: "Chyżne", kod: "34-481" },
    { nazwa: "Olsza", adres: "Aleja Generała Tadeusza Bora-Komorowskiego 4", miasto: "Kraków", kod: "31-876" },
    { nazwa: "Heweliusz", adres: "ul. Nowatorów 21", miasto: "Gdańsk", kod: "80-298" },
    { nazwa: "Suchy Las", adres: "ul. Sucholeska 1", miasto: "Suchy Las", kod: "62-002" },
    { nazwa: "Turkus", adres: "al. Powstańców Wielkopolskich 167", miasto: "Piła", kod: "64-920" },
    { nazwa: "Liberty", adres: "ul. Wolności 76", miasto: "Zabrze", kod: "41-820" },
    { nazwa: "Honorata", adres: "ul. Mikołaja Kopernika 11", miasto: "Tychy", kod: "43-100" }
];

// Współrzędne Tęgoborza
const TEGOBORZE_COORDS = { lat: 49.8, lng: 20.8 };

// Funkcja tworząca marker Tęgoborza
function createTegoborzeIcon() {
    return L.divIcon({
        html: `<div style="
            background: #ff6600;
            border: 3px solid white;
            border-radius: 50%;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            font-weight: bold;
            color: white;
            font-size: 16px;
            text-align: center;
            line-height: 1;
        ">T</div>`,
        className: 'tegoborze-marker',
        iconSize: [35, 35],
        iconAnchor: [17.5, 17.5],
        popupAnchor: [0, -17.5]
    });
}

// Funkcja obliczająca odległość
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Funkcja obliczająca offset dla markerów blisko siebie
function calculateMarkerOffset(station, nearbyStations, index) {
    const CLOSE_DISTANCE = 0.01; // około 1km w stopniach
    const OFFSET_DISTANCE = 0.002; // około 200m w stopniach
    
    let offsetX = 0;
    let offsetY = 0;
    
    // Sprawdź czy są stacje blisko siebie
    const nearby = nearbyStations.filter(otherStation => {
        if (otherStation === station) return false;
        const distance = Math.sqrt(
            Math.pow(station.coords.lat - otherStation.coords.lat, 2) +
            Math.pow(station.coords.lng - otherStation.coords.lng, 2)
        );
        return distance < CLOSE_DISTANCE;
    });
    
    if (nearby.length > 0) {
        // Oblicz offset na podstawie indeksu
        const angle = (index * 60) * Math.PI / 180; // 60 stopni między markerami
        offsetX = Math.cos(angle) * OFFSET_DISTANCE;
        offsetY = Math.sin(angle) * OFFSET_DISTANCE;
        
        console.log(`Stacja ${station.nazwa} ma ${nearby.length} bliskich stacji, offset: ${offsetX.toFixed(6)}, ${offsetY.toFixed(6)}`);
    }
    
    return { offsetX, offsetY };
}

// Funkcja tworząca niestandardowy marker z numerem
function createNumberedIcon(number) {
    return L.divIcon({
        html: `<div style="
            background: #0066cc;
            border: 3px solid white;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            font-weight: bold;
            color: white;
            font-size: 12px;
            text-align: center;
            line-height: 1;
        ">${number}</div>`,
        className: 'bp-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });
}

// Inicjalizacja mapy
let map;
let markers = [];
let stationsWithCoords = []; // Dodajemy globalną zmienną

// Funkcja inicjalizująca mapę
function initMap() {
    console.log('Inicjalizacja mapy...');
    
    try {
        // Tworzenie mapy
        map = L.map('map').setView([52.237049, 21.017532], 6);
        console.log('Mapa utworzona pomyślnie');
        
        // Dodanie warstwy OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        console.log('Warstwa mapy dodana');
        
        // Dodanie markerów
        addStationsToMap();
        
        // Dodanie markera Tęgoborza
        addTegoborzeMarker();
        
        // Aktualizacja statystyk
        updateStats();
        
        // Generowanie listy stacji
        generateStationsList();
        
        console.log('Mapa zainicjalizowana pomyślnie!');
        
    } catch (error) {
        console.error('Błąd podczas inicjalizacji mapy:', error);
    }
}

// Funkcja dodająca stacje do mapy
function addStationsToMap() {
    console.log('Dodawanie stacji do mapy...');
    
         // Stacje z ręcznymi współrzędnymi - wszystkie 88 stacji
     stationsWithCoords = [
         { ...stacjeBP[0], coords: { lat: 52.4064, lng: 16.9252 } }, // 1. Krzywousty - Poznań
         { ...stacjeBP[1], coords: { lat: 53.3369, lng: 14.9766 } }, // 2. Lipnik - Lipnik
         { ...stacjeBP[2], coords: { lat: 53.1235, lng: 18.0084 } }, // 3. Fordon - Bydgoszcz
         { ...stacjeBP[3], coords: { lat: 54.3520, lng: 18.6466 } }, // 4. Port - Gdańsk
         { ...stacjeBP[4], coords: { lat: 54.5189, lng: 18.5305 } }, // 5. Amber - Gdynia
         { ...stacjeBP[5], coords: { lat: 51.7592, lng: 19.4559 } }, // 6. Chojny - Łódź
         { ...stacjeBP[6], coords: { lat: 52.2297, lng: 21.0122 } }, // 7. Praga - Warszawa
         { ...stacjeBP[7], coords: { lat: 52.1428, lng: 20.8844 } }, // 8. Reguły - Michałowice
         { ...stacjeBP[8], coords: { lat: 52.1428, lng: 20.8844 } }, // 9. Słonecznik - Reguły
         { ...stacjeBP[9], coords: { lat: 52.1708, lng: 20.8125 } }, // 10. Żbik - Pruszków
         { ...stacjeBP[10], coords: { lat: 50.0128, lng: 20.9864 } }, // 11. Tarnina - Tarnów
         { ...stacjeBP[11], coords: { lat: 50.3268, lng: 19.1253 } }, // 12. Zamek - Będzin
         { ...stacjeBP[12], coords: { lat: 50.6721, lng: 17.9213 } }, // 13. Koral - Opole
         { ...stacjeBP[13], coords: { lat: 50.3498, lng: 18.2266 } }, // 14. Chemik - Kędzierzyn-Koźle
         { ...stacjeBP[14], coords: { lat: 50.1022, lng: 18.5469 } }, // 15. Kuźnia - Rybnik
         { ...stacjeBP[15], coords: { lat: 50.4429, lng: 18.8596 } }, // 16. Sztolnia - Tarnowskie Góry
         { ...stacjeBP[16], coords: { lat: 50.1089, lng: 19.0389 } }, // 17. Romanów - Romanów
         { ...stacjeBP[17], coords: { lat: 52.7368, lng: 15.2288 } }, // 18. Klon - Gorzów Wielkopolski
         { ...stacjeBP[18], coords: { lat: 50.2049, lng: 19.2739 } }, // 19. Promienna - Jaworzno
         { ...stacjeBP[19], coords: { lat: 50.0647, lng: 19.9450 } }, // 20. Krak - Kraków
         { ...stacjeBP[20], coords: { lat: 53.1235, lng: 18.0084 } }, // 21. Brda - Bydgoszcz
         { ...stacjeBP[21], coords: { lat: 53.7769, lng: 20.4867 } }, // 22. Żuraw - Olsztyn
         { ...stacjeBP[22], coords: { lat: 50.2777, lng: 19.1669 } }, // 23. Zagórze - Sosnowiec
         { ...stacjeBP[23], coords: { lat: 52.7368, lng: 15.2288 } }, // 24. Grobla - Gorzów Wielkopolski
         { ...stacjeBP[24], coords: { lat: 49.8224, lng: 19.0448 } }, // 25. Szyndzielnia - Bielsko-Biała
         { ...stacjeBP[25], coords: { lat: 50.3480, lng: 18.9328 } }, // 26. Sztygarka - Bytom
         { ...stacjeBP[26], coords: { lat: 50.6721, lng: 17.9213 } }, // 27. Strzelec - Opole
         { ...stacjeBP[27], coords: { lat: 54.3520, lng: 18.6466 } }, // 28. Trakt św. Wojciecha - Gdańsk
         { ...stacjeBP[28], coords: { lat: 53.8276, lng: 22.3547 } }, // 29. Ełk - Ełk
         { ...stacjeBP[29], coords: { lat: 51.4054, lng: 19.7032 } }, // 30. Trybunał - Piotrków Trybunalski
         { ...stacjeBP[30], coords: { lat: 53.4285, lng: 14.5528 } }, // 31. Lech - Szczecin
         { ...stacjeBP[31], coords: { lat: 50.3216, lng: 19.1949 } }, // 32. Reden - Dąbrowa Górnicza
         { ...stacjeBP[32], coords: { lat: 51.5958, lng: 18.7302 } }, // 33. Sowa - Sieradz
         { ...stacjeBP[33], coords: { lat: 50.8127, lng: 19.1204 } }, // 34. Chaber - Częstochowa
         { ...stacjeBP[34], coords: { lat: 51.7592, lng: 19.4559 } }, // 35. Wega - Łódź
         { ...stacjeBP[35], coords: { lat: 52.2297, lng: 21.0122 } }, // 36. Młociny - Warszawa
         { ...stacjeBP[36], coords: { lat: 50.2649, lng: 18.8566 } }, // 37. Wirek - Ruda Śląska
         { ...stacjeBP[37], coords: { lat: 50.3480, lng: 18.9328 } }, // 38. Karlik - Bytom
         { ...stacjeBP[38], coords: { lat: 50.2980, lng: 18.9542 } }, // 39. Różanka - Chorzów
         { ...stacjeBP[39], coords: { lat: 53.0138, lng: 18.5981 } }, // 40. Fort - Toruń
         { ...stacjeBP[40], coords: { lat: 54.5189, lng: 18.5305 } }, // 41. Klif - Gdynia
         { ...stacjeBP[41], coords: { lat: 53.7769, lng: 20.4867 } }, // 42. Kormoran - Olsztyn
         { ...stacjeBP[42], coords: { lat: 53.6967, lng: 19.9647 } }, // 43. Mazury - Ostróda
         { ...stacjeBP[43], coords: { lat: 52.0596, lng: 19.1992 } }, // 44. Wirynka - Łęczyca
         { ...stacjeBP[44], coords: { lat: 54.1944, lng: 16.1822 } }, // 45. Perseusz - Koszalin
         { ...stacjeBP[45], coords: { lat: 49.8224, lng: 19.0448 } }, // 46. Dworzec - Bielsko-Biała
         { ...stacjeBP[46], coords: { lat: 50.3480, lng: 18.9328 } }, // 47. Radzionków - Bytom
         { ...stacjeBP[47], coords: { lat: 53.4285, lng: 14.5528 } }, // 48. Czech - Szczecin
         { ...stacjeBP[48], coords: { lat: 49.6556, lng: 21.1597 } }, // 49. Musiałówka - Gorlice
         { ...stacjeBP[49], coords: { lat: 52.7875, lng: 18.2616 } }, // 50. Solno - Inowrocław
         { ...stacjeBP[50], coords: { lat: 54.5711, lng: 18.3883 } }, // 51. Struga - Rumia
         { ...stacjeBP[51], coords: { lat: 50.0128, lng: 20.9864 } }, // 52. Akacja - Tarnów
         { ...stacjeBP[52], coords: { lat: 53.4285, lng: 14.5528 } }, // 53. Obotrycka - Szczecin
         { ...stacjeBP[53], coords: { lat: 52.7875, lng: 18.2616 } }, // 54. Latkowo - Latkowo
         { ...stacjeBP[54], coords: { lat: 53.0138, lng: 18.5981 } }, // 55. Wenus - Toruń
         { ...stacjeBP[55], coords: { lat: 52.0819, lng: 21.0237 } }, // 56. Niedźwiadek - Piaseczno
         { ...stacjeBP[56], coords: { lat: 51.4025, lng: 21.1471 } }, // 57. Radom - Radom
         { ...stacjeBP[57], coords: { lat: 51.2465, lng: 22.5684 } }, // 58. Bystrzyca - Lublin
         { ...stacjeBP[58], coords: { lat: 51.1079, lng: 17.0385 } }, // 59. Lena - Wrocław
         { ...stacjeBP[59], coords: { lat: 50.8127, lng: 19.1204 } }, // 60. Grosik - Częstochowa
         { ...stacjeBP[60], coords: { lat: 50.6721, lng: 17.9213 } }, // 61. Karczów - Opole
         { ...stacjeBP[61], coords: { lat: 52.4795, lng: 20.9170 } }, // 62. Jabłonna - Jabłonna
         { ...stacjeBP[62], coords: { lat: 50.9294, lng: 21.3854 } }, // 63. Ostrowiec - Ostrowiec Świętokrzyski
         { ...stacjeBP[63], coords: { lat: 54.4642, lng: 17.0285 } }, // 64. Pomorze - Słupsk
         { ...stacjeBP[64], coords: { lat: 54.4642, lng: 17.0285 } }, // 65. Słupia - Słupsk
         { ...stacjeBP[65], coords: { lat: 50.2980, lng: 18.9542 } }, // 66. Batory - Chorzów
         { ...stacjeBP[66], coords: { lat: 50.0647, lng: 19.9450 } }, // 67. Meksyk - Kraków
         { ...stacjeBP[67], coords: { lat: 49.8224, lng: 19.0448 } }, // 68. Jaworze - Bielsko-Biała
         { ...stacjeBP[68], coords: { lat: 49.8224, lng: 19.0448 } }, // 69. Kęty - Czaniec
         { ...stacjeBP[69], coords: { lat: 50.8703, lng: 20.6286 } }, // 70. Telegraf - Kielce
         { ...stacjeBP[70], coords: { lat: 49.7449, lng: 21.4708 } }, // 71. Jasło - Jasło
         { ...stacjeBP[71], coords: { lat: 49.9688, lng: 20.4301 } }, // 72. Smyków - Bochnia
         { ...stacjeBP[72], coords: { lat: 49.9688, lng: 20.4301 } }, // 73. Bochnia - Bochnia
         { ...stacjeBP[73], coords: { lat: 50.3480, lng: 18.9328 } }, // 74. Arki - Bytom
         { ...stacjeBP[74], coords: { lat: 50.2649, lng: 18.8566 } }, // 75. Deteeśka - Ruda Śląska
         { ...stacjeBP[75], coords: { lat: 50.2404, lng: 19.1379 } }, // 76. Magnolia - Mysłowice
         { ...stacjeBP[76], coords: { lat: 50.4429, lng: 18.8596 } }, // 77. Meteor - Tarnowskie Góry
         { ...stacjeBP[77], coords: { lat: 49.9688, lng: 20.4301 } }, // 78. Nowa Wieś - Nowa Wieś
         { ...stacjeBP[78], coords: { lat: 49.6218, lng: 20.6971 } }, // 79. Dunajec - Nowy Sącz
         { ...stacjeBP[79], coords: { lat: 51.4603, lng: 22.6097 } }, // 80. Finezja - Lubartów
         { ...stacjeBP[80], coords: { lat: 54.5711, lng: 18.3883 } }, // 81. Kosakowo - Pogórze
         { ...stacjeBP[81], coords: { lat: 49.4268, lng: 19.6802 } }, // 82. Orawa - Chyżne
         { ...stacjeBP[82], coords: { lat: 50.0647, lng: 19.9450 } }, // 83. Olsza - Kraków
         { ...stacjeBP[83], coords: { lat: 54.3520, lng: 18.6466 } }, // 84. Heweliusz - Gdańsk
         { ...stacjeBP[84], coords: { lat: 52.4707, lng: 16.8775 } }, // 85. Suchy Las - Suchy Las
         { ...stacjeBP[85], coords: { lat: 53.1514, lng: 16.7378 } }, // 86. Turkus - Piła
         { ...stacjeBP[86], coords: { lat: 50.3249, lng: 18.7856 } }, // 87. Liberty - Zabrze
         { ...stacjeBP[87], coords: { lat: 50.1372, lng: 18.9664 } }  // 88. Honorata - Tychy
     ];
    
         // Obliczenie odległości od Tęgoborza
     stationsWithCoords.forEach((stacja, index) => {
         stacja.distance = calculateDistance(
             TEGOBORZE_COORDS.lat, TEGOBORZE_COORDS.lng,
             stacja.coords.lat, stacja.coords.lng
         );
         // Dodajemy oryginalny numer stacji
         stacja.originalNumber = index + 1;
     });
    
     // Sortowanie według odległości od Tęgoborza (od najbliższej do najdalszej)
     stationsWithCoords.sort((a, b) => a.distance - b.distance);
    
     // Aktualizacja numerów po sortowaniu
     stationsWithCoords.forEach((stacja, index) => {
         stacja.originalNumber = index + 1; // Nowa numeracja od najbliższej
     });
    
     console.log('Stacje posortowane według odległości od Tęgoborza:');
     stationsWithCoords.slice(0, 10).forEach((stacja, index) => {
         console.log(`${index + 1}. ${stacja.nazwa} - ${stacja.miasto} (${stacja.distance.toFixed(1)} km)`);
     });
     
     // Test odległości dla konkretnych stacji
     const testStacja1 = stationsWithCoords.find(s => s.nazwa === 'Krzywousty');
     const testStacja79 = stationsWithCoords.find(s => s.nazwa === 'Dunajec');
     if (testStacja1) console.log(`Krzywousty (Poznań): ${testStacja1.distance.toFixed(1)} km, nowy numer: ${testStacja1.originalNumber}`);
     if (testStacja79) console.log(`Dunajec (Nowy Sącz): ${testStacja79.distance.toFixed(1)} km, nowy numer: ${testStacja79.originalNumber}`);
     
     // Sprawdź stację #2
     const stacja2 = stationsWithCoords[1]; // indeks 1 = stacja #2
     if (stacja2) {
         console.log(`Stacja #2: ${stacja2.nazwa} - ${stacja2.miasto}`);
         console.log(`Współrzędne: lat=${stacja2.coords.lat}, lng=${stacja2.coords.lng}`);
         console.log(`Odległość od Tęgoborza: ${stacja2.distance.toFixed(1)} km`);
     }
    
         // Dodanie markerów z offsetami dla bliskich stacji
     stationsWithCoords.forEach((stacja, index) => {
         const number = stacja.originalNumber; // Używamy oryginalnego numeru stacji
         
         // Oblicz offset dla markerów blisko siebie
         const { offsetX, offsetY } = calculateMarkerOffset(stacja, stationsWithCoords, index);
         
         console.log(`Dodawanie markera #${number} dla stacji ${stacja.nazwa} na pozycji ${index} z offsetem (${offsetX.toFixed(4)}, ${offsetY.toFixed(4)})`);
         
         try {
             // Dodaj offset do współrzędnych
             const adjustedLat = stacja.coords.lat + offsetY;
             const adjustedLng = stacja.coords.lng + offsetX;
             
             const marker = L.marker([adjustedLat, adjustedLng], {
                 icon: createNumberedIcon(number)
             })
             .addTo(map)
             .bindPopup(createPopupContent(stacja, number, stacja.distance, index));
             
             markers.push(marker);
             console.log(`Marker #${number} dodany pomyślnie na pozycji ${markers.length - 1} w tablicy`);
         } catch (error) {
             console.error(`Błąd przy dodawaniu markera #${number}:`, error);
         }
     });
    
    console.log(`Dodano ${markers.length} markerów`);
    console.log('Pierwsze 5 markerów w tablicy:');
    markers.slice(0, 5).forEach((marker, index) => {
        const popupContent = marker.getPopup().getContent();
        console.log(`Marker ${index}: ${popupContent}`);
    });
    
    // Sprawdź czy marker #2 jest na mapie
    if (markers[1]) {
        const marker2 = markers[1];
        const coords = marker2.getLatLng();
        console.log(`Marker #2 na mapie: lat=${coords.lat}, lng=${coords.lng}`);
        
        // Sprawdź czy marker jest widoczny
        const bounds = map.getBounds();
        const isVisible = bounds.contains(coords);
        console.log(`Marker #2 widoczny na mapie: ${isVisible}`);
        console.log(`Granice mapy: ${bounds.toString()}`);
        
        // Przybliż do markera #2
        map.setView(coords, 10);
        console.log('Przybliżono do markera #2');
        
        // Sprawdź ikonę markera #2
        const icon = marker2.getIcon();
        console.log('Ikona markera #2:', icon);
        
        // Otwórz popup markera #2
        marker2.openPopup();
        console.log('Otworzono popup markera #2');
    } else {
        console.error('Marker #2 nie został znaleziony w tablicy!');
    }
    
    // Dostosowanie widoku mapy
    if (markers.length > 0) {
        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));
        console.log('Widok mapy dostosowany do markerów');
    }
}

// Funkcja tworząca zawartość popup
function createPopupContent(stacja, number, distance, stationIndex) {
    const fullAddress = `${stacja.adres}, ${stacja.kod} ${stacja.miasto}`;
    
    return `
        <div class="popup-content">
            <div class="popup-title">Stacja BP #${number} - ${stacja.nazwa}</div>
            <div class="popup-address">
                ${stacja.adres}<br>
                ${stacja.kod} ${stacja.miasto}
            </div>
            <div class="popup-distance">
                📍 Odległość od Tęgoborza: ${distance.toFixed(1)} km
            </div>
            <div class="popup-actions" style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee;">
                <button onclick="copyAddressToClipboard('${fullAddress}', ${stationIndex})" style="
                    background: #0066cc;
                    color: white;
                    border: none;
                    padding: 8px 12px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 0.9rem;
                    width: 100%;
                ">📋 Kopiuj adres</button>
            </div>
        </div>
    `;
}

// Funkcja aktualizująca statystyki
function updateStats() {
    const uniqueCities = [...new Set(stacjeBP.map(stacja => stacja.miasto))];
    document.getElementById('total-cities').textContent = uniqueCities.length;
    console.log('Statystyki zaktualizowane');
}

// Funkcja generująca listę stacji
function generateStationsList() {
    const listContainer = document.getElementById('stations-list-content');
    
    const stationsListHTML = stationsWithCoords.map((stacja, index) => {
        const distance = stacja.distance;
        return `
            <div class="station-item" onclick="focusOnStation(${stacja.originalNumber})">
                <div class="station-number">${stacja.originalNumber}</div>
                <div class="station-info">
                    <div class="station-name">BP ${stacja.nazwa}</div>
                    <div class="station-location">${stacja.miasto} (${distance.toFixed(1)} km)</div>
                </div>
            </div>
        `;
    }).join('');
    
    listContainer.innerHTML = stationsListHTML;
    console.log('Lista stacji wygenerowana (posortowana według odległości)');
}

// Funkcja dodająca marker Tęgoborza
function addTegoborzeMarker() {
    const tegoborzeMarker = L.marker([TEGOBORZE_COORDS.lat, TEGOBORZE_COORDS.lng], {
        icon: createTegoborzeIcon()
    })
    .addTo(map)
    .bindPopup(`
        <div class="popup-content">
            <div class="popup-title">📍 Tęgoborze</div>
            <div class="popup-address">
                Punkt odniesienia<br>
                Wszystkie stacje BP są numerowane według odległości od tego miejsca
            </div>
        </div>
    `);
    
    console.log('Marker Tęgoborza dodany');
}

// Funkcja skupiająca mapę na wybranej stacji
function focusOnStation(stationNumber) {
    // Znajdź marker z odpowiednim numerem
    const marker = markers.find(marker => {
        const popupContent = marker.getPopup().getContent();
        return popupContent.includes(`Stacja BP #${stationNumber}`);
    });
    
    if (marker) {
        const coords = marker.getLatLng();
        
        // Przybliż mapę do stacji
        map.setView(coords, 12);
        
        // Otwórz popup stacji
        marker.openPopup();
        
        console.log(`Skupiono mapę na stacji #${stationNumber}`);
    } else {
        console.error(`Nie znaleziono markera dla stacji #${stationNumber}`);
    }
}

// Kolory dla 10 dni trasy
const routeColors = [
    '#FF0000', // Czerwony - Dzień 1
    '#00FF00', // Zielony - Dzień 2
    '#0000FF', // Niebieski - Dzień 3
    '#FFFF00', // Żółty - Dzień 4
    '#FF00FF', // Magenta - Dzień 5
    '#00FFFF', // Cyan - Dzień 6
    '#FFA500', // Pomarańczowy - Dzień 7
    '#800080', // Fioletowy - Dzień 8
    '#008000', // Ciemny zielony - Dzień 9
    '#FFC0CB'  // Różowy - Dzień 10
];

// Funkcja wybierająca wszystkie stacje i dzieląca je na 10 dni
function selectStationsForRoute() {
    console.log('Rozpoczynam wybór stacji dla trasy...');
    console.log('Liczba stacji w stationsWithCoords:', stationsWithCoords.length);
    
    if (!stationsWithCoords || stationsWithCoords.length === 0) {
        console.error('Brak stacji w stationsWithCoords!');
        return [];
    }
    
    const stationsWithDistance = stationsWithCoords.map((stacja, index) => ({
        ...stacja,
        originalNumber: index + 1,
        distance: calculateDistance(
            TEGOBORZE_COORDS.lat, TEGOBORZE_COORDS.lng,
            stacja.coords.lat, stacja.coords.lng
        )
    }));
    
    // Sortowanie według odległości od Tęgoborza
    stationsWithDistance.sort((a, b) => a.distance - b.distance);
    
    // Dodanie numerów kolejności (od najbliższej do najdalszej)
    stationsWithDistance.forEach((stacja, index) => {
        stacja.routeOrder = index + 1;
        stacja.originalNumber = index + 1; // Aktualizuj oryginalny numer
    });
    
    // Zaktualizuj globalną tablicę stacji z nową numeracją
    stationsWithCoords = stationsWithDistance;
    
    console.log('Stacje z odległościami:', stationsWithDistance.slice(0, 5));
    
    // Sortowanie według odległości od Tęgoborza
    stationsWithDistance.sort((a, b) => a.distance - b.distance);
    
    // Podział na 10 dni (około 9 stacji dziennie)
    const stationsPerDay = Math.ceil(stationsWithDistance.length / 10);
    const dailyStations = [];
    
    console.log('Stacji na dzień:', stationsPerDay);
    
    for (let day = 0; day < 10; day++) {
        const startIndex = day * stationsPerDay;
        const endIndex = Math.min(startIndex + stationsPerDay, stationsWithDistance.length);
        const dayStations = stationsWithDistance.slice(startIndex, endIndex);
        
        if (dayStations.length > 0) {
            dailyStations.push({
                day: day + 1,
                stations: dayStations
            });
            console.log(`Dzień ${day + 1}: ${dayStations.length} stacji`);
        }
    }
    
    console.log('Podział na dni zakończony:', dailyStations.length, 'dni');
    return dailyStations;
}



// Funkcja rysowania trasy na mapie
function drawRouteOnMap(dailyStations) {
    console.log('Rozpoczynam rysowanie trasy...');
    console.log('Liczba dni do narysowania:', dailyStations.length);
    
    if (!dailyStations || dailyStations.length === 0) {
        console.error('Brak danych dni do narysowania!');
        return;
    }
    
    // Usuń poprzednie trasy
    if (window.routeLayers) {
        window.routeLayers.forEach(layer => map.removeLayer(layer));
    }
    window.routeLayers = [];
    
    // Rysuj trasę dla każdego dnia
    for (let dayIndex = 0; dayIndex < dailyStations.length; dayIndex++) {
        const dayData = dailyStations[dayIndex];
        const dayStations = dayData.stations;
        const dayColor = routeColors[dayIndex];
        
        console.log(`Rysuję dzień ${dayData.day} z ${dayStations.length} stacjami, kolor: ${dayColor}`);
        
        // Rysuj linie między stacjami w tym samym dniu
        for (let stationIndex = 0; stationIndex < dayStations.length - 1; stationIndex++) {
            const currentStation = dayStations[stationIndex];
            const nextStation = dayStations[stationIndex + 1];
            
            // Linia między stacjami
            const routeLine = L.polyline([
                [currentStation.coords.lat, currentStation.coords.lng],
                [nextStation.coords.lat, nextStation.coords.lng]
            ], {
                color: dayColor,
                weight: 4,
                opacity: 0.8
            }).addTo(map);
            
            window.routeLayers.push(routeLine);
        }
        
        // Rysuj linię do następnego dnia (jeśli nie ostatni dzień)
        if (dayIndex < dailyStations.length - 1) {
            const lastStationOfDay = dayStations[dayStations.length - 1];
            const firstStationOfNextDay = dailyStations[dayIndex + 1].stations[0];
            
            const routeLine = L.polyline([
                [lastStationOfDay.coords.lat, lastStationOfDay.coords.lng],
                [firstStationOfNextDay.coords.lat, firstStationOfNextDay.coords.lng]
            ], {
                color: dayColor,
                weight: 4,
                opacity: 0.6,
                dashArray: '10, 5' // Przerywana linia między dniami
            }).addTo(map);
            
            window.routeLayers.push(routeLine);
        }
        
        // Dodaj marker z numerem dnia na środku trasy dnia
        if (dayStations.length > 0) {
            const middleStationIndex = Math.floor(dayStations.length / 2);
            const middleStation = dayStations[middleStationIndex];
            
            const dayMarker = L.marker([middleStation.coords.lat, middleStation.coords.lng], {
                icon: L.divIcon({
                    html: `<div style="
                        background: ${dayColor};
                        border: 2px solid white;
                        border-radius: 50%;
                        width: 30px;
                        height: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                        color: white;
                        font-size: 14px;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                    ">${dayData.day}</div>`,
                    className: 'day-marker',
                    iconSize: [30, 30],
                    iconAnchor: [15, 15]
                })
            }).addTo(map);
            
            window.routeLayers.push(dayMarker);
        }
    }
    
    console.log('Trasa narysowana na mapie');
}



// Funkcja główna planowania trasy
function planTwoWeekRoute() {
    console.log('Planowanie 2-tygodniowej trasy...');
    
    // Wybór stacji i podział na dni
    globalDailyStations = selectStationsForRoute();
    console.log('Podział stacji na dni:', globalDailyStations);
    
    console.log('Mapa zainicjalizowana pomyślnie!');
}

// Zmienne globalne
let currentWeek = 1;
let globalDailyStations = [];



// Funkcja rysowania trasy dla konkretnego tygodnia
function drawRouteForWeek(weekNumber) {
    // Usuń poprzednie trasy
    if (window.routeLayers) {
        window.routeLayers.forEach(layer => map.removeLayer(layer));
    }
    window.routeLayers = [];
    
    if (!globalDailyStations || globalDailyStations.length === 0) {
        console.error('Brak danych trasy!');
        return;
    }
    
    // Określ dni dla wybranego tygodnia
    const startDay = weekNumber === 1 ? 0 : 5; // Tydzień 1: dni 1-5, Tydzień 2: dni 6-10
    const endDay = weekNumber === 1 ? 5 : 10;
    
    console.log(`Rysuję tydzień ${weekNumber} (dni ${startDay + 1}-${endDay})`);
    
    // Rysuj trasę dla dni w wybranym tygodniu
    for (let dayIndex = startDay; dayIndex < endDay; dayIndex++) {
        if (dayIndex >= globalDailyStations.length) break;
        
        const dayData = globalDailyStations[dayIndex];
        const dayStations = dayData.stations;
        const dayColor = routeColors[dayIndex];
        
        console.log(`Rysuję dzień ${dayData.day} z ${dayStations.length} stacjami`);
        
        // Rysuj linie między stacjami w tym samym dniu
        for (let stationIndex = 0; stationIndex < dayStations.length - 1; stationIndex++) {
            const currentStation = dayStations[stationIndex];
            const nextStation = dayStations[stationIndex + 1];
            
            // Linia między stacjami
            const routeLine = L.polyline([
                [currentStation.coords.lat, currentStation.coords.lng],
                [nextStation.coords.lat, nextStation.coords.lng]
            ], {
                color: dayColor,
                weight: 4,
                opacity: 0.8
            }).addTo(map);
            
            window.routeLayers.push(routeLine);
            
            // Dodaj strzałki kierunku
            const arrowHead = L.polylineDecorator(routeLine, {
                patterns: [
                    {
                        offset: '50%',
                        repeat: 0,
                        symbol: L.Symbol.arrowHead({
                            pixelSize: 10,
                            polygon: false,
                            pathOptions: {
                                stroke: true,
                                color: dayColor,
                                weight: 3,
                                opacity: 1
                            }
                        })
                    }
                ]
            }).addTo(map);
            
            window.routeLayers.push(arrowHead);
            
            // Marker z numerem kolejności
            const orderMarker = L.marker([
                (currentStation.coords.lat + nextStation.coords.lat) / 2,
                (currentStation.coords.lng + nextStation.coords.lng) / 2
            ], {
                icon: L.divIcon({
                    html: `<div style="
                        background: ${dayColor};
                        border: 2px solid white;
                        border-radius: 50%;
                        width: 25px;
                        height: 25px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                        color: white;
                        font-size: 10px;
                        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                    ">${currentStation.routeOrder}</div>`,
                    className: 'order-marker',
                    iconSize: [25, 25],
                    iconAnchor: [12.5, 12.5]
                })
            }).addTo(map);
            
            window.routeLayers.push(orderMarker);
        }
        
        // Rysuj linię do następnego dnia (jeśli nie ostatni dzień tygodnia)
        if (dayIndex < endDay - 1 && dayIndex < globalDailyStations.length - 1) {
            const lastStationOfDay = dayStations[dayStations.length - 1];
            const firstStationOfNextDay = globalDailyStations[dayIndex + 1].stations[0];
            
            const routeLine = L.polyline([
                [lastStationOfDay.coords.lat, lastStationOfDay.coords.lng],
                [firstStationOfNextDay.coords.lat, firstStationOfNextDay.coords.lng]
            ], {
                color: dayColor,
                weight: 4,
                opacity: 0.6,
                dashArray: '10, 5'
            }).addTo(map);
            
            window.routeLayers.push(routeLine);
            
            // Dodaj strzałki kierunku dla linii między dniami
            const arrowHead = L.polylineDecorator(routeLine, {
                patterns: [
                    {
                        offset: '50%',
                        repeat: 0,
                        symbol: L.Symbol.arrowHead({
                            pixelSize: 8,
                            polygon: false,
                            pathOptions: {
                                stroke: true,
                                color: dayColor,
                                weight: 2,
                                opacity: 0.8
                            }
                        })
                    }
                ]
            }).addTo(map);
            
            window.routeLayers.push(arrowHead);
        }
        
        // Dodaj marker z numerem dnia na środku trasy dnia
        if (dayStations.length > 0) {
            const middleStationIndex = Math.floor(dayStations.length / 2);
            const middleStation = dayStations[middleStationIndex];
            
            const dayMarker = L.marker([middleStation.coords.lat, middleStation.coords.lng], {
                icon: L.divIcon({
                    html: `<div style="
                        background: ${dayColor};
                        border: 2px solid white;
                        border-radius: 50%;
                        width: 30px;
                        height: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                        color: white;
                        font-size: 14px;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                    ">${dayData.day}</div>`,
                    className: 'day-marker',
                    iconSize: [30, 30],
                    iconAnchor: [15, 15]
                })
            }).addTo(map);
            
            window.routeLayers.push(dayMarker);
        }
    }
    
    console.log(`Trasa tygodnia ${weekNumber} narysowana`);
}

// Funkcja kopiowania adresu do schowka
function copyAddressToClipboard(address, stationIndex) {
    navigator.clipboard.writeText(address).then(function() {
        showCopySuccessMessage();
        changeMarkerColor(stationIndex);
    }).catch(function(err) {
        console.error('Błąd kopiowania:', err);
        // Fallback dla starszych przeglądarek
        fallbackCopyTextToClipboard(address, stationIndex);
    });
}

// Funkcja zmiany koloru markera na pomarańczowy
function changeMarkerColor(stationIndex) {
    if (markers[stationIndex]) {
        const marker = markers[stationIndex];
        const station = stationsWithCoords[stationIndex];
        
        // Oblicz offset dla tej stacji
        const { offsetX, offsetY } = calculateMarkerOffset(station, stationsWithCoords, stationIndex);
        
        // Utwórz pomarańczowy marker
        const orangeIcon = L.divIcon({
            html: `<div style="
                background: #ff8c00;
                border: 2px solid white;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                color: white;
                font-size: 12px;
                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            ">${station.originalNumber}</div>`,
            className: 'bp-marker',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        // Zmień ikonę markera i pozycję z offsetem
        marker.setIcon(orangeIcon);
        const adjustedLat = station.coords.lat + offsetY;
        const adjustedLng = station.coords.lng + offsetX;
        marker.setLatLng([adjustedLat, adjustedLng]);
        
        console.log(`Zmieniono kolor markera stacji ${station.nazwa} na pomarańczowy z offsetem`);
    }
}

// Fallback dla starszych przeglądarek
function fallbackCopyTextToClipboard(text, stationIndex) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccessMessage();
        changeMarkerColor(stationIndex);
    } catch (err) {
        console.error('Fallback: Błąd kopiowania', err);
    }
    
    document.body.removeChild(textArea);
}

// Funkcja wyświetlania komunikatu o skopiowaniu
function showCopySuccessMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #28a745;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    `;
    message.textContent = '✅ Adres skopiowany do schowka!';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        if (message.parentNode) {
            message.parentNode.removeChild(message);
        }
    }, 2000);
}



// Funkcja dodawania stacji do trasy
function addStationToRoute() {
    const selector = document.getElementById('station-selector');
    const selectedIndex = parseInt(selector.value);
    
    if (selectedIndex === '' || isNaN(selectedIndex)) {
        alert('Wybierz stację z listy!');
        return;
    }
    
    const station = stationsWithCoords[selectedIndex];
    
    // Sprawdź czy stacja już jest dodana
    if (selectedStations.some(s => s.index === selectedIndex)) {
        alert('Ta stacja jest już dodana do trasy!');
        return;
    }
    
    // Dodaj stację do listy
    selectedStations.push({
        index: selectedIndex,
        ...station
    });
    
    // Zaktualizuj wyświetlanie
    updateSelectedStationsList();
    
    // Resetuj selector
    selector.value = '';
    
    console.log('Dodano stację do trasy:', station.nazwa);
}

// Funkcja aktualizacji listy wybranych stacji
function updateSelectedStationsList() {
    const container = document.getElementById('selected-stations-list');
    container.innerHTML = '';
    
    selectedStations.forEach((station, index) => {
        const item = document.createElement('div');
        item.className = 'selected-station-item';
        item.innerHTML = `
            <div class="selected-station-info">
                <div class="selected-station-name">${index + 1}. ${station.nazwa}</div>
                <div class="selected-station-location">${station.adres}, ${station.miasto}</div>
            </div>
            <button class="remove-station-btn" onclick="removeStationFromRoute(${index})">✕</button>
        `;
        container.appendChild(item);
    });
}

// Funkcja usuwania stacji z trasy
function removeStationFromRoute(index) {
    selectedStations.splice(index, 1);
    updateSelectedStationsList();
    console.log('Usunięto stację z trasy, indeks:', index);
}















// Inicjalizacja mapy po załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM załadowany, inicjalizacja mapy...');
    initMap();
});
