---
title: Więc jeśli ustawię konto jako prywatne, tylko zaakceptowani obserwujący będą widzieć moje wpisy?
slug: konto-prywatne
---

Tak i nie.

Na prywatnym koncie akceptujesz prośby o obserwowanie _poprzez interfejs Mastodona_. To znaczy, że tylko ludzie, których zaakceptujesz na listę obserwowanych, zobaczą Twoje wpisy oznaczone jako **tylko obserwujący**. Twoje **niewidoczne** wpisy wciąż będą widoczne na Twoim profilu, a Twoje **prywatne** wpisy pojawią się na Twoim profilu oraz na lokalnej i globalnych osiach czasu.

**Ale...**

{% emoji "❗", "czerwony wykrzyknik" %} Każde konto na Mastodonie (na serwerze bez modyfikacji) udostępnia także kanał RSS zawierający wszystkie publiczne i niewidoczne wpisy - to znaczy te wpisy, które są widoczne na stronie profilu danego konta. Nie trafiają tam wpisy tylko dla obserwujących ani wiadomości bezpośrednie. Jeśli [dodasz ostrzeżenie o zawartości (CW)](#co-oznacza-cw), na kanale RSS będzie widoczna będzie tylko treść CW bez rozwinięcia.

Twój kanał RSS jest dostępny pod adresem `https://<adres-twojego-serwera>/users/<twoja-nazwa-użytkownika>.rss`. Na przykład, w przypadku mojego konta `https://elekk.xyz/@noelle` kanał RSS znajduje się pod adresem `https://elekk.xyz/users/noelle.rss` (pamiętaj aby pominąć `@`!)

**Każdy może zasubskrybować Twój kanał RSS za pomocą specjalnego czytnika, aby śledzić na bieżąco Twoje publiczne i niewidoczne wpisy.** Nie da się kontrolować, kto może wyświetlić Twój kanał RSS, a kto nie. Jednak konstrukcja kanału RSS wyklucza możliwość wyświetlenia w nim wpisów tylko dla obserwowanych lub wspomnianych osób. _Jeżeli wszystkie Twoje wpisy są widoczne tylko dla obserwujących, Twój kanał RSS będzie pusty._

Pamiętaj, że zawsze możesz zmienić domyślne ustawienie widoczności Twoich wpisów w sekcji **Preferencje > Pozostałe > Widoczność wpisów**. Jeżeli Twoje konto jest ustawione jako prywatne, sensownym pomysłem może być ustawienie domyślnej widoczności wpisów jako 'Tylko obserwujący'. Dzięki temu nie będziesz mieć możliwości dodania wpisu publicznego lub niewidocznego przez przypadek.
