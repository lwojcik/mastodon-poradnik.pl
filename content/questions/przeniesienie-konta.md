---
title: Wpadła mi w oko inna, ciekawsza instancja. Czy mogę przenieść moje konto?
slug: przeniesienie-konta
---

Tak i nie.

Możesz tego dokonać na jeden z dwóch sposobów: poprzez **przekierowanie** albo **migrację** konta.

Jeżeli wybierzesz **przekierowanie** konta, Twoje stare konto będzie wyświetlać komunikat o przeniesieniu i stracisz możliwość korzystania z niego (nie będzie się dało nic z niego opublikować). Zachowasz jednak możliwość wyeksportowania danych z tego konta oraz reaktywowania go w dowolnym momencie. Ludzie, którzy wejdą na Twoje stare konto, zobaczą informację, że można Cię znaleźć pod nowym adresem. Nic więcej nie zostanie przeniesione automatycznie.

Aby ustawić przekierowanie konta przejdź na stronę `[adres Twojego serwera]/settings/migration/redirect/new` (na przykład elekk.xyz/settings/migration/redirect/new). Link ten znajdziesz na stronie poświeconej migracji konta. Wystarczy, że wpiszesz nazwę konta, do którego chcesz ustawić przekierowanie, a Mastodon zajmie się resztą.

Przy przekierowaniu konta możesz przenieść część swoich danych ręcznie. Zobacz kroki 4-6 poniżej.

Jeżeli wybierzesz **migrację** konta, stanie się dokładnie to samo, co przy przekierowaniu konta. **Oprócz tego jednak**, wszyscy, którzy Cię obserwują, automatycznie zaobserwują Twoje nowe konto (dzięki czemu nikt nie będzie musiał drugi raz szukać i dodawać Cię do obserwowanych). _Możesz_ także przenieść swoich obserwowanych, listy, zablokowanych, wyciszonych, zablokowane domeny i zakładki - system nie zrobi tego automatycznie za Ciebie.

**W żadnym z powyższych przypadków Twoje wpisy nie zostaną przeniesione. Na nowym koncie zawsze zaczynasz z pustą historią wpisów.**

Poniżej znajdziesz listę kroków do przejścia, aby **zmigrować** Twoje konto, wraz z kilkoma krokami opcjonalnymi (wiemy, że tych kroków jest dużo, ale dla ułatwienia pewne kwestie są rozdzielone).

1. Stwórz **nowe** konto. Możesz je założyć na instancji, na której teraz jesteś, albo dowolnej innej.

2. Na Twoim **nowym** koncie kliknij `Preferencje`, a następnie przejdź do sekcji `Profil > Wygląd`. Poniżej Twojego awatara i nagłówka znajdziesz opcję **Ustaw konto jako prywatne** - upewnij się, że jest ona _odznaczona_ (gdyby była zaznaczona, istniałaby konieczność zatwierdzenia wszystkich obserwujących przeniesionych automatycznie w trakcie migracji). Jeżeli pole to zostało przez Ciebie odznaczone w tym kroku, kliknij przycisk **Zapisz zmiany** na górze lub na dole strony.

3. Na Twoim **nowym** koncie, pozostając w ustawieniach, przejdź do `Konto > Ustawienia konta`. Na dole strony, pod nagłówkiem **Przenoszenie z innego konta**, kliknij **utworzyć alias konta**.

4. Wpisz adres Twojego **starego** konta w formacie `uzytkownik@instancja` (na przykład `noelle@elekk.xyz`) i kliknij `Utwórz alias`.

5. (opcjonalnie) Na Twoim **starym** koncie wejdź w Ustawienia i przejdź do `Import i eksport > Eksportowanie danych`.

6. (opcjonalnie) Zobaczysz listę... hmmm... statystyk Twojego konta? Obok "Obserwowanych", "List", "Zablokowanych", "Wyciszonych", "Blokad domen" i "Zakładek", znajdziesz opcję {% emoji "⬇️", "strzałka w dół" %} `CSV`. Kliknij w nią przy każdej rzeczy, którą chcesz przenieść na swoje nowe konto; spowoduje to pobranie plików z listami tych rzeczy w ustandaryzowanym formacie. Zapamiętaj, gdzie pobrane pliki zostały zapisane na Twoim urządzeniu.

7. (opcjonalnie) Na Twoim **nowym** koncie, w Ustawieniach, przejdź do `Import i eksport > Importowanie danych`. Dla każdego pobranego wcześniej pliku (z wyjątkiem List, których nie da się jeszcze importować):

- Użyj rozwijanego menu (pod `Importowane dane`) aby wybrać właściwą rzecz do zaimportowania.
- Pod nagłówkiem `Dane`, kliknij przycisk "**Przeglądaj...**". Wyświetli się okno wyboru pliku. Wybierz jeden odpowiedni plik CSV spośród pobranych w punkcie 6.
- Zaznacz "**Nadpisz**", jeżeli ta opcja nie jest już zaznaczona.
- Kliknij "**Załaduj**".

8. Na Twoim **starym** koncie przejdź do Preferencji, a następnie do `Konto > Ustawienia konta`. Na dole tej strony, pod nagłówkiem `Przenieś konto` kliknij "**zrobić to tutaj**".

9. Wpisz adres Twojego **nowego** konta w formacie `uzytkownik@instancja` oraz hasło do Twojego **starego konta**. W ten sposób Mastodon weryfikuje, że to Ty jesteś właścicielem konta (na wypadek, gdybyś zapomniał(a) się wylogować i ktoś inny używał Twojego komputera). Następnie kliknij "**Przenieś obserwujących**".

I gotowe! Miej na uwadze, że cała migracja oraz zaimportowanie Twoich danych może potrwać dłuższą chwilę - szczególnie jeśli przenosisz się z wielkiej lub długo istniejącej instancji.

**[!!!]\*\***Ważne\*\*: Powyższy proces to najbliższa rzecz, jaką Mastodon ma do zaoferowania w kwestii zmiany nazwy użytkownika.

Specjalne podziękowania dla [Teda](https://peoplemaking.games/@esdin) i arachnomyrmex'a za pomoc przy weryfikacji tej instrukcji!
