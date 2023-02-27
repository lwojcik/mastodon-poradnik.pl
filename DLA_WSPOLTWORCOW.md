# Jak mogę zaangażować się w rozwój tego poradnika?

## Rozwój polskiej wersji

Jeżeli chcesz pomóc przy rozwoju polskiej wersji tego poradnika (czyli tego, który właśnie masz przed sobą :)), możesz to zrobić tutaj, na GitHubie poprzez [otwarcie nowego zgłoszenia](https://github.com/lwojcik/Mastodon-Poradnik/issues) lub [pull requestu](https://github.com/lwojcik/Mastodon-Poradnik/pulls).

Szczególnie mile widziane są:

- poprawki literówek, gramatyki, interpunkcji i innych przeoczeń powstałych na etapie przekładu,

- poprawki w treści uwzględniające zmiany w interfejsie kolejnych wersji Mastodona,

- przykłady, odnośniki i różne przejawy kultury typowe dla polskojęzycznej części fediwersum (nie tylko Mastodon!) obok (lub w miejsce) obecnych treści w odpowiedziach na niektóre pytania,

- wszystkie inne poprawki językowe, które poprawią brzmienie i inkluzywność przekazu - nawet jeżeli nie będą one do końca zgodne z duchem oryginału.

Nie wykluczam rozbudowywania poradnika o kolejne pytania (i chętnie też przeczytam sugestie nowych pytań) - jednak znacznie bardziej priorytetowe jest dopracowanie już istniejących treści.

## Jak zasugerować modyfikację istniejącego pytania?

Wszystkie pytania znajdziesz w katalogu [`content/questions`](./content/questions). Załóż forka projektu na swoim koncie na GitHubie (przycisk "Fork"), nanieś niezbędną zmianę w wybranym pytaniu, a następnie otwórz pull request z Twojego forka do repozytorium projektu.

Linki do GitHuba znajdziesz także pod treścią każdego pytania ("Zaproponuj zmianę" w dolnej części strony).

## Jak dodać nowe pytanie?

Procedura dodawania nowego pytania jest następująca:

1. Wymyśl tzw. _slug_ pytania. Jest to unikalny ciąg znaków, który będzie częścią adresu URL i pozwoli na zidentyfikowanie go w projekcie. Powinien być zrozumiały dla człowieka i może zawierać tylko litery (bez polskich znaków), cyfry i myślinik - do 3-4 słów, np. `przyklad-nowego-pytania`.

1. W katalogu [`content/questions`](./content/questions) załóż nowy plik o rozszerzeniu .md i nazwie takiej, jak slug - w naszym przykładzie będzie to `przyklad-nowego-pytania.md`.

1. W pliku `przyklad-nowego-pytania.md` dodaj następujący szablon:

   ```md
   ---
   title: Tytuł pytania
   slug: przyklad-nowego-pytania
   ---

   Treść odpowiedzi na pytanie
   ```

1. Uzupełnij treść pytania. Używaj [składni Markdown](https://stormit.pl/markdown/) np. do tworzenia list, nagłówków lub pogrubień.

1. Dodaj slug pytania do tablicy w pliku `[content/_data/orderedQuestionSlugs.json](./content/_data/orderedQuestionSlugs.json)` . Pozycja pytania w tablicy decyduje o tym, w którym miejscu poradnika to pytanie się pojawi. Kieruj się intuicją i postaraj się, aby pytanie wylądowało w okolicy pytań podobnych tematycznie. Jeżeli nie masz pomysłu - dodaj je jako trzecie pytanie od końca (przed pytaniem "Mam jeszcze inne pytania").

## Jak uruchomić projekt na moim komputerze?

Strona jest oparta o generator stron statycznych Eleventy i uruchamia się tak samo, jak większość projektów w Node.js. Do dodawania i edycji pytań uruchomienie projektu nie jest niezbędne - jednak warto to zrobić, aby przetestować wygląd nanoszonej zmiany na żywym projekcie.

Aby uruchomić projekt na swoim komputerze, musisz mieć zainstalowany Node.js w aktualnej wersji LTS (minimum 18). Możesz pobrać go ze strony [https://nodejs.org/en/](https://nodejs.org/en/) albo zainstalować za pomocą narzędzia [nvm](https://github.com/nvm-sh/nvm). Następnie postępuj według instrukcji:

1. Stwórz forka projektu na swoim koncie na GitHubie.
1. Sklonuj projekt na swój komputer: `git clone git@github.com/twojlogin:mastodon-poradnik.git`.
1. Wejdź do katalogu z projektem i zainstaluj zależności:

   ```bash
   cd mastodon-poradnik
   npm install
   ```

1. Uruchom projekt poleceniem `npm run dev`. Strona będzie dostępna na Twoim komputerze pod adresem `http://localhost:8080` albo `http://127.0.0.1:8080`.

1. Projekt możesz zatrzymać zamykając okno konsoli, w której został uruchomiony lub kombinacją klawiszy <kbd>Ctrl+C</kbd>.

Sugerujemy użycie edytora z obsługą składni Markdown, np. Visual Studio Code - posiada on kolorowanie składni i pozwala na podgląd edytowanej strony na żywo.

## Wytyczne językowe

1. **Treść pytania powinna zostać zadana z perspektywy osoby pytającej** (pierwsza osoba liczby pojedynczej lub mnogiej), a **odpowiedź udzielona z perspektywy osoby odpowiadającej** - zwracamy się do osoby pytającej na Ty. Osoba odpowiadająca na pytanie wyrażana jest w pierwszej osobie liczby mnogiej ("my").
1. W miarę możliwości **unikaj języka nacechowanego płciowo,** zwłaszcza (ale nie tylko) w stosunku do osoby pytającej. Zamiast "administrator serwera" użyj zwrotu "osoba administrująca serwerem" albo "administracja serwera". Nie bój się używać strony biernej i trybu rozkazującego. Wyjątkiem są sytuacje, gdy odnosimy się do konkretnej osoby i jej zaimki są znane - [przykład Natalie](https://mastodon-poradnik.pl/co-oznacza-swieczka/). Zależy nam, aby poradnik był lekturą inkluzywną i przyjazną dla szerokiego grona zainteresowanych osób.
1. Jeżeli to możliwe - **unikaj określenia "użytkownik" / "użytkownicy".** Lepszym słowem jest "osoba", "człowiek" albo "ludzie". Słowo "użytkownik" w odróżnieniu od angielskiego "user" nie jest neutralne płciowo. Ponadto w obu językach posiada ono pewne negatywne konotacje w kontekście negatywnych zjawisk w innych serwisach społecznościowych.
1. Opisując elementy interfejsu Mastodona albo mechanizmy w zewnętrznech aplikacjach - jeżeli posiadają polskie wersje językowe - **używaj oryginalnego brzmienia nazw opcji w polskiej wersji językowej**. Jeżeli polskie określenie może brzmieć myląco dla użytkownika, sensownym może być dopisanie angielskiego zwrotu (np. `Globalna oś czasu - ang. federated timeline`). Jeżeli aplikacja nie posiada polskiej wersji językowej, możesz opisać dane działanie, a następnie podać nazwę odpowiedniej opcji w oryginalnym brzmieniu po angielsku.
1. Jeżeli w treści pytania niezbędne jest użycie linku do innej strony, **umieść go w treści pytania bezpośrednio** - np. [https://mastodon-poradnik.pl](https://mastodon-poradnik.pl). Link nie powinien być skracany przez zewnętrzny serwis ani zawierać elementów niepotrzebnych do prawidłowego zlokalizowania zasobu (np. parametrów umożliwiających identyfikację źródła, z którego pochodzi ruch). W pewnych sytuacjach możesz linkować zwroty w treści odpowiedzi, jeżeli link nie jest konieczny do zrozumienia treści pytania. Pamiętaj, że poradnik jest czytany nie tylko w przeglądarkach internetowych, ale również na urządzeniach bez dostępu do internetu, np. czytnikach ebooków.
1. **Nie używaj emoji ani obrazków, które nie wnoszą nic do treści.** Czytniki ebooków mogą nie wyświetlać emoji poprawnie. Użycie obrazków jest dopuszczalne, ale powinny one wnosić istotną wartość do treści poradnika.
1. **Ostrożnie z terminologią techniczną.** Jeżeli wprowadzasz specyficzne słowo lub zwrot, którego znaczenie może nie być szeroko znane, wyjaśnij go w treści.
1. Jeżeli masz problem z zastosowaniem którejś z powyższych zasad, spokojnie! **Dodaj sugestię zmiany** - pomożemy Ci ją dopracować.

## Pomoc przy wersji oryginalnej (anglojęzycznej)

Jeżeli chcesz pomóc przy rozwijaniu [oryginalnej (anglojęzycznej) wersji tego poradnika](https://github.com/joyeusenoelle/GuideToMastodon) - sprawdź [instrukcję w oryginalnym projekcie](https://github.com/joyeusenoelle/GuideToMastodon/blob/main/contributing.md).
