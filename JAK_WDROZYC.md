# 🚀 Jak wdrożyć mapę - NAJPROSTSZY SPOSÓB

## Opcja 1: GitHub Pages (darmowe)

### Krok 1: Utwórz konto na GitHub
- Idź na [github.com](https://github.com)
- Zarejestruj się (darmowe)

### Krok 2: Utwórz nowe repozytorium
- Kliknij zielony przycisk "New"
- Nazwij: `mapa-stacji-bp`
- Zostaw jako "Public"
- **NIE** zaznaczaj "Add a README file"
- Kliknij "Create repository"

### Krok 3: Wypchnij kod
W terminalu wpisz (zastąp TWOJA_NAZWA_UZYTKOWNIKA swoją nazwą):
```bash
git remote add origin https://github.com/TWOJA_NAZWA_UZYTKOWNIKA/mapa-stacji-bp.git
git branch -M main
git push -u origin main
```

### Krok 4: Włącz GitHub Pages
- Idź do Settings (zakładka)
- Scrolluj w dół do "Pages"
- W "Source" wybierz "Deploy from a branch"
- W "Branch" wybierz "main" i "/ (root)"
- Kliknij "Save"

### Krok 5: Twój link
```
https://TWOJA_NAZWA_UZYTKOWNIKA.github.io/mapa-stacji-bp/
```

## Opcja 2: Netlify (jeszcze prostsze)

### Krok 1: Idź na Netlify
- Otwórz [netlify.com](https://netlify.com)
- Kliknij "Sign up" (darmowe)

### Krok 2: Przeciągnij pliki
- Przeciągnij cały folder z plikami na stronę
- Poczekaj na upload

### Krok 3: Dostaniesz link
- Netlify automatycznie da Ci link
- Możesz go zmienić w ustawieniach

## Opcja 3: Vercel (bardzo proste)

### Krok 1: Idź na Vercel
- Otwórz [vercel.com](https://vercel.com)
- Zaloguj się przez GitHub

### Krok 2: Importuj projekt
- Kliknij "New Project"
- Wybierz swoje repozytorium z GitHub
- Kliknij "Deploy"

### Krok 3: Gotowe!
- Dostaniesz link automatycznie
- Każda zmiana w GitHub automatycznie aktualizuje stronę

## 📱 Twój link będzie wyglądał tak:
```
https://twoja-nazwa.github.io/mapa-stacji-bp/
```
lub
```
https://twoja-mapa.netlify.app/
```

## ✅ Po wdrożeniu możesz:
- Wysłać link znajomym
- Otworzyć na telefonie
- Udostępnić w mediach społecznościowych
- Dodać do CV/portfolio

