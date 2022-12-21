# Niezbyt zwięzłe wprowadzenie do [Mastodona](https://joinmastodon.org/pl)

_[ Bazą wyjściową dla niniejszego poradnika jest [An Increasingly Less-Brief Guide to Mastodon](http://guidetomastodon.com/) autorstwa [Noëlle Anthony](https://github.com/joyeusenoelle) oraz [współtwórców](https://github.com/joyeusenoelle/GuideToMastodon/graphs/contributors). Pierwotnie miało to być po prostu wierne tłumaczenie oryginału. Jednak długofalowym celem tego poradnika jest wyjście poza rolę zwykłego przekładu językowego i nieco bardziej precyzyjne opisanie tego, jak działa Mastodon w Polsce. Dopóki jednak pewne koncepty i zjawiska nie zaistnieją na polskim Mastodonie, niniejszy poradnik będzie posługiwał się przykładami z oryginalnej wersji. ]_

<p style="text-align:center;"><h1>Spokojnie. Nie jest tak strasznie, jak mogłoby się wydawać.</h1></p>

**Mastodon różni się dość znacznie od Twittera, ale da się do niego przyzwyczaić.** Wszystkie istotne różnice są oznaczone tym emoji :bangbang:; z góry przepraszam, jeśli coś pominęłam. Dawno mnie nie było na Twitterze!

Zarówno autorka oryginału, jak i autor tłumaczenia dołożyli wszelkich starań, aby brzmiało to przystępnie, ale sugestie zmian są mile widziane! Jeżeli masz konto na GitHubie i chcesz pomóc przy tworzeniu oryginalnej wersji tego poradnika, możesz przesłać propozycje zmian bezpośrednio. Możesz również skontaktować się z autorką poradnika [na Mastodonie](https://elekk.xyz/@noelle) lub mailem: `noelle AT noelle.codes`.

Oryginalna wersja tej strony znajduje się pod adresem http://guidetomastodon.com. Linkując do niej, podlinkuj również do [@Noelle@elekk.xyz](https://elekk.xyz/@noelle). Dzięki!

Polskojęzyczną wersję tego poradnika (a więc tą, którą właśnie czytasz) znajdziesz zawsze pod adresem http://mastodon-poradnik.pl. Propozycje zmian do tej wersji mogą być [zgłaszane na GitHubie](https://github.com/lwojcik/Mastodon-Poradnik/issues).

Autor tłumaczenia robi to w dobrej wierze i bez większych oczekiwań wobec świata. Będzie mu jednak bardzo miło, jeśli przy linku do tłumaczenia znajdzie się jeden z linków do jego kont: [@lukem@masto.ai](https://masto.ai/@lukem) albo [@lukaszwojcik@mastodon.pl](https://mastodon.pl/@lukaszwojcik).

## Spis treści

- [Czym jest Mastodon?](#czym-jest-mastodon)
- [Co łączy go z Twitterem?](#co-łączy-go-z-twitterem)
- [Co łączy go z e-mailem?](#co-łączy-go-z-e-mailem)
- [Co odróżnia go od Twittera i e-maila? Albo inaczej: czym jest globalna i lokalna oś czasu?](#co-odróżnia-go-od-twittera-i-e-maila-albo-inaczej-czym-jest-globalna-i-lokalna-oś-czasu)
- [Czym jest fediwersum (ang. Fediverse)?](#czym-jest-fediwersum-ang-fediverse)
- [Jak mogę zbudować obecność marki na Mastodonie?](#jak-mogę-zbudować-obecność-marki-na-mastodonie)
- [Jak mogę uzyskać weryfikację na Mastodonie?](#jak-mogę-uzyskać-weryfikację-na-mastodonie)
- [No dobrze, to jak przekonać ludzi, że jestem osobą, za którą się podaję?](#no-dobrze-to-jak-przekonać-ludzi-że-jestem-osobą-za-którą-się-podaję)
- [JAK WYBRAĆ INSTANCJĘ?](#jak-wybrać-instancję)
- [Znalazłam inną instancję, która bardziej mi odpowiada. Czy mogę przenieść moje konto?](#znalazłam-inną-instancję-która-bardziej-mi-odpowiada-czy-mogę-przenieść-moje-konto)
- [Jak zmienić nazwę użytkownika?](#jak-zmienić-nazwę-użytkownika)
- [Jak wspomnieć kogoś, kto nie jest na mojej instancji?](#jak-wspomnieć-kogoś-kto-nie-jest-na-mojej-instancji)
- [Jakie są zasady?](#jakie-są-zasady)
- [Co zrobić, gdy zobaczę, że ktoś łamie zasady?](#co-zrobić-gdy-zobaczę-że-ktoś-łamie-zasady)
- [Jakie są rodzaje wpisów?](#jakie-są-rodzaje-wpisów)
- [Jak działają ustawienia prywatności?](#jak-działają-ustawienia-prywatności)
- [Jak bardzo prywatne jest "Prywatne"?](#jak-bardzo-prywatne-jest-prywatne)
- [Co się dzieje, gdy ktoś dodaje mnie do obserwowanych?](#co-się-dzieje-gdy-ktoś-dodaje-mnie-do-obserwowanych)
- [Więc jeśli ustawię konto jako prywatne, tylko zaakceptowani obserwujący będą widzieć moje wpisy?](#więc-jeśli-ustawię-konto-jako-prywatne-tylko-zaakceptowani-obserwujący-będą-widzieć-moje-wpisy)
- [Co jeżeli ktoś mnie obserwuje albo pisze do mnie, a ja sobie tego nie życzę?](#co-jeżeli-ktoś-mnie-obserwuje-albo-pisze-do-mnie-a-ja-sobie-tego-nie-życzę)
- [Jak sprawdzić, czy ktoś mnie wyciszył lub zablokował?](#jak-sprawdzić-czy-ktoś-mnie-wyciszył-lub-zablokował)
- [Co się dzieje, gdy przekroczę limit znaków?](#co-się-dzieje-gdy-przekroczę-limit-znaków)
- [Czym są hasztagi?](#czym-są-hasztagi)
- [Co oznacza "CW"?](#co-oznacza-cw)
- [Załączyłam obrazek do mojego tootka. Co to za ikonka z okiem?](#załączyłam-obrazek-do-mojego-tootka-co-to-za-ikonka-z-okiem)
- [Załączyłam obrazek do mojego tootka. Jak dodać do niego opis zawartości?](#załączyłam-obrazek-do-mojego-tootka-jak-dodać-do-niego-opis-zawartości)
- [Dlaczego powinnam opisywać moje obrazki?](#dlaczego-powinnam-opisywać-moje-obrazki)
- [Dlaczego moja znajoma na innej instancji może używać tej emotki, a ja nie?](#dlaczego-moja-znajoma-na-innej-instancji-może-używać-tej-emotki-a-ja-nie)
- [Dlaczego nie mogę wyszukać konkretnego słowa lub frazy?](#dlaczego-nie-mogę-wyszukać-konkretnego-słowa-lub-frazy)
- [Dlaczego nie mogę zacytować czyjegoś tootka jak na Twitterze?](#dlaczego-nie-mogę-zacytować-czyjegoś-tootka-jak-na-twitterze)
- [Kultura na Mastodonie jest jakaś taka... dziwna?](#kultura-na-mastodonie-jest-jakaś-taka-dziwna)
- [Co oznacza ![:red_candle:](red_candle_sm.png)?](#co-oznacza-)
- [Jaka jest ogólnie przyjęta etykieta na Mastodonie?](#jaka-jest-ogólnie-przyjęta-etykieta-na-mastodonie)
- [Mastodon jest spoko, ale Twitter wygląda lepiej.](#mastodon-jest-spoko-ale-twitter-wygląda-lepiej)
- [Mastodon jest spoko, ale chciałabym go używać w telefonie.](#mastodon-jest-spoko-ale-chciałabym-go-używać-w-telefonie)
- [Jak stworzyć kopię zapasową mojego konta na Mastodonie?](#jak-stworzyć-kopię-zapasową-mojego-konta-na-mastodonie)
- [Czy da się nawigować po Mastodonie za pomocą klawiatury?](#czy-da-się-nawigować-po-mastodonie-za-pomocą-klawiatury)
- [Jak działają polubenia na innych typach serwerów?](#jak-działają-polubenia-na-innych-typach-serwerów)
- [Dziwne, mój serwer nie ma kilku funkcji.](#dziwne-mój-serwer-nie-ma-kilku-funkcji)
- [Dziwne, mój serwer ma dodatkowe funkcje.](#dziwne-mój-serwer-ma-dodatkowe-funkcje)
- [Mam jeszcze inne pytania.](#mam-jeszcze-inne-pytania)
- [Jak mogę zaangażować się w rozwój tego poradnika?](#jak-mogę-zaangażować-się-w-rozwój-tego-poradnika)

## Czym jest Mastodon?

Mastodon to platforma do tworzenia sieci społecznościowych. Dzięki niej każdy może uruchomić własną stronę społecznościową oraz - jeżeli chce - udostępnić ją do użytku innym ludziom. Każda strona na Mastodonie może komunikować się z innymi stronami na Mastodonie (jak również [wieloma innymi](https://en.wikipedia.org/wiki/ActivityPub)). To takie skrzyżowanie Twittera z e-mailem, ale nieco różniące się nieco od nich.

Nazwa "Mastodon" pochodzi od [zespołu heavy-metalowego](https://www.mastodonrocks.com/), ale wyglądem nawiązuje do [wymarłego zwierzęcia](https://pl.wikipedia.org/wiki/Mastodonty).

## Co łączy go z Twitterem?

Dodajesz krótkie wpisy i widzisz aktualizującą się listę wpisów od Twoich znajomych. W osobnej kolumnie możesz sprawdzić powiadomienia (odpowiedzi, podbicia, polubienia i wiadomości bezpośrednie).

Wpisy na Mastodonie nazywane są "tootami" albo "tootkami" (ang. _"toots"_). Jeden toot może pomieścić do 500 znaków. Istnieją instancje Mastodona, które wyłamują się z tej reguły - np. najstarszy polski serwer Mastodona, 101010.pl, posiada limit 2048 znaków.

Mastodon obsługuje też hasztagi, czyli słowa poprzedzone znakiem #, np. "#giereczkowo" czy "#fotografia". Klikając w hasztag zobaczysz inne wpisy zawierające ten tag.

## Co łączy go z e-mailem?

:bangbang: Każda instancja Mastodona jest niezależna, ale działa w ramach jednej sieci, zupełnie jak serwery poczty e-mail. Gdy zakładasz skrzynkę e-mail na gmail.com, to nie dostajesz automatycznie skrzynki na interia.pl czy wp.pl, ale możesz wysyłać i odbierać wiadomości od użytkowników skrzynek na interia.pl czy wp.pl.

Tak samo tutaj - gdy zakładasz konto na mastodon.social, to nie dostajesz konta na każdej innej instancji. Możesz jednak rozmawiać z ludźmi z innych instancji, a oni mogą rozmawiać z Tobą.

Możesz mieć konta na wielu instancjach i używać każdego z nich do poruszania innych tematów. Możesz założyć konto na https://hackers.town aby pisać o technologii, konto na https://elekk.xyz aby rozmawiać o grach, oraz konto na https://mastodon.online do tematów ogólnych. Do każdego konta musisz logować się osobno i możesz mieć otwarte każde z nich w osobnej karcie lub oknie przeglądarki (wiele aplikacji mobilnych również posiada możliwość logowania na wielu kontach jednocześnie).

**Pamiętaj, że w przypadku Mastodona, pojęcia "serwer" i "instancja" oznaczają to samo.**

## Co odróżnia go od Twittera i e-maila? Albo inaczej: czym jest globalna i lokalna oś czasu?

:bangbang: Mastodon posiada dwie dodatkowe osie czasu, które możesz przeglądać: lokalną oś czasu (ang. 'Local timeline') i globalną oś czasu (ang. 'Federated timeline').

Lokalna oś czasu prezentuje wszystkie wpisy dodane przez użytkowników Twojej instancji, z wyjątkiem reakcji (reakcją jest każdy toot wysłany _jako odpowiedź_ na innego toota - samo wspomnienie innego użytkownika nie powoduje, że wpis staje się od razu odpowiedzią!).

Globalna oś czasu prezentuje publiczne wpisy wszystkich ludzi, o których istnieniu wie Twoja instancja - także tych z innych instancji. Twoja instancja wie o osobie z innej instancji wtedy, kiedy przynajmniej jeden użytkownik Twojej instancji KIEDYKOLWIEK doda tę osobę do obserwowanych.

Lokalna i globalna oś czasu mogą czasem przytłaczać ilością treści. Korzystaj z rozwagą!

## Czym jest fediwersum (ang. Fediverse)?

~~Niestety, nie mogę ci powiedzieć, czym jest fediwersum~~

Fediwersum (ang. _"fediverse"_ albo _"fedi"_) to rozproszony zbiór serwerów, które porozumiewają się ze sobą za pomocą protokołów ActivityPub lub OStatus (tak szczerze, jeżeli nie tworzysz oprogramowania do komunikacji z fediwersum, to nie musisz wiedzieć co to oznacza).

Istnieje mnóstwo różnych rodzajów oprogramowania w fediwersum, takich jak Pixelfed, Pleroma, Misskey czy WriteFreely. Mastodon jest jednym z najpopularniejszych i to o nim traktuje to wprowadzenie. Jeżeli używasz czegoś innego, ten poradnik raczej niewiele Ci pomoże.

## Jak mogę zbudować obecność marki na Mastodonie?

:bangbang: W skrócie: **bardzo ostrożnie.**

Mamy za sobą kilkanaście lat życia z Twitterem, Facebookiem i Bóg jeden wie iloma innymi serwisami, które przekształciły się w platformy do SEO, budowania świadomości marki, korporacyjnej synergii - no i powiem bez ogródek: większość z nas ma już tego wszystkiego po dziurki w nosie.

Mastodon nie polega na konwersji obserwujących w klientów. To nie jest kolejne miejsce na SEO czy budowanie lojalności wobec marek. **Mastodon to ludzie.** Nie patrz na użytkowników Mastodona jak na potencjalnych klientów, którzy mogliby coś od Ciebie kupić. Patrz na ich jak na _ludzi_, których chciał(a)byś poznać.

Jeżeli tworzysz coś i masz przeczucie, że ktoś mógłby kupić Twój produkt albo skorzystać z Twoich usług - wspaniale! Powiedz nam o tym - ale \_miej w pamięci, że jesteśmy ludźmi z krwi i kości, a nie grupą docelową Twojego marketingu.

Jest jedno irytujące zachowanie typowe dla wielu firm, a niezbyt widziane wśród ludzi: **nie wysyłaj nikomu niezamówionych wiadomości reklamujących Twój produkt lub usługę**. Daj sobie trochę czasu na poznanie Twoich rozmówców, wchodź z nimi w dyskusje. Gdy masz pewność, że ktoś mógłby zainteresować się tym, co masz do zaoferowania i jeszcze o tym nie wie - _dopiero wtedy_ powiedz tej osobie o swoim produkcie / usłudze.

Jeżeli reprezentujesz firmę i Twój szef powiedział Ci, że Wasza firma musi być obecna na Mastodonie, możesz mu odpowiedzieć tak (i możesz też dodać, że to ja kazałam Ci tak odpowiedzieć) _[ przyp. tłum.: autor tłumaczenia też się pod tym podpisuje]_:

> Mastodon tak nie działa. Jeżeli mamy tam być obecni, musimy wyznaczyć jedną osobę, która będzie mogła tam _być sobą_, a nie tylko robić za rzecznika prasowego marki. To oznacza, że ta osoba nie będzie się przyjaźnić ze wszystkimi (chociaż oczywiście będzie się starać), ale zawsze będzie traktować innych użytkowników jak ludzi, a nie cele marketingowe. Jeżeli Ci to pasuje, to chętnie się tym zajmę. Jeżeli nie, to powinieneś / powinnaś poświęcić więcej czasu na zrozumienie, jak Mastodon działa zanim zaczniesz myśleć o obecności naszej firmy na nim.

## Jak mogę uzyskać weryfikację na Mastodonie?

:bangbang: W przeciwieństwie do Twittera, Mastodon nie posiada wbudowanego mechanizmu weryfikacji. Wierzymy na słowo, że jesteś tym, za kogo się podajesz. Jeżeli widzisz kogoś ze znaczkiem wyglądającym jak ikonka weryfikacji na Twitterze (na przykład :white_check_mark:), to ta osoba po prostu dodała emoji do wyświetlanej nazwy.

Mimo to, na niektórych instancjach może być wymagane potwierdzenie tożsamości przed założeniem konta, ale **to nie jest reguła**.

**Jeżeli ktoś podaje się za Ciebie, skontaktuj się z administratorem instancji, z której ta osoba korzysta, aby rozwiązać ten problem.**

## No dobrze, to jak przekonać ludzi, że jestem osobą, za którą się podaję?

Instancje Mastodona umożliwiają dodanie metadanych do Twojego profilu - maksymalnie do 4 pozycji wyświetlonych w tabelce na stronie Twojego profilu, które nie wliczają się w limit znaków w opisie Twojego profilu. Jeżeli wstawisz w te pola linki do innych Twoich stron, na niektórych instancjach znajdziesz możliwość zweryfikowania, czy te strony _należą do Ciebie_ poprzez dodanie linku zwrotnego do Twojego konta Mastodona na tych stronach. Na przykład, jeżeli posiadasz stronę-wizytówkę, możesz dodać link do niej w metadanych Twojego konta na Mastodonie, a potem dodać link do Twojego profilu na Mastodonie w nagłówku Twojej strony, i w ten sposób Mastodon zweryfikuje, że strona należy do Ciebie.

Jeżeli Twoja instancja na to pozwala, instrukcję dodania linku do weryfikacji znajdziesz na stronie dostępnej po kliknięciu **Edytuj profil**.

## JAK WYBRAĆ INSTANCJĘ?

Celowo wielkimi literami.

Jeżeli chcesz czytać wpisy Polaków, rozmawiać z ludźmi po polsku i niezbyt interesuje Cię zagraniczna część fediwersum, Twoim najlepszym wyborem będzie jedna ze znanych instancji prowadzonych przez Polaków. Najstarszą polską instancją Mastodona jest [101010.pl](https://101010.pl). Są też inne, takie jak [pol.social](https://pol.social/), [mastodon.pl](https://mastodon.pl/) czy [dadalo.pl](https://dadalo.pl/).

Z perspektywy kogoś, kogo interesuje szersza (anglojęzyczna) część fediwersum, kwestia wyboru instancji nieco się komplikuje. Wiele instancji ma specyficzny profil: `mastodon.lol` jest bezpieczną przestrzenią dla osób queerowych, `hackers.town` jest przystanią dla maniaków komputerów, `wandering.shop` powstał z myślą o fanach science fiction i fantasy, a `botsin.space` pozwala na utrzymywanie i rozwój kont automatycznych (botów). Na `oulipo.social` niedozwolone jak dodawanie wpisów zawierających choćby jedną literę "e".

Jeżeli nie masz jeszcze konta na Mastodonie, dobrym pomysłem może być użycie jednej z większych instancji, takich jak `mastodon.online` - flagowej instancji, liczącej ponad 100 tys. użytkowników - czy też `mstdn.social` lub `mas.to`. Te instancje posiadają liczne, z reguły przyjazne społeczności, którzy chętnie pomogą Ci znaleźć bardziej wyspecjalizowaną instancję, jeżeli zechcesz takiej poszukać. Przestrzegam jednak, że z uwagi na rozmiar tych instancji, ich lokalne osie czasu potrafią odświeżać się bardzo szybko.

(_Uwaga na marginesie odnośnie mastodon.social: to **jest** największa ogólnodostępna instancja (największa ogólnie jest instancja japońskojęzyczna [mstdn.jp](https://mstdn.jp)). Wielu ludzi zakłada tam konta i nigdy nie interesuje się innymi instancjami. Jeśli masz już konto na mastodon.social, dobrym pomysłem jest traktowanie go jak tymczasowego przystanku zanim znajdziesz instancję lepiej odpowiadającą Twoim potrzebom i zainteresowaniom. Gdy już taką znajdziesz, możesz wyeksportować wszystkich ludzi, których obserwujesz, masz wyciszonych i zablokowanych na mastodon.social i zaimportować je na nowym koncie, dzięki czemu nie musisz szukać wszystkich drugi raz._)

Jeżeli masz już konto na jakiejś instancji, ale masz wątpliwości czy jest ona dobrym miejscem dla Ciebie, poproś o sugestie instancji, które mogłyby bardziej Ci odpowiadać tematycznie. Ponadto, wyszukaj treści według #hasztaga, który Cię interesuje. Jeżeli znajdziesz większą grupę ludzi z jednej instancji, która rozmawia na dany temat - być może warto się tą instancją zainteresować.

Możesz także skorzystać z narzędzia do wyboru instancji na [joinmastodon.org](https://joinmastodon.org/communities) czy też formularza na [instances.social](https://instances.social/), jednak ich listy zawierają _mnóstwo_ instancji i może to być dla Ciebie przytłaczające. Spokojnie, nie spiesz się.

## Znalazłam inną instancję, która bardziej mi odpowiada. Czy mogę przenieść moje konto?

Tak i nie.

Są dwa sposoby aby to osiągnąć: możesz **przekierować** albo **zmigrować** swoje konto.

Jeżeli wybierzesz **przekierowanie** konta, Twoje stare konto będzie wyświetlać informacje o przeniesieniu i stracisz możliwość korzystania z niego (czyli przede wszystkim stracisz możliwość publikowania na nim). Wciąż będziesz mieć możliwość wyeksportowania danych z tego konta oraz reaktywowania go w dowolnym momencie. Użytkownicy, którzy wejdą na Twoje stare konto, zobaczą informację, że mogą Cię znaleźć pod nowym adresem. Nic więcej nie zostanie przeniesione automatycznie. Aby ustawić przekierowanie konta przejdź na stronę `[adres Twojego serwera]/settings/migration/redirect/new` (na przykład elekk.xyz/settings/migration/redirect/new). Link te znajdziesz na stronie poświeconej migracji konta. Wystarczy, że wpiszesz nazwę konta, do którego chcesz ustawić przekierowanie, a Mastodon zajmie się resztą.

(Przy przekierowaniu konta masz możliwość ręcznego przeniesienia części swoich danych. Zobacz kroki 4-6 poniżej.)

Jeżeli wybierzesz **migrację** swojego konta, stanie się dokładnie to samo, co przy przekierowaniu konta. **Ale oprócz tego**, wszyscy, którzy Cię obserwują, automatycznie zaobserwują Twoje nowe konto (dzięki czemu nikt nie będzie musiał drugi raz szukać i dodawać Cię do obserwowanych). Ponadto, _możesz_ przenieść swoich obserwowanych, listy, zablokowanych, wyciszonych, zablokowane domeny i zakładki - system nie zrobi tego automatycznie za Ciebie.

**W żadnym z powyższych przypadków Twoje wpisy nie zostaną przeniesione. Na nowym koncie zaczynasz z pustą historią wpisów.**

Poniżej znajdziesz listę kroków do przejścia, aby **zmigrować** Twoje konto, wraz z kilkoma krokami opcjonalnymi (tak, wygląda jakby było ich sporo, ale dla ułatwienia pewne kwestie są rozdzielone).

1. Stwórz **nowe** konto. Możesz je założyć na instancji, na której teraz jesteś, albo na innej.
2. Na Twoim **nowym** koncie kliknij `Preferencje`, a następnie przejdź do sekcji `Profil > Wygląd`. Poniżej Twojego awatara i nagłówka znajdziesz opcję **Ustaw konto jako prywatne** - upewnij się, że jest ona _odznaczona_ (gdyby była zaznaczona, musiał(a)być zatwierdzić wszystkich obserwujących przeniesionych automatycznie w trakcie migracji). Jeżeli w tym kroku musiałeś(aś) odznaczyć to pole, kliknij przycisk **Zapisz zmiany** na górze lub na dole strony.
3. Na Twoim **nowym** koncie, pozostając w ustawieniach, przejdź do `Konto > Ustawienia konta`. Na dole strony, pod nagłówkiem **Przenoszenie z innego konta**, kliknij **utworzyć alias konta**.
4. Wpisz adres Twojego **starego** konta w formacie `uzytkownik@instancja` (na przykład `noelle@elekk.xyz`) i kliknij `Utwórz alias`.
5. (opcjonalnie) Na Twoim **starym** koncie wejdź w Ustawienia i przejdź do `Import i eksport > Eksportowanie danych`.
6. (opcjonalnie) Ujrzysz listę... hmmm... statystyk Twojego konta? Obok "Obserwowanych", "List", "Zablokowanych", "Wyciszonych", "Blokad domen" i "Zakładek", znajdziesz opcję :arrow_down:`CSV`. Kliknij w nią przy każdej rzeczy, którą chcesz przenieść na swoje nowe konto; spowoduje to pobranie plików z listami tych rzeczy w ustandaryzowanym formacie. Zapamiętaj, gdzie wylądowały pobrane pliki.
7. (opcjonalnie) Na Twoim **nowym** koncie, w Ustawieniach, przejdź do `Import i eksport > Importowanie danych`. Dla każdego pobranego wcześniej pliku (z wyjątkiem List, których nie da się jeszcze importować):

- Użyj rozwijanego menu (pod `Importowane dane`) aby wybrać właściwą rzecz do zaimportowania.
- Pod nagłówkiem `Dane`, kliknij przycisk "**Przeglądaj...**". Wyświetli się okno wyboru pliku. Wybierz plik CSV, który pobrałeś(aś) wcześniej.
- Zaznacz "**Nadpisz**", jeżeli ta opcja nie jest już zaznaczona.
- Kliknij "**Załaduj**".

8. Na Twoim **starym** koncie przejdź do Preferencji, a następnie do `Konto > Ustawienia konta`. Na dole tej strony, pod nagłówkiem `Przenieś konto` kliknij "**zrobić to tutaj**".
9. Wpisz adres Twojego **nowego** konta w formacie `uzytkownik@instancja` oraz hasło do Twojego **starego konta**. W ten sposób Mastodon weryfikuje, że to Ty jesteś właścicielem konta (na wypadek, gdybyś zapomniał(a) się wylogować i ktoś inny używał Twojego komputera). Następnie kliknij "**Przenieś obserwujących**".

I gotowe! Miej na uwadze, że cała migracja oraz zaimportowanie wszystkiego, co załadowałeś(aś), może potrwać dłuższą chwilę, szczególnie jeśli przenosisz się z wielkiej lub starej instancji.

:bangbang: **Ważne**: Powyższy proces jest najbliższą rzeczą, jaką Mastodon ma do zaoferowania w kwestii zmiany nazwy użytkownika.

Specjalne podziękowania dla [Teda](https://peoplemaking.games/@esdin) i arachnomyrmex'a za pomoc przy tworzeniu tych kroków!

## Jak zmienić nazwę użytkownika?

:bangbang: W skrócie: nie da się. Gdy już wybierz nazwę użytkownika dla swojego konta, nie da się jej zmienić, więc wybieraj z rozwagą.

Rozwijając odpowiedź: jedyną możliwością zmiany nazwy użytkownika jest migracja konta (zobacz wyżej), jednakże nie zabierzesz ze sobą historii swoich wpisów.

Niektórzy bardziej ambitni administratorzy próbowali zmieniać nazwy użytkowników bezpośrednio w bazie danych (na prośbę samych zainteresowanych), ale z jakiegoś powodu federacja na takich kontach przestawała działać; ludzie zgłaszali problemy z dostarczaniem wiadomości i widocznością wzmianek na innych instancjach.

## Jak wspomnieć kogoś, kto nie jest na mojej instancji?

:bangbang: Nazwy użytkownika na Mastodonie przyjmują postać @_nazwa_uzytkownika_@_adres_instancji_. Moje konto na mastodon.social to @<span>noelle</span>@mastodon.social; moje konto na elekk.xyz to @<span>noelle</span>@elekk.xyz. Gdy wspominasz kogoś na innej instancji, musisz wpisać całą nazwą wraz z instancją (jednakże formularz dodawania wpisu zasugeruje Ci nazwę użytkownika jeżeli Twoja instancja wie o jej istnieniu).

Jeśli wspominasz o kimś z Twojej instancji, wystarczy wpisać tylko pierwszy człon. Jeśli jesteś ne elekk.xyz, samo @noelle zadziała tak samo, jak @<span>noelle</span>@elekk.xyz. Pomijając "@_adres_instancji_" dajesz Mastodonowi do zrozumienia, że chcesz rozmawiać z użytkownikiem z tej samej instancji co Twoja.

## Jakie są zasady?

Zasady zależą od instancji. Każda instancja posiada stronę pod adresem https://<span>_adres_instancji_</span>/about, która zazwyczaj zawiera informacje o instancji oraz określa zasady społeczności. Dla przykładu, zasady instancji mastodon.social znajdują się na https://mastodon.social/about.

Miej na uwadze, że są to zazwyczaj wskazówki, a nie sztywne reguły. Jako że każda instancja jest obsługiwana przez osobny zespół moderatorski - często w składzie jednej osoby! - ma on ostatnie słowo w kwestii tego, co na jego instancji jest dozwolone, a co nie. Administracja Twojej instancji może nawet posunąć się do blokowania innych instancji w całości, jeżeli ich użytkownicy okażą się niekompatiblni z wartościami wyznawanymi przez Twoją instancję, a moderacja tamtej instancji nie wykazuje chęci współpracy.

## Co zrobić, gdy zobaczę, że ktoś łamie zasady?

Jeżeli zauważysz łamanie zasad, możesz je zgłosić. Kliknij na `...` pod wpisem naruszającym zasady i wybierz `Zgłoś @nazwa_uzytkownika` (opcja ta znajduje się zazwyczaj gdzieś na dole menu). Otworzy się okno, w którym możesz zaznaczyć inne wpisy zgłaszanego użytkownika, jak również wpisać _powód_ zgłoszenia, aby ułatwić moderacji zrozumienie, dlaczego wysyłasz zgłoszenie.

Jeżeli użytkownik jest na innej instancji, to obok powodu zgłoszenia znajdziesz także przełącznik umożliwiający przekazanie zgłoszenia do instancji użytkownika. W ten sposób zgłoszenie trafi nie tylko do moderacji Twojej instancji, ale również do moderacji instancji tego użytkownika. Zanim jednak to zrobisz, **sprawdź reguły instancji tamtego użytkownika**. Może się okazać, że wcale nie łamie on reguł swojej instancji.

**Moderatorzy i administratorzy _Twojej_ instancji będą widzieli, że zgłoszenie zostało wysłane od Ciebie. Jeżeli wybierzesz opcję przekazania zgłoszenia do instancji danego użytkownika, moderatorzy i administratorzy tamtej instancji _nie zobaczą_, kto przysłał zgłoszenie - dowiedzą się tylko, że zgłoszenie przyszło z Twojej instancji.**

Co do zasady nie otrzymasz powiadomienia o akcjach podjętych przez moderatorów lub administratorów w odpowiedzi na Twoje zgłoszenia. Możesz ich o to zapytać, ale przygotuj się na odpowiedź w rodzaju "nie komentujemy naszych reakcji na zgłoszenia".

## Jakie są rodzaje wpisów?

:bangbang: Wpisy na Mastodonie (podobnie jak w całym fediwersum) mogą być połączone ze sobą na różne sposoby. Używam trzech terminów na określenie różnych rodzajów wpisów. Niekoniecznie są to określenia używane przez innych ludzi.

- **Samodzielne wpisy** to takie wpisy, które nie są odpowiedziami na inne wpisy. (Tzn. żeby stworzyć taki wpis nie musiałeś(aś) klikać "Odpowiedz"). Są one na samej górze w sekwencji. W samodzielnych wpisach możesz dodawać nazwy użytkownika innych ludzi, aby ich oznaczyć; takie wpisy nie stają się odpowiedziami. **Przykład:** Możesz użyć standardowego formularza dodawania wpisu ("Co Ci chodzi po głowie" albo "What's on your mind?" przy standardowych ustawieniach Mastodona) aby dodać nowy wpis.

- **Odpowiedzi na własne wpisy** są, jak sama nazwa wskazuje, bezpośrednimi odpowiedziami na jeden z Twoich samodzilnych wpisów albo na inną odpowiedź na własny wpis. W nich również możesz oznaczać innych ludzi. Możesz dodawać tyle odpowiedzi do swoich wpisów, ile chcesz i _dopóki żaden wpis innego użytkownika nie pojawi się powyżej tego, których już dodałeś(aś) do sekwencji_, staną się one sekwencją odpowiedzi. **Przykład:** Możesz kliknąć na ikonkę odpowiedzi przy własnym wpisie, aby dodać odpowiedź na niego, a następnie kliknąć na ikonkę odpowiedzi przy już dodanej odpowiedzi na wpis, aby dodać kolejną.

- **Odpowiedzi** to wpisy, które są reakcjami na cudzy wpis, _lub cudzą odpowiedź_ na cudzy wpis. **Przykład**: Możesz kliknąć na ikonkę odpowiedzi przy cudzym wpisie, aby na niego odpowiedzieć, **albo** kliknąć ikonkę odpowiedzi przy cudzym wpisie, aby dodać do niego odpowiedź, **albo** kliknąć ikonkę odpowiedzi przy swojej odpowiedzi na cudzy wpis.

Załączam diagram [tutaj](replies.png) (jako link, bo jest dość duży). Zwróć uwagę, że gdy tylko czyjś wpis zostanie dodane do sekwencji, Twoje odpowiedzi przestają działać jako odpowiedzi na Twoje własne wpisy. Jest to istotne, ponieważ odpowiedzi na własne wpisy i odpowiedzi innych ludzi na Twoje wpisy są wyświetlane inaczej na osiach czasu Twoich obserwujących.

## Jak działają ustawienia prywatności?

Pod każdym wpisem znajdziesz kilka ikonek: m.in. spinacza, kuli ziemskiej albo kłódki, litery "CW" i dwuliterowego kodu kraju oznaczającego język Twojego wpisu. Kliknij na ikonkę kuli ziemskiej lub kłódki aby wybrać ustawienia prywatności dla Twojego wpisu. _Możesz ustawić domyślny poziom prywatności dla Twoich wpisów w sekcji **Preferencje > Pozostałe > Widoczność postów**._

- **Publiczny (ang. Public)** oznacza, że wszyscy mogą zobaczyć Twój wpis. Pojawi się on na liście Twoich wpisów oraz na osiach czasu Twoich obserwujących. Twoje _samodzielne wpisy_ i _odpowiedzi na własne wpisy_ ustawione jako publiczne pojawią się: na liście Twoich wpisów, w osiach czasu Twoich obserwujących, w lokalnych i globalnych osiach czasu, a także na liście wspomnień u każdego, kogo oznaczysz za pomocą nazwy użytkownika. Twoje publiczne _odpowiedzi_ pojawią się na liście Twoich _wpisów i odpowiedzi_ (ale nie na liście Twoich wpisów - to osobna lista!), w osiach czasu każdego z Twoich obserwujących, którzy _także_ obserwują osobę, której odpowiadasz, a także na liście wspomnień u każdego, kogo oznaczysz za pomocą nazwy użytkownika.

- **Niewidoczny (ang. Unlisted)** oznacza, że każdy może zobaczyć Twój wpis, ale nie pojawi się on na publicznych osiach czasu - ani lokalnych, ani globalnych. Poza tym, wpisy oznaczone jako niewidoczne działają dokładnie tak samo, jak wpisy publiczne.

- **Tylko obserwujący (ang. Followers only)** oznacza, że tylko ludzie, którzy Cię obserwują, oraz ludzie, których wspomnisz w treści wpisu mogą go zobaczyć w swoich osiach czasu lub na stronie Twojego profilu. Gdy ktoś, kto Cię nie obserwuje, otworzy Twój profil, nie zobaczy wpisów tylko dla obserwujących. _Z perspektywy Twoich obserwujących_, wpisy tylko dla obserwujących działają dokładnie tak samo jako wpisy niewidczne. **Twoje wpisy tylko dla obserwujących, w których wspominasz innego użytkownika, pojawią się we wspomnieniach u tego użytkownika, nawet jeżeli ten użytkownik nie obserwuje Cię!**

- :bangbang: **Tylko wspomniane osoby (ang. Mentioned people only)** oznacza dokładnie to: tylko ci ludzie, których wspomnisz w treści wpisu, zobaczą go i będzie on widoczny dla **wszystkich** osób, które zostały wspomniane (o ile Cię nie zablokowały lub wyciszyły). Pojawi się on na liście ich wspomnień oraz, na serwerach Mastodona od wersji 3.0 wzwyż, w kolumnie Wiadomości bezpośrednie.

Miej na uwadze, że serwery, które używają oprogramowania kompatybilnego z Mastodonem, ale nie tym samym co Mastodon, mogą zignorować powyższe ustawienia prywatności przy wysyłce wiadomości do ich użytkowników - używaj tej opcji z rozwagą!

## Jak bardzo prywatne jest "Prywatne"?

Chcę to podkreślić z całą mocą: **Wpisy widoczne tylko dla wspomnianych ("Wiadomości bezpośrednie") nie są szyfrowane ani zabezpieczone.**

Administrator Twojego serwera ma możliwość odczytania _wszystkich_ tootów opublikowanych na jego serwerze, jak również _wszystkich_ tootów wysłanych do użytkownika na jego serwerze. **Jednakże** proces ten jest upierdliwy. Twoje prywatne wpisy nie pojawią się w panelu administracyjnym serwera; aby się do nich dostać, Twój administrator musi się własnoręcznie zalogować do bazy danych - zazwyczaj za pomocą linii komend serwera. To _nie jest_ coś, co administratorzy dla kaprysu. Robią to tylko wtedy, kiedy muszą i jest ku temu ważny powód:

Jest to konieczny środek bezpieczeństwa. Administratorzy _nie chcą_ czytać Twoich prywatnych wpisów, ale muszą mieć taką możliwość, ponieważ prywatne wpisy mogą być wykorzystywane do cichego nękania innych ludzi lub innych nielegalnych działań bez wiedzy administratora. W wielu systemach prawnych administrator może być pociągnięty do odpowiedzialności _nawet jeżeli nie wiedział, że nadużycia miały miejsce_.

To powiedziawszy, Twój administrator przejrzy Twoje wpisy oznaczone jako prywatne tylko wtedy, gdy będzie podejrzewał, że dochodzi do nękania albo nielegalnych działań. Upewnij się, że ufasz swojemu administratorowi na tyle, aby Ci to nie przeszkadzało. Jeżeli nie, to może warto rozejrzeć się za inną instancją.

Skoro już przy tym jesteśmy, warto odnotować, że tak samo jest na większości platform społecznościowych. Administratorzy Twittera mogą czytać Twoje prywatne wiadomości. Administratorzy forum również mogą czytać Twoje wiadomości. Mastodon nie jest w tym aspekcie nowatorski ani nadzwyczajny - upewniam się tylko, że masz tego świadomość.

**Ogólna zasada jest taka: jeżeli aplikacja, której używasz, nie posiada [szyfrowania end to end](https://pl.wikipedia.org/wiki/Szyfrowanie_od_ko%C5%84ca_do_ko%C5%84ca), to informacja, którą przez nią przesyłasz, nie jest zabezpieczona, chyba że wykorzystasz [dodatkowe zewnętrzne narzędzia](https://pl.wikipedia.org/wiki/Pretty_Good_Privacy) do jej zabezpieczenia.**

## Co się dzieje, gdy ktoś dodaje mnie do obserwowanych?

~~Gdy ktoś dodaje Cię do obserwowanych, zaciągasz u tej osoby dług na całe życie. Będziesz musiał(a) porzucić swoje dotychczasowe życie dla tej osoby gdy tylko o to poprosi. A gdy już to zrobisz, ta osoba usunie Cię z obserwowanych. Jeśli sobie z tym poradzisz, będziesz mógł(a) wrócić do swojego normalnego życia.~~

Żartuję.

Gdy ktoś dodaje Cię do obserwowanych, osoba ta będzie widzieć Twoje wpisy na swojej stronie głównej, włączając w to wpisy widoczne tylko dla obserwujących. Jeżeli chcesz, możesz ograniczyć liczbę obserwujących Cię osób klikając **Edytuj profil** i wybierając **Ustaw konto jako prywatne**, dzięki czemu będziesz mieć możliwość ręcznego akceptowania i odrzucania ludzi, którzy chcą Cię obserwować.

## Więc jeśli ustawię konto jako prywatne, tylko zaakceptowani obserwujący będą widzieć moje wpisy?

Tak i nie.

Na prywatnym koncie akceptujesz prośby o obserwowanie _poprzez interfejs Mastodona_. To znaczy, że tylko ludzie, których zaakceptujesz na listę obserwowanych, zobaczą Twoje wpisy oznaczone jako **tylko obserwujący**. Twoje **niewidoczne** wpisy wciąż będą widoczne na Twoim profilu, a Twoje **prywatne** wpisy pojawią się na Twoim profilu oraz na lokalnej i globalnych osiach czasu.

**Ale...**

:bangbang: Każde konto na Mastodonie (na serwerze nieużywającym modyfikacji) udostępnia również kanał RSS zawierający wszystkie publiczne i niewidoczne wpisy - to znaczy te wpisy, które są widoczne na stronie profilu danego konta. Nie trafiają tam wpisy tylko dla obserwujących ani wiadomości bezpośrednie, a jeśli [dodasz ostrzeżenie o zawartości (CW)](#co-oznacza-cw), na kanale RSS będzie widoczna będzie tylko treść CW bez rozwinięcia.

Twój kanał RSS jest dostępny pod adresem `https://<adres-twojego-serwera>/users/<twoja-nazwa-użytkownika>.rss`; na przykład, w przypadku mojego konta `https://elekk.xyz/@noelle` kanał RSS znajduje się pod adresem `https://elekk.xyz/users/noelle.rss` (pamiętaj aby pominąć `@`!)

**Każdy może zasubskrybować Twój kanał RSS za pomocą specjalnego czytnika, aby śledzić na bieżąco Twoje publiczne i niewidoczne wpisy.** Nie da się wpłynąć na to, kto może wyświetlić Twój kanał RSS, a kto nie. Jednak konstrukcja kanału RSS wyklucza możliwość wyświetlenia w nim wpisów tylko dla obserwowanych lub wspomnianych osób. _Jeżeli wszystkie Twoje wpisy są widoczne tylko dla obserwujących, Twój kanał RSS będzie pusty._

Pamiętaj, że zawsze możesz zmienić domyślne ustawienie widoczności Twoich wpisów w sekcji **Preferencje > Pozostałe > Widoczność wpisów**. Jeżeli Twoje konto jest ustawione jako prywatne, sensownym pomysłem może być ustawienie domyślnej widoczności wpisów jako 'Tylko obserwujący', dzięki czemu nie będziesz mieć możliwości dodania wpisu publicznego lub niewidocznego przez przypadek.

## Co jeżeli ktoś mnie obserwuje albo pisze do mnie, a ja sobie tego nie życzę?

Masz kilka możliwości.

- **Jeśli nie chcesz widzieć wpisów tej osoby**, możesz ją _wyciszyć_. Zablokuje to wyświetlanie wpisów od tej osoby we wszystkich Twoich osiach czasu. Opcjonalnie możesz również zablokować powiadomienia od nich (dodawanie do ulubionych, podbicia i wzmianki). Zatem jeżeli nie chcesz widzieć wpisów danej osoby, ale chcesz widzieć, kiedy ta osoba wchodzi z Tobą interakcje - jest to możliwe.

- **Jeśli nie chcesz widzieć tej osoby oraz nie chcesz, aby ta osoba widziała Ciebie**, możesz ją _zablokować_. Zablokowana osoba zostanie również automatycznie wyciszona. Jeżeli ta osoba Cię obserwowała i (lub) Ty obserwowałeś(aś) ją, to nie będzie już możliwe. Osoba ta nie będzie miała możliwości dodania Cię do obserwowanych i nie zobaczysz jej w żadnej z osi czasu dopóki jej nie odblokujesz (ale zobacz niżej).

- **Jeśli ta osoba nęka Cię albo łamie zasady w inny sposób**, możesz [ją zgłosić](#co-zrobić-gdy-zobaczę-że-ktoś-łamie-zasady) i, miejmy nadzieję, Twój moderator zajmie się tym.

Wszystkie trzy opcje są dostępne po kliknięciu `...` przy jednym z wpisów dego użytkownika lub na jego profilu wewnątrz interfejsu webowego Mastodona.

**Ale.**

Podobnie jak w przypadku [prywatnego konta](#więc-jeśli-ustawię-konto-jako-prywatne-tylko-zaakceptowani-obserwujący-będą-widzieć-moje-wpisy), każdy użytkownik - nawet zablokowany lub zawieszony przez moderatora - może otworzyć Twoją publiczą stronę lub kanał RSS i zobaczyć Twoje publiczne i niewidoczne tooty. Niestety nie ma na to dobrego rozwiązania, może z wyjątkiem ustawienia wszystkich tootów jako widoczne tylko dla obserwujących.

## Jak sprawdzić, czy ktoś mnie wyciszył lub zablokował?

Nie dostaniesz powiadomienia o tym, że ktoś Cię wyciszył lub zablokował.

Jeśli ktoś Cię wyciszył, nie będziesz wiedzieć tego na pewno. Jeśli ta osoba uparcie nie odpisuje gdy wspominasz jej nazwę użytkownika, jest to oczywiście powód do podejrzeń, ale Mastodon specjalnie utrudnia rozpoznanie, czy zostałeś(aś) wyciszony(a) (pomijając inne powody, ma to na celu zapobiegnięcie sytuacji, w której ktoś nęka Cię z wielu kont celem obejścia wyciszenia).

Jeśli ktoś Cię zablokował, nie będziesz już obserwować tej osoby, jej wpisy nie pojawią się w Twojej osi czasu, i gdy otworzysz jej profil _wewnątrz inferfejsu webowego Mastodona_, żaden z wpisów tej osoby nie będzie widoczny (warto zaznaczyć, że jeżeli otworzysz profil kogoś, kogo _nie obserwujesz_, a wpisy tej osoby się nie załadują, to prawdopodobnie dlatego, że serwer działa wolno, a nie dlatego że ta osoba Cię zablokowała, więc nie wyciągaj pochopnych wniosków).

Jeśli ktoś Cię zablokował, wciąż możesz otworzyć publiczną stronę tej osoby i zobaczyć jej publiczne i niewidoczne wpisy. Publiczne profile nie wymagają autentykacji (tzn. nie musisz się logować na żadnej instancji, aby je zobaczyć), więc nie ma możliwości rozpoznania, że Ty to Ty i że użytkownik Cię zablokował. _Mimo to bądźmy szczerzy:_ jeśli ktoś Cię zablokował, to znaczy że nie życzy sobie Twojej obecności w pobliżu. _Możesz_ czytać publiczne i niewidoczne wpisy tej osoby, ale może jednak przestań? W znaczący sposób naruszasz prywatność tej osoby i z premedytacją przekraczasz granice, które ta osoba wyznaczyła, a argument w stylu "oprogramowanie na to pozwala, czyli to jest w porządku" jest marnym wytłumaczeniem. Zostaw tę osobę w spokoju, proszę.

## Co się dzieje, gdy przekroczę limit znaków?

Spokojnie. Po pierwsze, nie da się; Mastodon nie pozwoli Ci dodać wpisu dłuższego niż limit na Twojej instancji. Nie będziesz mieć żadnych nieprzyjemności z tego powodu.

Jeśli masz poczucie, że to co co chcesz przekazać jest za długie na jednego toota, albo przyszło Ci do głowy coś jeszcze już po opublikowaniu toota, możesz _odpowiedzieć na własnego toota_. Mastodon obsługuje wątkowanie tootów, więc możesz dodać dowolną liczbę tootów jako odpowiedzi jeden do drugiego, i cała seria wyświetli się każdemu, kto kliknie na którykolwiek z tootów w Twoim wątku.

A zatem - jeżeli Twój toot jest zbyt długi, podziel go i dodaj drugą część jako odpowiedź do pierwszego. A jeśli później przypomnisz sobie o czymś jeszcze, to po prostu dodaj odpowiedź do Twojego pierwotnego tootu i odpowiedź będzie widoczna zawsze, gdy ktoś kliknie na oryginalny toot.

## Czym są hasztagi?

Aby stworzyć hasztaga, wpisz "#" i dowolną sekwencję liter lub liczb. Znaki diakrytyczne mogą być używane; interpunkcja, spacje, symbole i emoji nie. #fotografia jest poprawnym hasztagiem. #PięknoNauki również. #Piekno-Nauki nie (jedynie #Piekno zostanie uwzględnione).

Hasztag stanowi metadane o Twoim wpisie: dostarcza dodatkowych informacji, które niekoniecznie stanowią część wpisu, ale są przydatne dla lepszego zrozumienia jego treści. Jeśli jesteś programistą, to pomyśl o hasztagu jak o komentarzu w kodzie.

Dodatkowo†, hasztagi są śledzone przez każdą instancję. Kliknięcie w hasztag przenosi Cię do listy publicznych wpisów z tym hasztagiem. Możesz za ich pomocą czytać, co ciekawego przyniosła #polityka, znaleźć nowe osoby do obserwowania w tagu #FollowFriday, czy też zobaczyć prace artystyczne ludzi w tagu #mastoart. Mastodon od wersji 4.0.0 pozwala na obserwowanie wybranych hasztagów, dzięki czemu wpisy zawierające obserwowany hasztag wylądują na Twojej osi czasu.

Nie przesadzaj z ilością hasztagów. Co do zasady Twoje hasztagi raczej nie powinny przekraczać 10% całkowitej długości Twojego wpisu. Jeśli zdarza Ci się przekraczać ten pułap, być może za bardzo rozmieniasz się na drobne.

† _A właściwie taka idea przyświecała hasztagom na początku, ale ich faktyczne użycie wyewoluowało._

## Co oznacza "CW"?

:bangbang: CW to skrót od anglojęzycznego 'Content Warning' i oznacza ostrzeżenie o zawartości. Ukrywa ono Twój wpis za jakimś tekstem (który możesz samodzielnie ustawić); działa jak link "Czytaj dalej".

Możesz używać CW do oznaczania takich tematów jak:

- polityka
- seks
- tematy wzbudzające obrzydzenie
- częste fobie, takie jak pająki czy krew
- rozmowy o zdrowiu
- długie wpisy które w innym razie zabrałyby sporo miejsca na osiach czasu innych użytkowników
- komentarze do dyskusji trwających gdzieś indziej w fediwersum, często oznaczone jako "meta" czy "dyskusja" (ang. "discourse")

Niektóre popularne skróty, które napotkasz w CW:

- mh: zdrowie psychiczne (od ang. mental health)
- ph: zdrowie fizyczne (od ang. physical health)
- alc: alkohol (od ang. alcohol)
- pol: polityka, często w połączeniu z kodem kraju, np. "uspol" oznacza politykę w USA
- pda: publiczne okazywanie czułości (od ang. public display of affection)
- nsfw: nie oglądać w miejscu pracy (od ang. not safe for work)
- ec: kontakt wzrokowy (od ang. eye content) - zazwyczaj używany, gdy do wpisu dołączone jest zdjęcie

Ogólnie mówiąc, kieruj się swoim najlepszym osądem; pomyśl: "czy jest jakiś powód, dla którego ktoś nie chciałby tego zobaczyć?". Masz możliwość, aby poświęcić zaledwie chwilkę czasu i uczynić fediwersum lepszym miejscem. Czemuby z tego nie skorzystać?

**Ważna uwaga:** Mastodon _ignoruje_ hasztagi w treści CW. Mastodon _widzi_ hasztagi, które znajdują się *pod* CW. Zawsze wstawiaj hasztagi w treści Twojego wpisu, nigdy w treści ostrzeżenia o zawartości.

## Załączyłam obrazek do mojego tootka. Co to za ikonka z okiem?

:bangbang: Kliknięcie w nią spowoduje, że Twój obrazek zostanie zakryty nakładką z ostrzeżeniem "Wrażliwa zawartość". Dobrze jest tego używać do oznaczania nagości, przemocy i krwi, tematów politycznych itp.

Zapewne zauważysz, że jeżeli do wpisu załączysz obrazek i użyjesz CW, nakładka "wrażliwa zawartość" włącza się automatycznie i nie da się jej wyłączyć. To zamierzony efekt.

## Załączyłam obrazek do mojego tootka. Jak dodać do niego opis zawartości?

:interrobang: Załączyszy obrazek, zobaczysz link "Edytuj" (z ikoną ołówka) w jego górnym prawym rogu. Kliknięcie na niego spowoduje otwarcie okna dialogowego, w którym będziesz mieć możliwość zdecydowania, która część obrazka powinna być widoczna w podglądzie. W oknie tym znajdziesz też możliwość ustawienia opisu zawartości obrazka, który będzie widoczny dla czytających Twój wpis przy najechaniu myszą oraz zostanie przeczytany przez czytniki głosowe (używane przez osoby z problemami ze wzrokiem) zamiast zwykłego "załączony obrazek".

Z myślą o obrazkach składających się w większości z tekstu (np. zrzut ekranu wpisu na Tumblrze), Mastodon posiada wbudowany mechanizm rozpoznawania tekstu (OCR) i możesz się nim posłużyć do opisania Twojego obrazka, jednak nie zapomnij sprawdzić, czy wygenerowany opis na pewno jest poprawny. Jeżeli z jakiegoś powodu OCR na Twojej instancji nie działa, możesz użyć narzędzie online takiego jak [Online OCR](https://www.onlineocr.net) do wygenerowania opisu (transkrypcji) Twojego obrazka. A jeśli i to zawiedzie, w fediwersum znajdziesz roboty, które wygenerują opis obrazka, gdy je zawołasz po nazwie użytkownika. [ przyp. tłum.: jednym z nich jest [OCR Bot - @OCRbot@fedi.lynnesbian.space](https://fedi.lynnesbian.space/@OCRbot) i ma on możliwość rozpoznawania tekstów w wielu językach, również po polsku]

Tekst w opisie obrazka ma swój własny limit 1500 znaków; **nie wlicza się on** w limit znaków dla treści Twojego wpisu!

## Dlaczego powinnam opisywać moje obrazki?

Jedno słowo: dostępność.

Wśród użytkowników Mastodona są ludzie, którzy mają problemy ze wzrokiem i używają czytników głosowych. Są też ludzie, którzy mają wyłączone wyświetlanie obrazków żeby ograniczyć zużycie danych. Zdarzają się czasem problemy z dyskami i serwerami. A czasem administrator Twojej instancji może zdecydować o usunięciu starych plików, i wtedy Twój obrazek już się nie wyświetli. Dodawanie opisów do obrazków umożliwia ludziom interakcję z Twoimi wpisami wraz z ich pełnym kontekstem.

Możesz także wykorzystywać opisy do obrazków jako nośniki dodatkowego humoru (tak jak często robią to autorzy komiksów w internecie). Nie krępuj się czerpać korzyści z faktu, że opisy obrazków mają swój osobny limit znaków i wstawiaj tam cokolwiek chcesz. Możliwości są nieograniczone.

## Dlaczego moja znajoma na innej instancji może używać tej emotki, a ja nie?

:bangbang: :bangbang: Każda instancja może dodać własne emoji dostępne dla swoich użytkowników i wiele z nich z tego korzysta. Administrator Twojej instancji może skopiować z innej instancji każdą emoji, która mu przypadła do gustu. Jeżeli zauważysz emoji, która Ci się podoba i nie jest dostępna na Twojej instancji, poproś swojego administratora o skopiowanie jej.

## Dlaczego nie mogę wyszukać konkretnego słowa lub frazy?

To funkcja zapobiegająca nękaniu. Prześladowcy często wyszukują konkretne słowa lub frazy (np. "TERF", "homofobia" czy "biała supremacja") aby atakować i dręczyć ludzi, z którymi się nie zgadzają. Ograniczając wyszukiwanie do nazw użytkowników i hasztagów, Mastodon pozwala użytkownikom decydować o tym, jak chcą prezentować swoje treści w wynikach wyszukiwania u innych (niektóre instancje Mastodona umożliwiają pełnotekstowe wyszukiwanie, jednak zazwyczaj znajdziesz w ten sposób tylko swoje własne wpisy. Dzięki temu łatwiej znaleźć coś, co opublikowałeś dawno temu bez wystawiania się na ryzyko nękania).

## Dlaczego nie mogę zacytować czyjegoś tootka jak na Twitterze?

:bangbang: Podobnie jak z wyszukiwaniem, jest to funkcja zapobiegająca nękaniu. Jeżeli chcesz odpowiedzieć na czyjś wpis, no to zrób dokładnie to - dodaj odpowiedz do tego wpisu. Nie możesz tak po prostu rzucić go swoim obserwującym i dołączyć złośliwy komentarz.

_(Daruj sobie robienie zrzutów ekranu wpisów i dołączanie ich jako obrazki. **Da się**, ale społeczność Mastodona nie pochwala tego. Jeżeli będziesz to robić nagminnie, szybko wyrobisz sobie złą reputację.)_

## Kultura na Mastodonie jest jakaś taka... dziwna?

To prawda! Ale z czasem ta dziwność staje się bardzo przyjemna.

Poniżej kilka popularnych dziwactw:

- :pineapple:: - nikt tak naprawdę nie wie. [acw](https://cybre.space/@acw) wrzucił jako pierwszy, ktoś inny podchwycił, i tak to to trwa do dziś. Takie tam głupoty. Nie wiesz co napisać? Wrzuć :pineapple:.

- AWOO: [Awoo.Space](https://awoo.space) to jedna z pierwszych instancji Mastodona. "Awoo" to dźwięk wyjącego wilka. Śmiesznie to brzmi. Awoo! (Pawoo.net nie ma z tym nic wspólnego; w języku japońskim "pawoo" jest oznacza trąbienie słonia.). Ktoś się wkurzył na te wszystkie "awoo" i ustanowił karę 350 dolarów za każde "awoo". Spokojnie, nikt jej nigdy nie zapłacił.

- #gameing: Swego czasu istniało (i wciąż istnieje) przekonanie, że granie w gry określane hasztagiem #gaming jest "hardkorowe" i elitarne. Istniały też obawy, że pewne grupy graczy zawłaszczą hasztag #gaming. #gameing powstał jako środek zapobiegawczy; chodzi w nim o przyjemne, luźne i bezstresowe podejście do gier, czy to video czy innych _[ przyp. tłum.: w polskiej społeczności Mastodona istnieje podobny hasztag #giereczkowo. ]_.

Przyzwyczaisz się.

## Co oznacza ![:red_candle:](red_candle.png)?

Na początku listopada 2017 roku w wyniku samobójstwa odeszła od nas znana i lubiana użytkowniczka Mastodona. ![:red_candle:](red_candle_sm.png) i ![lattentacle](lattentacle_sm.png) upamiętniają naszą przyjaciółkę Natalie Nguyen.

## Jaka jest ogólnie przyjęta etykieta na Mastodonie?

Nie ma jednego sztywnego zestawu reguł dla wszystkich. Jak wspomniałam wyżej, różne instancje mają różne zasady. Mimo to, wielu ludzi kieruje się kilkoma prostymi zasadami, których celem jest uczynienie Mastodona miejscem bardziej przyjaznym dla wszystkich.

- Jeśli załączasz obrazek do swojego wpisu, ale nie opisujesz go w treści, dodaj opis jego zawartości, aby ułatwić zrozumienie go przez osoby używające czytników ekranu.

- Jeśli załączasz obrazek, który zawiera **nagość, pornografię lub treści sugestywne seksualnie, krew, przemoc, lub politykę**, lub którykolwiek z popularnych czynników wywołujących PTSD / niepokój (np. jedzenie, pająki), [oznacz go jako treść wrażliwą](#załączyłam-obrazek-do-mojego-tootka-co-to-za-ikonka-z-okiem).

- Jeżeli _treść_ Twojego wpisu porusza którykolwiek z powyższych tematów, [wstaw ostrzeżenie o zawartości (CW)](#co-oznacza-cw)

- Niepotrzebny Ci skracacz linków. Mastodon zakłada, że wszystkie adresy URL mają dokładnie 20 znaków. Pozwól ludziom zobaczyć, gdzie naprawdę prowadzi Twój link.

- Jeżeli tworzysz bota, który publikuje treści automatycznie, ustaw go tak, aby [publikował wpisy jako niewidoczne](#jak-działają-ustawienia-prywatności). W ten sposób zminiejszysz ryzyko, że Twój bot zostanie oznaczony jako spam.

- Jeżeli używasz skryptu, który przesyła Twoje wpisy z Twittera na Twoje konto na Mastodonie, ustaw go tak, aby wpisy zawierały ostrzeżenie o zawartości (CW). W ten sposób nawet wpisy na wrażliwe tematy będą poprawnie oznaczone na Mastodonie.

- Jeżeli widzisz konwersację i chciałbyś dodać w niej coś od siebie:
  - Przejrzyj całą konwersację i upewnij się, że ktoś już wcześniej nie napisał tego samego, co Ty
  - Upewnij się, że ton Twojego komentarza pasuje do tej konwersacji, jest uprzejmy i pozwala rozstrzygać wątpliwości na korzyść innych rozmówców w konwersacji.
  - Słowo "noadvice", jako hasztag albo treść CW, oznacza, że autor wpisu chce się tylko wyżalić i nie oczekuje pomocy ani porad. Wyrazy współczucia są jednak bardzo na miejscu.
- Pamiętaj, że jeżeli ktoś nie odpowiada na Twoją wiadomość, to nie oznacza że Cię ignoruje. Może tej osoby akurat nie ma na Mastodonie. Może ma już tyle powiadomień, że przeoczyła Twój wpis. Może wyciszyła konwersację, a wtedy Twoja odpowiedź nie będzie u niej widoczna! Ludzie mogą przegapić wpisy z wielu powodów, nawet jeśli są one skierowane bezpośrednio do nich; nie bierz tego do siebie.

## Mastodon jest spoko, ale Twitter wygląda lepiej.

Być może spodoba Ci się [Pinafore](https://pinafore.social/) - interfejs dla Mastodona, którego autorem jest [Nolan Lawson](https://toot.cafe/@nolan).

[Halcyon](https://notabug.org/halcyon-suite/halcyon) jest klientem webowym dla Mastodona, który imituje interfejs Twittera. Jako że Halcyon jest oprogramowaniem open-source, istnieją [liczne serwery oferujące dostęp do niego](https://notabug.org/halcyon-suite/halcyon#instances); wybierz ten, który Ci najbardziej odpowiada. Użyj swoich istniejących danych do Mastodona przy logowaniu do Halcyona; na przykład, jeżeli masz konto na elekk.xyz, Twoim loginem byłoby `twoje-konto@elekk.xyz` oraz Twoje hasło.

Pamiętaj, że Pinafore i Halcyon są zewnętrznymi klientami. Upewnij się, że masz do nich wystarczająco dużo zaufania, aby powierzyć im swoje dane logowania!

## Mastodon jest spoko, ale chciałabym go używać w telefonie.

Interfejs Mastodona jest responsywny, więc możesz używać go w przeglądarce w Twoim telefonie. Alternatywą są liczne aplikacje dostępne dla Mastodona, wliczając w to [oficjalną aplikację dla iPhone'a](https://apps.apple.com/us/app/mastodon-for-iphone-and-ipad/id1571998974) wydaną w sierpniu 2021 r. Na iOS wypróbuj [Toot!](https://apps.apple.com/app/toot/id1229021451?ls=1). Na Androida dobrym wyborem jest [Tusky](https://tusky.app/).

_(NB: Doszły mnie słuchy, że "Tootdon po cichu przekazuje kopie wpisów, z którymi wchodzisz w interakcje, oraz tokeny autoryzacyjne do Twojego konta, na swoje serwery". Nie wiem, czy to nadal aktualne. Jak zawsze, zachowaj ostrożność przy przekazywaniu aplikacjom swoich danych.)_

## Jak stworzyć kopię zapasową mojego konta na Mastodonie?

[Alex Schroeder](https://octodon.social/@kensanata) stworzył doskonałe [narzędzie do archiwizowania Mastodona](https://github.com/kensanata/mastodon-backup/), dzięki któremu stworzysz kopię zapasową swojego konta i wiele więcej.

## Czy da się nawigować po Mastodonie za pomocą klawiatury?

W interfejse webowym - tak. Listę dostępnych skrótów klawiszowych na Mastodonie znajdziesz pod adresem `https://<adres-twojej-instancji>/keyboard-shortcuts`. Link ten znajdziesz także w stopce strony, podpisany jako "Skróty klawiszowe".

## Jak działają polubenia na innych typach serwerów?

Zazwyczaj jest tak:

- Jeżeli dodasz do ulubionych wpis dodany na serwerze innego typu (Misskey, Pleroma, GNU Social itp.), informacja o tym zostanie przekazana poprawnie. Niektóre z tych serwerów pozwalają na używanie wielu emoji jako reakcji; każdy z nich implementuje generyczną emoji dla "polubienia", która będzie widoczna dla autora przy treści jego wpisu.

- Jeśli ktoś z serwera innego typu zareaguje na Twój wpis wybraną emoji, zostanie ona zinterpretowana prez Twoją instancję Mastodona jako dodanie do ulubionych _bez względu na to jaka emoji została użyta_.

## Dziwne, mój serwer nie ma kilku funkcji.

Możliwe, że nie jesteś na Mastodonie! Fediwersum - wielki zbiór serwerów połączonych protokołem ActivityPub/OStatus - oferuje wiele różnych rodzajów serwerów. Na Twoim serwerze może działać Pleroma, Misskey, GNU Social, lub coś jeszcze innego! Niestety, niewiele wiem na ich temat, więc musisz zapytać ich użytkowników czy istnieje poradnik taki jak ten.

## Dziwne, mój serwer ma dodatkowe funkcje.

Jako że [kod źródłowy Mastodona jest dostępny publicznie](https://github.com/mastodon/mastodon), możesz go skopiować i dowolnie modyfikować. Niektórzy ludzie publikują swoje modyfikacje w sieci; jedną z najpopularniejszych modyfikacji Mastodona jest [Mastodon Glitch Edition](https://glitch-soc.github.io/docs/), znany też jako "glitch-soc" (jeśli dobrze pamiętam, nazywa się tak od instancji na której został uruchomiony - [glitch.social](https://glitch.social)). Glitch-soc posiada szereg dodatkowych funkcji docenianych przez użytkowników, takich jak formatowanie wpisów przy pomocy Markdown czy możliwość dodania wpisu, który zostanie opublikowany tylko w ramach instancji i nie zostanie rozpowszechniony na inne serwery.

## Mam jeszcze inne pytania.

Nie wahaj się ich zadać! Ludzie zazwyczaj chętnie odpowiadają na pytania i udzielają pomocy. Ponadto, możesz skorzystać z innych poradników, które prezentują nieco inną perspektywę:

- [FediThing](https://tech.lgbt/@FediThing) posiada [świetny przewodnik](https://fedi.tips/).
- [Ted](https://peoplemaking.games/esdin) prowadzi [dokument z poradami i FAQ](https://docs.google.com/document/d/1gln7Lg92Vz3TbIjz6qZkpdPOxDAe63jof5snpR4xAa0/).
- [elilla](https://transmom.love/@elilla) napisała [futurystyczne wprowadzenie do Mastodona](https://wordsmith.social/elilla/a-futuristic-mastodon-introduction-for-2021).

A jeśli nadal nie możesz znaleźć odpowiedzi na swoje pytanie, możesz skontaktować się z autorką oryginalnej wersji tego poradnika: https://elekk.xyz/@noelle.

## Jak mogę zaangażować się w rozwój tego poradnika?

Sprawdź [instrukcje dla współtwórców](contributing.md)!
