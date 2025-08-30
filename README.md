# Mapa Stacji BP w Polsce

Interaktywna mapa wszystkich stacji BP w Polsce stworzona w HTML, CSS i JavaScript z wykorzystaniem biblioteki Leaflet.

## Funkcje

- **Interaktywna mapa** z 88 stacjami BP w Polsce
- **Czerwone markery** dla każdej stacji
- **Popup z informacjami** po kliknięciu w marker (nazwa, adres, miasto, kod pocztowy)
- **Panel informacyjny** z liczbą stacji i miast
- **Responsywny design** - działa na komputerach i urządzeniach mobilnych
- **Minimalistyczny i nowoczesny** interfejs

## Technologie

- **HTML5** - struktura strony
- **CSS3** - stylowanie i responsywność
- **JavaScript (ES6+)** - funkcjonalność mapy
- **Leaflet.js** - biblioteka do tworzenia interaktywnych map
- **OpenStreetMap** - darmowe mapy
- **Nominatim API** - geokodowanie adresów

## Jak uruchomić

1. **Pobierz pliki** do jednego folderu:
   - `index.html`
   - `script.js`
   - `README.md`

2. **Otwórz plik** `index.html` w przeglądarce internetowej

3. **Czekaj na załadowanie** - mapa automatycznie geokoduje wszystkie adresy i doda markery

## Struktura plików

```
mapa-stacji-bp/
├── index.html      # Główny plik HTML
├── script.js       # JavaScript z danymi i funkcjonalnością
└── README.md       # Ten plik z instrukcjami
```

## Dane

Mapa zawiera 88 stacji BP z następującymi informacjami:
- Nazwa stacji
- Pełny adres
- Miasto
- Kod pocztowy

## Uwagi techniczne

- **Geokodowanie** - adresy są automatycznie konwertowane na współrzędne geograficzne
- **API limit** - używamy darmowego API z ograniczeniami, więc ładowanie może trwać kilka sekund
- **Offline** - po załadowaniu mapa działa offline
- **Responsywność** - dostosowuje się do różnych rozmiarów ekranu

## Możliwe rozszerzenia

- Wyszukiwarka stacji
- Filtrowanie po województwach
- Routing do stacji
- Geolokalizacja użytkownika
- Eksport danych
- Dodanie logo BP

## Licencja

Projekt jest dostępny na licencji MIT. Dane stacji BP są własnością BP Polska.

## Autor

Mapa stworzona jako projekt demonstracyjny z wykorzystaniem darmowych technologii webowych.
