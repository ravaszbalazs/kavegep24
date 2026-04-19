# CLAUDE.md - Frontend Website Rules

## Always Do First
- Telepítsd az ASTRO legfisebb változatát az NPM csomagokkal

## Content Rules
- Minden tartalomhoz készíts a /data mappában egy egy az oldalhoz vagy posthoz tartozó .ts file-t.
- Minden oldal tartalomnak és postnak külön .ts fileban legyenek tárolva.

## SEO Rules
- A /data/seo.ts fileba írd be az oldalakhoz és postokhoz tartozó változókat.
- Title
- Keywords
- Description
- OG URL
- OG Image 
- AEO informations
- ETC

## Design Rules
- használj Tailwind CSS-t.
- Legyen nagyon modern UI felület.

## Base information for website
- A honlap a Kávégép24 új weboldala lesz, Kávék, kávégépek értékesítése, bérlése, szervizelése, hozom-viszem szolgáltatás.
- Az egyik cél, hogy a cégeknek kávégép bérlés, kávéval lenne.
- A másik cél, hogy lakossági körben is elérhetőek legyenek a kávégképek értékesítése, szervizelése és kávé vásárlás.

## Animation
- A szekciók animálva jelenjenek meg, ahogy a címek is.
- Az oldalon használhatsz Page transition-t, hogy szebb legyen az oldalak közötti váltás.
- Használj kérlek lenis-t. ha nem lassítja az oldalt a finom scollozás beállításához.

## Color Rules
- Coffeebrown #4c0b15; 100%; 50%; 30%; 10%;  (first color, like H1-H6, links)
- black (text)
- white (background)
- yellow #cf7019;

## Font Rules
- public/fonts mppábn találod a HISENSE betűtípust kérlek ezt állítsd be a honlapon.

## Icons
- használj kérlek hairline stílusú ikonokat, egyésges méretben és egységes vonalvastagsággal.
- ha tudod akkor időeltolással akár animálhatod is.

## Language Rules
- Hungarian

## Build Rules
- az oldalt statikusan szeretném futtatni a saját szerveremen

## Navigation
- Szeretném, ha a desktop navigációnál a logo a navigációs sáv közepén lenne ilyen elrendezésben:


(Webshop) – Rendelésfelvétel
Kávéink
Kávégép-bérlés
Rólunk
WMF

Kávégép24 logo (Címlap link - /public/images/logo.png)

Blog
Szerviz
Kávégépbérlés Budapest
GYIK
Kapcsolat
(Kosár ikon)

- Mobil navigáció: Klasszikus fejléccel, bal oldalt logo, jobb oldalt hamburger menu

## Products
- Termékek kezelését XLSX fileból töltsd be, hogy könnyen lehessen kezelni és frissíteni az oldalt.
- Csinálj egy Megrendelés gombot minden termékhez, amit a fejlécnavigációban egy kosár számoljon össze.
- A kosárra kattintva lehessen elküldeni egy formon keresztül az ajánlat kérést az összeválogatott termékekre.
- Ha a kosárra kattintok, akkor jobb oldalról egy sider blokkon keresztül csússzon be az kosár tartalom és alatta a megrendelő form. A megrendelő formot web3forms-al fogjuk kezelni.

## Blog
- Minden blogbejegyzés tartalma külön bejegyzésenként .ts fileokba kerüljön. Így jobban elkülönülnek egymástól a blogbejegyzések.

- lehessen cimkézni és kategorizálni a bejegyzéseket.
- A Megjelenítést kérlek időrendi sorrendben csináld, lehessen publikálás dátumát megadni. Kérlek azt is számold ki, hogy körülbelül mennyi lehet az olvasási idő a bejegyzésnél.
- Legyen megjelenítve a szerző illetve legyen a szerzőknek saját oldala, fotóval, rövid bemutatkozással, Facebook és Linkedin, Twitter, Instagram linkkel. (szintén .ts fileból legyen szerkeszthető a szerzők oldal tartalma).
- Ha lehet a Blog lista oldalánál használj pagenation-t mert sok bejegyzés lesz így lehet majd váltani a blog oldalak között.
- A megjelenítés szerintem legyen vagy 3x3 vagy 4x4 -es megjelenítésű, thumbnail képekekkel szépen izléses card megjelenítési formában + pagenation, ha sok blogbejegyzés van.
- esetleg egy blogsetup.ts-ben lehessen változókkal beállítani a blog megjelenítését.
- fontos a blogbejegyzések SEO-zása ezért kérlek erre különösen figyelj oda. 
Illetve itt is mint mindenhol az oldalon fontosak lesznek az OG képek.

## CTA
- minden oldal alján egységes megjelenítésű CTA blokkot készíts, ami a tartalomra reflektál és a kapcsolatfelvételre vezet.

## Nyelvtan
- Amikor fogalmazol minden mondat új sorban kezdődik.
- Minden .ts file-t úgy írj meg, hogy tudjak használni <b> <br> tagokat.