# webSzyk Portfolio

Nowoczesna strona internetowa dla firmy webSzyk, specjalizującej się w tworzeniu stron internetowych.

## Technologie

- **HTML5** - semantyczna struktura
- **Tailwind CSS** - stylowanie
- **Alpine.js** - interaktywność
- **Vite** - bundler i dev server

## Instalacja i uruchomienie

1. Zainstaluj zależności:
```bash
npm install
```

2. Uruchom serwer deweloperski:
```bash
npm run dev
```

3. Otwórz przeglądarkę pod adresem `http://localhost:3000`

## Budowanie dla produkcji

```bash
npm run build
```

Zbudowane pliki znajdziesz w folderze `dist/`.

## Struktura projektu

```
src/
├── index.html          # Główny plik HTML
├── css/
│   └── input.css       # Style Tailwind CSS
└── js/
    └── main.js         # Alpine.js i logika JavaScript
```

## Funkcjonalności

- Responsywny design
- Sticky header z nawigacją
- Interaktywne formularze kontaktowe
- Akordeon FAQ
- Smooth scrolling
- Mobile-first approach 