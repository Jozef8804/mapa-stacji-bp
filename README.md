# Mapa Stacji BP w Polsce

Interaktywna mapa wszystkich 88 stacji BP w Polsce z funkcją kopiowania adresów.

## 🚀 Jak wdrożyć na GitHub Pages:

### 1. Utwórz repozytorium na GitHub:
- Idź na [github.com](https://github.com)
- Kliknij "New repository"
- Nazwij np. "mapa-stacji-bp"
- Zostaw jako publiczne
- **NIE** zaznaczaj "Add a README file"

### 2. Wypchnij kod na GitHub:
```bash
git remote add origin https://github.com/TWOJA_NAZWA_UZYTKOWNIKA/mapa-stacji-bp.git
git branch -M main
git push -u origin main
```

### 3. Włącz GitHub Pages:
- Idź do Settings → Pages
- W "Source" wybierz "Deploy from a branch"
- W "Branch" wybierz "main" i "/ (root)"
- Kliknij "Save"

### 4. Twój link będzie:
```
https://TWOJA_NAZWA_UZYTKOWNIKA.github.io/mapa-stacji-bp/
```

## 🌐 Alternatywnie - Netlify (jeszcze prostsze):

### 1. Idź na [netlify.com](https://netlify.com)
### 2. Przeciągnij folder z plikami na stronę
### 3. Dostaniesz link automatycznie!

## 📋 Funkcje mapy:
- ✅ 88 stacji BP w Polsce
- ✅ Sortowanie od najbliższej do najdalszej od Tęgoborza
- ✅ Kopiowanie adresów do schowka
- ✅ Zmiana koloru markerów po skopiowaniu
- ✅ Lista wszystkich stacji w sidebarze
- ✅ Automatyczne rozsuwanie markerów blisko siebie

## 🛠️ Technologie:
- HTML5, CSS3, JavaScript (ES6+)
- Leaflet.js - interaktywna mapa
- OpenStreetMap - dane mapy
