# Niezbyt zwięzłe wprowadzenie do [Mastodona](https://joinmastodon.org/pl)

Bazą wyjściową dla tego poradnika jest [An Increasingly Less-Brief Guide to Mastodon](http://guidetomastodon.com/) autorstwa [Noëlle Anthony](https://github.com/joyeusenoelle) oraz [współtwórców](https://github.com/joyeusenoelle/GuideToMastodon/graphs/contributors). Pierwotnie miało to być po prostu wierne tłumaczenie oryginału. Jednak długofalowym celem tego poradnika jest wyjście poza rolę przekładu językowego i nieco bardziej precyzyjne opisanie tego, jak działa Mastodon w Polsce. Jednak dopóki pewne koncepty i zjawiska nie zaistnieją na polskim Mastodonie, niniejszy poradnik posługuje się przykładami z oryginalnej wersji.

<p style="text-align:center;"><h1>Spokojnie. Nie jest tak strasznie, jak mogłoby się wydawać.</h1></p>

**Mastodon różni się dość znacznie od Twittera, ale da się do niego przyzwyczaić.** Wszystkie istotne różnice są oznaczone tym emoji :bangbang:; z góry przepraszamy, jeśli coś zostało pominięte. Dawno nas nie było na Twitterze!

Zarówno autorka oryginału, jak i autor tłumaczenia dołożyli wszelkich starań, aby brzmiało to przystępnie, ale sugestie zmian są mile widziane! Jeżeli masz konto na GitHubie i chcesz pomóc przy tworzeniu oryginalnej wersji tego poradnika, możesz przesłać propozycje zmian bezpośrednio. Możesz również skontaktować się z autorką poradnika [na Mastodonie](https://elekk.xyz/@noelle) lub mailem: `noelle AT noelle.codes`.

Oryginalna (anglojęzyczna) wersja tej strony znajduje się pod adresem http://guidetomastodon.com. Linkując do niej, podlinkuj również do [@Noelle@elekk.xyz](https://elekk.xyz/@noelle). Dzięki!

Polskojęzyczną wersję tego poradnika (a więc tą, którą właśnie czytasz) znajdziesz zawsze pod adresem http://mastodon-poradnik.pl. Propozycje zmian do tej wersji możesz [zgłaszać na GitHubie](https://github.com/lwojcik/Mastodon-Poradnik/issues).

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
- [Chcę rozmawiać z ludźmi po polsku. Jak wybrać instancję?](#chcę-rozmawiać-z-ludźmi-po-polsku-jak-wybrać-instancję)
- [Chcę pisać w innych językach. JAK WYBRAĆ INSTANCJĘ?](#chcę-pisać-w-innych-językach-JAK-WYBRAĆ-INSTANCJĘ)
- [Wpadła mi w oko inna, ciekawsza instancja. Czy mogę przenieść moje konto?](#wpadła-mi-w-oko-inna-ciekawsza-instancja-czy-mogę-przenieść-moje-konto)
- [Jak zmienić nazwę użytkownika?](#jak-zmienić-nazwę-użytkownika)
- [Jak wspomnieć kogoś, kto nie jest na mojej instancji?](#jak-wspomnieć-kogoś-kto-nie-jest-na-mojej-instancji)
- [Jakie panują zasady?](#jakie-panują-zasady)
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
- [Załączyłam obrazek do mojego wpisu. Co to za ikonka z okiem?](#załączyłam-obrazek-do-mojego-wpisu-co-to-za-ikonka-z-okiem)
- [Załączyłam obrazek do mojego wpisu. Jak dodać do niego opis zawartości?](#załączyłam-obrazek-do-mojego-wpisu-jak-dodać-do-niego-opis-zawartości)
- [Dlaczego powinnam opisywać moje obrazki?](#dlaczego-powinnam-opisywać-moje-obrazki)
- [Dlaczego moja znajoma na innej instancji może używać tej emotki, a ja nie?](#dlaczego-moja-znajoma-na-innej-instancji-może-używać-tej-emotki-a-ja-nie)
- [Dlaczego nie mogę wyszukać konkretnego słowa lub frazy?](#dlaczego-nie-mogę-wyszukać-konkretnego-słowa-lub-frazy)
- [Dlaczego nie mogę zacytować czyjegoś wpisu jak na Twitterze?](#dlaczego-nie-mogę-zacytować-czyjegoś-wpisu-jak-na-twitterze)
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

Mastodon to platforma do tworzenia sieci społecznościowych. Dzięki niej każda osoba może uruchomić własną stronę społecznościową oraz - jeżeli chce - udostępnić ją do użytku innym ludziom. Wszystkie strony na Mastodonie mogą komunikować się między sobą (jak również [wieloma innymi](https://en.wikipedia.org/wiki/ActivityPub)). To takie skrzyżowanie Twittera z e-mailem, ale różniące się nieco od nich obu.

Nazwa "Mastodon" pochodzi od [zespołu heavy-metalowego](https://www.mastodonrocks.com/), ale jego identyfikacja wizualna nawiązuje do [wymarłego zwierzęcia](https://pl.wikipedia.org/wiki/Mastodonty).

## Co łączy go z Twitterem?

Publikujesz krótkie wpisy i widzisz uaktualnianą na bieżąco listę wpisów Twoich znajomych. W osobnej kolumnie możesz sprawdzić powiadomienia (odpowiedzi, podbicia, polubienia i wiadomości bezpośrednie).

Wpisy na Mastodonie nazywane są czasem "tootami" albo "tootkami" (od ang. _"toot"_). Jeden "toot" może pomieścić do 500 znaków. Istnieją instancje Mastodona, które wyłamują się z tej reguły - np. najstarszy polski serwer Mastodona, [101010.pl](https://101010.pl/), posiada limit 2048 znaków.

Mastodon obsługuje też hasztagi, czyli słowa poprzedzone znakiem #, np. "#giereczkowo" czy "#fotografia". Klikając w hasztag zobaczysz inne wpisy zawierające ten tag.

## Co łączy go z e-mailem?

:bangbang: Każda instancja Mastodona jest niezależna, ale działa w ramach wspólnej sieci, zupełnie jak serwery poczty e-mail. Gdy zakładasz skrzynkę e-mail na wp.pl, to nie dostajesz automatycznie skrzynki na interia.pl czy gmail.com, ale możesz wysyłać i odbierać wiadomości od użytkowników skrzynek na interia.pl czy gmail.com.

Tak samo tutaj - gdy zakładasz konto na mastodon.social, to nie dostajesz konta na innych instancjach. Możesz jednak rozmawiać z ludźmi z innych instancji, a oni mogą rozmawiać z Tobą.

Możesz mieć konta na wielu instancjach i używać każdego z nich do poruszania innych tematów. Możesz założyć konto na https://hackers.town aby pisać o technologii, konto na https://elekk.xyz aby rozmawiać o grach, oraz konto na https://mastodon.online do tematów ogólnych. Do każdego konta musisz logować się osobno i możesz mieć otwarte każde z nich w osobnej karcie lub oknie przeglądarki (wiele aplikacji mobilnych również posiada możliwość logowania na wielu kontach jednocześnie).

**Pamiętaj, że w przypadku Mastodona, pojęcia "serwer" i "instancja" oznaczają to samo.**

## Co odróżnia go od Twittera i e-maila? Albo inaczej: czym jest globalna i lokalna oś czasu?

:bangbang: Mastodon posiada dwie dodatkowe osie czasu, które możesz przeglądać: lokalną oś czasu (ang. 'Local timeline') i globalną oś czasu (ang. 'Federated timeline').

Lokalna oś czasu prezentuje wszystkie wpisy dodane przez ludzi na Twojej instancji z wyjątkiem reakcji. Reakcją jest każdy wpis wysłany przez nas _jako odpowiedź_ na wpis innego użytkownika - samo wspomnienie innego użytkownika nie powoduje, że wpis staje się od razu odpowiedzią!.

Globalna oś czasu prezentuje publiczne wpisy wszystkich ludzi, o których istnieniu wie Twoja instancja - również tych, którzy używają innych instancji. Twoja instancja wie o osobie z innej instancji wtedy, kiedy przynajmniej jedna osoba z Twojej instancji (Ty lub ktoś inny) KIEDYKOLWIEK doda tę osobę do obserwowanych.

Lokalna i globalna oś czasu mogą czasem przytłaczać ilością treści. Korzystaj z rozwagą!

## Czym jest fediwersum (ang. Fediverse)?

~~Niestety, nie możemy ci powiedzieć, czym jest fediwersum~~

Fediwersum (ang. _"fediverse"_ albo _"fedi"_) to rozproszony zbiór serwerów, które porozumiewają się ze sobą za pomocą protokołów ActivityPub lub OStatus. Ale tak szczerze mówiąc, to jeżeli nie tworzysz oprogramowania do komunikacji z fediwersum, to nie musisz wiedzieć, co to oznacza.

W fediwersum istnieje mnóstwo różnych typów oprogramowania, na przykład Pixelfed, Pleroma, Bookwyrm czy WriteFreely. Mastodon jest jednym z najpopularniejszych i to o nim traktuje ten tekst. Jeżeli używasz czegoś innego, ten poradnik może być dla Ciebie mało przydatny.

## Jak mogę zbudować obecność marki na Mastodonie?

:bangbang: W skrócie: **bardzo ostrożnie.**

Mamy za sobą kilkanaście lat życia z Twitterem, Facebookiem i wieloma innymi serwisami, które przekształciły się w platformy do SEO, budowania świadomości marki czy korporacyjnej synergii - i powiem szczerze: większość z nas ma już tego po dziurki w nosie.

Obecność na Mastodonie nie polega na konwersji obserwujących w klientów. To nie jest kolejne miejsce na SEO czy budowanie lojalności wobec marki. **Mastodona tworzą ludzie.** Nie patrz na nich jak na potencjalnych klientów, którzy mogliby coś od Ciebie kupić. Popatrz na ich jak na _ludzi_, których chcesz poznać.

Jeżeli tworzysz coś i wydaje Ci się, że ktoś mógłby kupić Twój produkt albo skorzystać z Twoich usług - wspaniale! Powiedz nam o tym - ale miej w pamięci, że jesteśmy ludźmi z krwi i kości, a nie grupą docelową dla Twojego działu marketingu.

Jest jedno irytujące zachowanie typowe dla wielu firm i niezbyt mile widziane wśród ludzi: **nie wysyłaj nikomu niezamówionych wiadomości reklamujących Twój produkt lub usługę**. Daj sobie trochę czasu na rozmowy z ludźmi, reaguj na to co mówią i wchodź z nimi w dyskusje. Gdy nabierzesz pewności, że ktoś mógłby zainteresować się tym, co masz do zaoferowania i jeszcze o tym nie wie - _dopiero wtedy_ powiedz tej osobie o Twoim produkcie lub usłudze.

Jeżeli reprezentujesz firmę i Twój szef powiedział Ci, że Wasza firma musi być obecna na Mastodonie, możesz mu odpowiedzieć tak (i możesz też dodać, że to my kazaliśmy Ci tak powiedzieć):

> Mastodon tak nie działa. Jeżeli mamy tam być obecni, to musimy wyznaczyć jedną osobę, która będzie mogła tam _być sobą_, a nie tylko robić za rzecznika firmy. To oznacza, że ta osoba niekonieczie będzie się przyjaźnić ze wszystkimi (chociaż oczywiście będzie się starać), ale zawsze będzie traktować swoich rozmówców jak ludzi, a nie cele marketingowe. Jeżeli Ci to pasuje, to chętnie się tym zajmę. Jeżeli nie, to obawiam się, że musisz poświęcić więcej czasu na zrozumienie, jak Mastodon działa, zanim zaczniesz myśleć o obecności naszej firmy na nim.

I jeszcze jedno. Jeżeli pracujesz w dużej, powszechnie znanej firmie lub instytucji z liczną społecznością w innych serwisach - i wciąż chcecie być obecni na Mastodonie pod swoją marką - rozważcie uruchomienie własnej instancji Mastodona pod jednoznacznie kojarzącym się adresem, tak jak robią to [instytucje Unii Europejskiej](https://social.network.europa.eu/), [Raspberry Pi](https://raspberrypi.social/) czy [Medium](https://medium.social/) i [zweryfikujcie jego własność](#no-dobrze-to-jak-przekonać-ludzi-że-jestem-osobą-za-którą-się-podaję). Uzyskacie w ten sposób pełną kontrolę nad swoimi danymi, oraz swobodę w wyznaczaniu zasad na Waszej instancji i skalowaniu serwera pod swoje potrzeby.

Jeśli mimo wszystko postanowicie - jako duży podmiot - ogłosić swoją obecność na jakimś ogólnodostępnym serwerze, jest duża szansa, że wzbudzicie zainteresowanie i przyciągnięcie za sobą wielu ze swoich dotychczasowych obserwujących. Efektem tego będzie również zwiększone obciążenie Waszego serwera, co może zmusić administrację do podniesienia jego parametrów, a co za tym idzie, poniesienia dodatkowyh kosztów. Pamiętajcie, że publiczne serwery są finansowane z prywatnych kieszeni ich właścicieli, a ci nie zawsze dysponują tak dużymi budżetami, jak Wasza firma. Jeżeli już koniecznie chcecie korzystać z ogólnodostępnej instancji, rozważcie jakąś formę regularnego i znaczącego wsparcia finansowego dla właścicieli serwera. Nie żerujcie jako firma na "darmowych" zasobach. To nie jest Facebook ani Twitter i ktoś za te serwery płaci.

O tym, co może się zdarzyć, gdy ktoś popularny zaczyna korzystać z Mastodona, [pisze Aral Balkan w swoim artykule](https://ar.al/2022/11/09/is-the-fediverse-about-to-get-fryed-or-why-every-toot-is-also-a-potential-denial-of-service-attack/).

## Jak mogę uzyskać weryfikację na Mastodonie?

:bangbang: W przeciwieństwie do Twittera, Mastodon nie posiada wbudowanego mechanizmu weryfikacji. Jesteś tym, za kogo się podajesz, a my Ci wierzymy. Jeżeli widzisz kogoś ze znaczkiem wyglądającym jak ikonka weryfikacji na Twitterze (na przykład :white_check_mark:), to ta osoba po prostu dodała emoji do wyświetlanej nazwy.

Na niektórych instancjach może być wymagane potwierdzenie tożsamości przed założeniem konta, konieczność rejestracji za pomocą innej sieci społecznościowej albo innej formy weryfikacji tożsamości, ale są to **wyjątki od reguły**.

**Jeżeli ktoś podaje się za Ciebie, skontaktuj się z administracją instancji, z której korzysta ta osoba, aby rozwiązać ten problem.**

## No dobrze, to jak przekonać ludzi, że jestem osobą, za którą się podaję?

Instancje Mastodona umożliwiają dodanie metadanych do Twojego profilu - maksymalnie do 4 pozycji wyświetlonych w tabelce na stronie Twojego profilu. Dane te nie wliczają się w limit znaków opisu Twojego profilu.

Jeżeli wstawisz w te pola linki do innych Twoich stron, na niektórych instancjach znajdziesz możliwość zweryfikowania, czy te strony _należą do Ciebie_. W tym celu musisz dodać linku zwrotny do Twojego konta Mastodona na każdej z tych stron. Dla przykładu, jeżeli posiadasz stronę-wizytówkę, możesz dodać link do niej w metadanych Twojego konta na Mastodonie, a potem dodać link do Twojego profilu na Mastodonie w nagłówku Twojej strony. W ten sposób Mastodon zweryfikuje, że strona należy do Ciebie i zobaczysz, że link do tej strony w Twoim profilu będzie wyświetlany na zielonym tle ze znaczkiem :heavy_check_mark:.

Jeżeli Twoja instancja na to pozwala, instrukcję dodania linku do weryfikacji znajdziesz na stronie dostępnej po kliknięciu **Edytuj profil**.

Jeżeli nie posiadasz własnej strony, możesz również skorzystać z innych sposobów:

1. Publikując link do Twojego profilu Mastodona w widocznym miejscu każdego innego serwisu, z którego ludzie mogą Cię kojarzyć,
2. Jeżeli masz konto na Twitterze - możesz skorzystać z zewnętrznego serwisu do weryfikacji takiego jak [Twittodon](https://twittodon.com/).

## Chcę rozmawiać z ludźmi po polsku. Jak wybrać instancję?

Jeżeli chcesz posługiwać się językiem polskim i niespecjalnie interesuje Cię obcojęzyczna część fediwersum, Twoim najlepszym wyborem będzie jedna z instancji dedykowanych polskojęzycznej społeczności. Najstarszą polską instancją jest [101010.pl](https://101010.pl). Są też inne, takie jak [pol.social](https://pol.social/), [mastodon.pl](https://mastodon.pl/) czy [dadalo.pl](https://dadalo.pl/).

Istnieją także (wciąż nieliczne, ale jednak) instancje tematyczne: [social.puczat.pl](https://social.puczat.pl/) dla osób po kryzysach psychicznych, czy [lewacki.space](https://lewacki.space/) dla osób o szeroko rozumianych poglądach lewicowych.

Nie musisz ograniczać się do instancji polskojęzycznych. Mają one jednak jedną istotnę zaletę - Polacy już tam są, jest z kim rozmawiać już od pierwszych minut na serwerze i łatwo dotrzeć do nowych ludzi choćby z poziomu lokalnej osi czasu. Posiadając konto na ogólnodostępnej instancji Twoje wpisy mogą ginąć w wielojęzycznym tłumie, a znalezienie rodaków nie będzie takie proste.

Jeżeli chcesz korzystać z obcojęzycznej instancji i pisać na niej po polsku, sprawdź jej zasady. Upewnij się, czy ta instancja zezwala na używanie języków innych niż natywny dla moderacji tej instancji. Zrób to także w przypadku, gdy chcesz korzystać z polskojęzycznej instancji, ale zamierzasz pisać po polsku oraz w innych językach.

Niektóre instancje posiadają dość ścisłe zasady co do używanego języka i zabraniają używania języków innych niż np. angielski. Jest to z reguły podyktowane względami praktycznymi. Moderowanie wpisów w obcych językach zabiera więcej czasu i zwiększa ryzyko krzywdzących decyzji przy rozpatrywaniu zgłoszeń.

## Chcę pisać w innych językach. JAK WYBRAĆ INSTANCJĘ?

Tym razem celowo wielkimi literami.

Jeżeli interesuje Cię szersza (głównie anglojęzyczna) część fediwersum, masz szerszy wybór - ale jest on także nieco trudniejszy. Wiele instancji posiada specyficzny profil: `mastodon.lol` jest bezpieczną przestrzenią dla osób queerowych, `hackers.town` jest przystanią dla maniaków komputerów, `wandering.shop` powstał z myślą o fanach science fiction i fantasy, a `botsin.space` pozwala na utrzymywanie i rozwój kont automatycznych (botów). Na `oulipo.social` niedozwolone jak dodawanie wpisów zawierających choćby jedną literę "e".

Jeżeli nie masz jeszcze konta na Mastodonie, dobrym pomysłem może być użycie jednej z większych instancji, takich jak `mastodon.online` - jednej z flagowych instancji - czy też `mstdn.social`, `mas.to` czy . Te instancje posiadają liczne, z reguły przyjazne społeczności, którzy chętnie pomogą Ci znaleźć bardziej wyspecjalizowaną instancję, jeżeli zechcesz takiej poszukać. Przestrzegam jednak, że z uwagi na rozmiar tych instancji, ich lokalne osie czasu potrafią odświeżać się bardzo szybko.

`mastodon.social` i `mastodon.online` to dwie oficjalne instancje finansowane przez firmę non-profit stojącą za projektem. Wielu ludzi zakłada tam konta i nigdy nie interesuje się innymi instancjami. Jeśli masz już konto na mastodon.social, dobrym pomysłem może być traktowanie go jak tymczasowego przystanku zanim znajdziesz instancję lepiej dopasowaną do Twoich potrzeb i zainteresowań. Gdy już taką znajdziesz, możesz wyeksportować z `mastodon.social` wszystkich ludzi obserwowanych, wyciszonych i zablokowanych, a następnie zaimportować ich na nowym koncie. Dzięki temu nie musisz robić tego wszystkiego drugi raz.

Jeżeli masz już konto na jakiejś instancji, ale masz wątpliwości czy jest ona dobrym miejscem dla Ciebie, poproś o sugestie instancji, które mogłyby bardziej Ci odpowiadać tematycznie. Ponadto, wyszukaj wpisów zawierających #hasztag, który Cię interesuje. Jeżeli znajdziesz większą grupę ludzi z jednej instancji, która rozmawia na dany temat - być może warto się tą instancją zainteresować.

Możesz także skorzystać z narzędzia do wyboru instancji na [joinmastodon.org](https://joinmastodon.org/communities) czy też formularza na [instances.social](https://instances.social/), jednak ich listy zawierają _mnóstwo_ instancji i może to być dla Ciebie przytłaczające. Spokojnie, nie spiesz się.

## Wpadła mi w oko inna, ciekawsza instancja. Czy mogę przenieść moje konto?

Tak i nie.

Możesz tego dokonać na jeden z dwóch sposobów: poprzez **przekierowanie** albo **migrację** konta.

Jeżeli wybierzesz **przekierowanie** konta, Twoje stare konto będzie wyświetlać komunikat o przeniesieniu i stracisz możliwość korzystania z niego (nie będzie się dało nic z niego opublikować). Zachowasz jednak możliwość wyeksportowania danych z tego konta oraz reaktywowania go w dowolnym momencie. Ludzie, którzy wejdą na Twoje stare konto, zobaczą informację, że można Cię znaleźć pod nowym adresem. Nic więcej nie zostanie przeniesione automatycznie.

Aby ustawić przekierowanie konta przejdź na stronę `[adres Twojego serwera]/settings/migration/redirect/new` (na przykład elekk.xyz/settings/migration/redirect/new). Link ten znajdziesz na stronie poświeconej migracji konta. Wystarczy, że wpiszesz nazwę konta, do którego chcesz ustawić przekierowanie, a Mastodon zajmie się resztą.

Przy przekierowaniu konta możesz przenieść część swoich danych ręcznie. Zobacz kroki 4-6 poniżej.

Jeżeli wybierzesz **migrację** konta, stanie się dokładnie to samo, co przy przekierowaniu konta. **Oprócz tego jednak**, wszyscy, którzy Cię obserwują, automatycznie zaobserwują Twoje nowe konto (dzięki czemu nikt nie będzie musiał drugi raz szukać i dodawać Cię do obserwowanych). _Możesz_ także przenieść swoich obserwowanych, listy, zablokowanych, wyciszonych, zablokowane domeny i zakładki - system nie zrobi tego automatycznie za Ciebie.

**W żadnym z powyższych przypadków Twoje wpisy nie zostaną przeniesione. Na nowym koncie zawsze zaczynasz z pustą historią wpisów.**

Poniżej znajdziesz listę kroków do przejścia, aby **zmigrować** Twoje konto, wraz z kilkoma krokami opcjonalnymi (wiemy, że tych kroków jest dużo, ale dla ułatwienia pewne kwestie są rozdzielone).

1. Stwórz **nowe** konto. Możesz je założyć na instancji, na której teraz jesteś, albo dowolnej innej.

2. Na Twoim **nowym** koncie kliknij `Preferencje`, a następnie przejdź do sekcji `Profil > Wygląd`. Poniżej Twojego awatara i nagłówka znajdziesz opcję **Ustaw konto jako prywatne** - upewnij się, że jest ona _odznaczona_ (gdyby była zaznaczona, istniałaby konieczność zatwierdzenia wszystkich obserwujących przeniesionych automatycznie w trakcie migracji). Jeżeli pole to zostało przez Ciebie odznaczone w tym kroku, kliknij przycisk **Zapisz zmiany** na górze lub na dole strony.

3. Na Twoim **nowym** koncie, pozostając w ustawieniach, przejdź do `Konto > Ustawienia konta`. Na dole strony, pod nagłówkiem **Przenoszenie z innego konta**, kliknij **utworzyć alias konta**.

4. Wpisz adres Twojego **starego** konta w formacie `uzytkownik@instancja` (na przykład `noelle@elekk.xyz`) i kliknij `Utwórz alias`.

5. (opcjonalnie) Na Twoim **starym** koncie wejdź w Ustawienia i przejdź do `Import i eksport > Eksportowanie danych`.

6. (opcjonalnie) Zobaczysz listę... hmmm... statystyk Twojego konta? Obok "Obserwowanych", "List", "Zablokowanych", "Wyciszonych", "Blokad domen" i "Zakładek", znajdziesz opcję :arrow_down:`CSV`. Kliknij w nią przy każdej rzeczy, którą chcesz przenieść na swoje nowe konto; spowoduje to pobranie plików z listami tych rzeczy w ustandaryzowanym formacie. Zapamiętaj, gdzie pobrane pliki zostały zapisane na Twoim urządzeniu.

7. (opcjonalnie) Na Twoim **nowym** koncie, w Ustawieniach, przejdź do `Import i eksport > Importowanie danych`. Dla każdego pobranego wcześniej pliku (z wyjątkiem List, których nie da się jeszcze importować):

- Użyj rozwijanego menu (pod `Importowane dane`) aby wybrać właściwą rzecz do zaimportowania.
- Pod nagłówkiem `Dane`, kliknij przycisk "**Przeglądaj...**". Wyświetli się okno wyboru pliku. Wybierz jeden odpowiedni plik CSV spośród pobranych w punkcie 6.
- Zaznacz "**Nadpisz**", jeżeli ta opcja nie jest już zaznaczona.
- Kliknij "**Załaduj**".

8. Na Twoim **starym** koncie przejdź do Preferencji, a następnie do `Konto > Ustawienia konta`. Na dole tej strony, pod nagłówkiem `Przenieś konto` kliknij "**zrobić to tutaj**".

9. Wpisz adres Twojego **nowego** konta w formacie `uzytkownik@instancja` oraz hasło do Twojego **starego konta**. W ten sposób Mastodon weryfikuje, że to Ty jesteś właścicielem konta (na wypadek, gdybyś zapomniał(a) się wylogować i ktoś inny używał Twojego komputera). Następnie kliknij "**Przenieś obserwujących**".

I gotowe! Miej na uwadze, że cała migracja oraz zaimportowanie Twoich danych może potrwać dłuższą chwilę - szczególnie jeśli przenosisz się z wielkiej lub długo istniejącej instancji.

:bangbang: **Ważne**: Powyższy proces to najbliższa rzecz, jaką Mastodon ma do zaoferowania w kwestii zmiany nazwy użytkownika.

Specjalne podziękowania dla [Teda](https://peoplemaking.games/@esdin) i arachnomyrmex'a za pomoc przy weryfikacji tej instrukcji!

## Jak zmienić nazwę użytkownika?

:bangbang: W skrócie: nie da się. Gdy już wybierz nazwę użytkownika dla swojego konta, nie da się jej zmienić. Wybieraj z rozwagą.

Rozwijając odpowiedź: jedyną możliwością zmiany nazwy użytkownika jest migracja konta (zobacz wyżej), ale nie zabierzesz ze sobą historii swoich wpisów.

Nadgorliwa administracja serwera mogłaby pokusić się o zmianę nazwy użytkownika bezpośrednio w bazie danych. Takie próby - na prośbę samych zainteresowanych - miały miejsce. Jednak zmiany te zaburzały federację na takich kontach. Ludzie zgłaszali problemy z dostarczaniem wiadomości i widocznością wzmianek na innych instancjach.

## Jak wspomnieć kogoś, kto nie jest na mojej instancji?

:bangbang: Nazwy użytkownika na Mastodonie przyjmują postać @_nazwa_uzytkownika_@_adres_instancji_. Moje konto na mastodon.social to @<span>noelle</span>@mastodon.social; moje konto na elekk.xyz to @<span>noelle</span>@elekk.xyz. Gdy wspominasz kogoś na innej instancji, musisz wpisać całą nazwę wraz z instancją (jednakże formularz dodawania wpisu zasugeruje Ci nazwę użytkownika jeżeli Twoja instancja wie o jej istnieniu).

Jeśli wspominasz o kimś z Twojej instancji, wystarczy wpisać tylko pierwszy człon. Jeśli jesteś ne elekk.xyz, samo @noelle zadziała tak samo, jak @<span>noelle</span>@elekk.xyz. Pomijając "@_adres_instancji_" dajesz Mastodonowi do zrozumienia, że chcesz wspomnieć użytkownika z tej samej instancji co Twoja.

## Jakie panują zasady?

To zależy od instancji. Każda instancja Mastodona posiada stronę pod adresem https://<span>_adres_instancji_</span>/about, która powinna zawierać informacje o instancji oraz definiować zasady społeczności. Dla przykładu, zasady instancji mastodon.social znajdują się na https://mastodon.social/about.

Miej na uwadze, że są to zazwyczaj wskazówki, a nie sztywne reguły. Każda instancja jest obsługiwana przez osobny zespół moderatorski - często w składzie jednej osoby! - i ma on zawsze ostatnie słowo w kwestii tego, co na instancji jest dozwolone, a co nie. Administracja Twojej instancji może nawet posunąć się do całkowitego blokowania innych instancji, jeżeli ich użytkownicy wchodzą w kurs kolizyjny z wartościami promowanymi przez Twoją instancję, a moderacja tamtej instancji nie wykazuje chęci współpracy.

## Co zrobić, gdy zobaczę, że ktoś łamie zasady?

Jeżeli zauważysz łamanie zasad, możesz to zgłosić. Kliknij na `...` pod wpisem naruszającym zasady i wybierz `Zgłoś @nazwa_uzytkownika` (opcja ta znajduje się zazwyczaj gdzieś na dole menu). Otworzy się okno, w którym możesz zaznaczyć inne wpisy zgłaszanego użytkownika, jak również wpisać _powód_ zgłoszenia, aby ułatwić moderacji zrozumienie, dlaczego wysyłasz zgłoszenie.

Jeżeli osoba naruszająca zasady jest na innej instancji, to obok powodu zgłoszenia znajdziesz także przełącznik umożliwiający przekazanie zgłoszenia do instancji tej osoby. W ten sposób zgłoszenie trafi nie tylko do moderacji Twojej instancji, ale również do moderacji tamtejszej instancji. Zanim jednak to zrobisz, **sprawdź reguły instancji, której używa zgłaszana przez Ciebie osoba**. Może się bowiem okazać, że z perspektywy tamtej instancji nie dochodzi do złamania reguł.

**Moderacja i administracja _Twojej_ instancji będzie widziała, że zgłoszenie zostało wysłane od Ciebie. Jeżeli wybierzesz opcję przekazania zgłoszenia do instancji danej osoby, moderacja i administracja tamtej instancji _nie zobaczy_, kto wysłał zgłoszenie. Dowiedzą się tylko, że zgłoszenie przyszło z Twojej instancji.**

Raczej nie otrzymasz powiadomienia o akcjach podjętych przez moderatorów lub administratorów w odpowiedzi na Twoje zgłoszenia. Możesz zapytać ich o to, ale przygotuj się na odpowiedź w rodzaju "nie komentujemy naszych reakcji na zgłoszenia". Zdarzają się sytuacje, gdy naruszenia są na tyle rażące, że administracje serwerów same z siebie zajmują oficjalne stanowisko i informują publicznie o podjętych krokach.

## Jakie są rodzaje wpisów?

:bangbang: Wpisy na Mastodonie (podobnie jak w całym fediwersum) mogą być połączone ze sobą na różne sposoby. Wykorzystuję trzy terminy na określenie różnych rodzajów wpisów. Nie zawsze są to te same określenia, co używane przez innych ludzi.

- **Samodzielne wpisy** - wpisy, które nie stanowią odpowiedzi na inny wpis, tj. do ich opublikowania nie trzeba kliknąć przycisku "Odpowiedz". Są one na samej górze w sekwencji. W samodzielnych wpisach możesz dodawać nazwy użytkownika innych ludzi, aby ich oznaczyć - wpisy te nie stają się odpowiedziami.

**Przykład:** Możesz użyć standardowego formularza dodawania wpisu ("Co Ci chodzi po głowie" albo "What's on your mind?" przy standardowych ustawieniach Mastodona) aby dodać nowy wpis.

- **Odpowiedzi na własne wpisy** - Twoje bezpośrednie odpowiedzi do Twojego własnego wpisu albo do innej odpowiedzi do Twojego wpisu. W nich również da się oznaczać innych ludzi. Możesz dodać dowolną liczbę odpowiedzi do swoich wpisów i _dopóki żaden wpis innego użytkownika nie pojawi się powyżej tego, który już istnieje w sekwencji_, staną się one ciągiem odpowiedzi jedna pod drugą.

**Przykład:** Możesz kliknąć na ikonkę odpowiedzi przy własnym wpisie, aby dodać odpowiedź na niego, a następnie kliknąć na ikonkę odpowiedzi przy już dodanej odpowiedzi na wpis, aby dodać kolejną.

- **Odpowiedzi** - Twoje wpisy dodawane jako odpowiedź na cudzy wpis, _albo cudza odpowiedź_ do cudzego wpisu.

**Przykład**: Możesz kliknąć na ikonkę odpowiedzi przy cudzym wpisie, aby na niego odpowiedzieć, **albo** kliknąć ikonkę odpowiedzi przy cudzym wpisie, aby dodać do niego odpowiedź, **albo** kliknąć ikonkę odpowiedzi przy swojej odpowiedzi na cudzy wpis.

Załączam diagram [tutaj](replies.png) (jako link, bo jest dość duży). Zwróć uwagę, że gdy tylko czyjś wpis zostanie dodany do sekwencji, Twoje odpowiedzi przestaną działać jako odpowiedzi do Twoich własnych wpisów. Jest to istotne, ponieważ odpowiedzi na własne wpisy i odpowiedzi innych ludzi na Twoje wpisy są różnie wyświetlane na osiach czasu Twoich obserwujących.

## Jak działają ustawienia prywatności?

Pod każdym wpisem znajdziesz kilka ikonek. Interesuje nas ikonka kuli ziemskiej lub kłódki. Kliknij ją, aby wybrać ustawienia prywatności dla wpisu, który właśnie dodajesz.

_Możesz ustawić domyślny poziom prywatności dla wszystkich Twoich przyszłych wpisów w sekcji **Preferencje > Pozostałe > Widoczność postów**._

Masz do dyspozycji następujące ustawienia:

- **Publiczny (ang. Public)** oznacza, że wszyscy zobaczą Twój wpis. Pojawi się on na liście Twoich wpisów oraz na osiach czasu Twoich obserwujących. Twoje _samodzielne wpisy_ i _odpowiedzi na własne wpisy_ ustawione jako publiczne pojawią się: na liście Twoich wpisów, w osiach czasu Twoich obserwujących, w lokalnych i globalnych osiach czasu, a także na liście wspomnień u każdego, kogo oznaczysz za pomocą nazwy użytkownika. Twoje publiczne _odpowiedzi_ pojawią się na liście Twoich _wpisów i odpowiedzi_ (ale nie na liście Twoich wpisów - to osobna lista!), w osiach czasu każdego z Twoich obserwujących, którzy _także_ obserwują osobę, której odpowiadasz, a także na liście wspomnień u każdego, kogo oznaczysz za pomocą nazwy użytkownika.

- **Niewidoczny (ang. Unlisted)** oznacza, że każdy może zobaczyć Twój wpis, ale nie pojawi się on na lokalnych i globalnych osiach czasu. Poza tą różnicą wpisy oznaczone jako niewidoczne działają dokładnie tak samo, jak wpisy publiczne.

- **Tylko obserwujący (ang. Followers only)** oznacza, że tylko ludzie, którzy Cię obserwują, oraz ludzie, których wspomnisz w treści wpisu mogą go zobaczyć w swoich osiach czasu lub na stronie Twojego profilu. Gdy ktoś spoza Twoich obserwujących otworzy Twój profil, nie zobaczy tych wpisów. _Z perspektywy Twoich obserwujących_, wpisy tylko dla obserwujących działają dokładnie tak samo jako wpisy niewidczne. **Twoje wpisy tylko dla obserwujących, w których wspominasz innego użytkownika, pojawią się we wspomnieniach u tego użytkownika, nawet jeżeli ten użytkownik nie obserwuje Cię!**

- :bangbang: **Tylko wspomniane osoby (ang. Mentioned people only)** - jak sama nazwa wskazuje: tylko ci ludzie, których wspomnisz w treści wpisu, zobaczą go i będzie on widoczny dla **wszystkich** osób, które zostały wspomniane (o ile Cię nie zablokowały lub wyciszyły). Pojawi się on na liście ich wspomnień oraz, na serwerach Mastodona od wersji 3.0 wzwyż, w kolumnie Wiadomości bezpośrednie.

Miej na uwadze, że serwery używające oprogramowania kompatybilnego z Mastodonem, ale innym niż Mastodon, mogą zignorować powyższe ustawienia prywatności przy dostarczaniu wiadomości do ich użytkowników. Używaj tej opcji z rozwagą!

## Jak bardzo prywatne jest "Prywatne"?

Chcę to podkreślić z całą powagą: **Wpisy widoczne tylko dla wspomnianych ("Wiadomości bezpośrednie") nie są szyfrowane ani zabezpieczone.**

Adminitracja Twojego serwera ma możliwość odczytania _wszystkich_ wpisów opublikowanych na tym serwerze, jak również _wszystkich_ wpisów wysłanych do ludzi korzystających z tego serwera. **Jednakże** proces ten jest upierdliwy.

Twoje prywatne wpisy nie pojawią się panelu administracyjnym serwera. Aby się do nich dostać, Twój administrator musi się zalogować do bazy danych - zazwyczaj za pomocą linii komend serwera. Administracja ma zazwyczaj inne rzeczy na głowie i nie będzie robić tego dla przyjemności. Czasem jednak musi i jest ku temu ważny powód: **jest to niezbędny środek bezpieczeństwa.**

Administracja _nie chce_ czytać Twoich prywatnych wpisów. Muszą jednak mieć taką możliwość, ponieważ prywatne wpisy mogą być wykorzystywane do potajemnego nękania ludzi lub innych nielegalnych działań. W wielu systemach prawnych administracja serwera może być pociągnięta do odpowiedzialności karnej _nawet jeżeli nie wiedziała, że nielegalny czyn miał miejsce_.

A zatem - administracja serwera przejrzy Twoje wpisy oznaczone jako prywatne tylko wtedy, gdy będzie podejrzewać, że dopuszczasz się nękania albo nielegalnych działań. Upewnij się, że masz wystarczająco dużo zaufania do administracji, aby ten fakt nie stanowił dla Ciebie problemu. Jeżeli nie, to może warto rozejrzeć się za inną instancją.

Skoro już przy tym jesteśmy, warto odnotować, że tak samo jest na większości serwisów społecznościowych. Administratorzy Twittera mogą czytać Twoje prywatne wiadomości. Administratorzy forum również mogą czytać Twoje wiadomości. Mastodon nie jest w tym aspekcie nowatorski ani nadzwyczajny. Chcieliśmy się tylko upewnić, że jest to dla Ciebie wiadome.

**Ogólna zasada jest taka: jeżeli aplikacja, której używasz, nie posiada [szyfrowania end to end](https://pl.wikipedia.org/wiki/Szyfrowanie_od_ko%C5%84ca_do_ko%C5%84ca), to informacja, którą przez nią przesyłasz, nie jest zabezpieczona o ile nie użyjesz [dodatkowych narzędzi](https://pl.wikipedia.org/wiki/Pretty_Good_Privacy) do jej zabezpieczenia.**

## Co się dzieje, gdy ktoś dodaje mnie do obserwowanych?

~~Gdy ktoś dodaje Cię do obserwowanych, zaciągasz u tej osoby kredyt na całe życie. Gdy tylko Cię poprosi, będziesz mieć przymus porzucenia swojego dotychczasowego życia dla niej. A gdy już to nastąpi, ta osoba usunie Cię z obserwowanych. Jeśli sobie z tym poradzisz, nie będzie problemu z powrotem do normalnego życia.~~

Okej, to był tylko żart.

Gdy ktoś doda Cię do obserwowanych, ta osoba będzie od tej pory widzieć Twoje wpisy na swojej stronie głównej - łącznie z wpisy widocznymi tylko dla obserwujących. Jeżeli chcesz, możesz ograniczyć liczbę obserwujących Cię osób poprzez kliknięcie **Edytuj profil** i wybranie **Ustaw konto jako prywatne**. Dzięki temu zyskasz możliwość własnoręcznego akceptowania i odrzucania ludzi, którzy chcą Cię dodać do obserwowanych.

## Więc jeśli ustawię konto jako prywatne, tylko zaakceptowani obserwujący będą widzieć moje wpisy?

Tak i nie.

Na prywatnym koncie akceptujesz prośby o obserwowanie _poprzez interfejs Mastodona_. To znaczy, że tylko ludzie, których zaakceptujesz na listę obserwowanych, zobaczą Twoje wpisy oznaczone jako **tylko obserwujący**. Twoje **niewidoczne** wpisy wciąż będą widoczne na Twoim profilu, a Twoje **prywatne** wpisy pojawią się na Twoim profilu oraz na lokalnej i globalnych osiach czasu.

**Ale...**

:bangbang: Każde konto na Mastodonie (na serwerze bez modyfikacji) udostępnia także kanał RSS zawierający wszystkie publiczne i niewidoczne wpisy - to znaczy te wpisy, które są widoczne na stronie profilu danego konta. Nie trafiają tam wpisy tylko dla obserwujących ani wiadomości bezpośrednie. Jeśli [dodasz ostrzeżenie o zawartości (CW)](#co-oznacza-cw), na kanale RSS będzie widoczna będzie tylko treść CW bez rozwinięcia.

Twój kanał RSS jest dostępny pod adresem `https://<adres-twojego-serwera>/users/<twoja-nazwa-użytkownika>.rss`. Na przykład, w przypadku mojego konta `https://elekk.xyz/@noelle` kanał RSS znajduje się pod adresem `https://elekk.xyz/users/noelle.rss` (pamiętaj aby pominąć `@`!)

**Każdy może zasubskrybować Twój kanał RSS za pomocą specjalnego czytnika, aby śledzić na bieżąco Twoje publiczne i niewidoczne wpisy.** Nie da się kontrolować, kto może wyświetlić Twój kanał RSS, a kto nie. Jednak konstrukcja kanału RSS wyklucza możliwość wyświetlenia w nim wpisów tylko dla obserwowanych lub wspomnianych osób. _Jeżeli wszystkie Twoje wpisy są widoczne tylko dla obserwujących, Twój kanał RSS będzie pusty._

Pamiętaj, że zawsze możesz zmienić domyślne ustawienie widoczności Twoich wpisów w sekcji **Preferencje > Pozostałe > Widoczność wpisów**. Jeżeli Twoje konto jest ustawione jako prywatne, sensownym pomysłem może być ustawienie domyślnej widoczności wpisów jako 'Tylko obserwujący'. Dzięki temu nie będziesz mieć możliwości dodania wpisu publicznego lub niewidocznego przez przypadek.

## Co jeżeli ktoś mnie obserwuje albo pisze do mnie, a ja sobie tego nie życzę?

Masz kilka możliwości.

- **Jeśli nie chcesz widzieć wpisów tej osoby**, możesz ją _wyciszyć_. Zablokuje to wyświetlanie wpisów od tej osoby we wszystkich Twoich osiach czasu. Opcjonalnie możesz również zablokować powiadomienia od niej (dodawanie do ulubionych, podbicia i wzmianki). Zatem jeżeli chcesz ukryć wpisy danej osoby, ale nie chcesz przegapić, kiedy ta osoba wchodzi z Tobą interakcje - da się tak zrobić.

- **Jeśli nie chcesz widzieć tej osoby ani nie chcesz, aby ta osoba widziała Ciebie**, możesz ją _zablokować_. Zablokowana osoba zostanie automatycznie wyciszona. Jeżeli wcześnie obserwowaliście siebie nawzajem, to już nie będzie to możliwe. Osoba ta nie będzie mogła dodać Cię do obserwowanych i nie zobaczysz jej w żadnej z osi czasu, chyba że ją odblokujesz (jednak czytaj dalej!).

- **Jeśli ta osoba nęka Cię albo łamie zasady**, możesz [ją zgłosić](#co-zrobić-gdy-zobaczę-że-ktoś-łamie-zasady) i Twój moderator powinien się tym zająć.

Wszystkie trzy opcje są dostępne po kliknięciu `...` przy jednym z wpisów lub na profilu tej osoby w interfejsie WWW Mastodona.

**Jest jednak małe ale.**

Podobnie jak w przypadku [prywatnego konta](#więc-jeśli-ustawię-konto-jako-prywatne-tylko-zaakceptowani-obserwujący-będą-widzieć-moje-wpisy), każda osoba - nawet zablokowana lub zawieszona przez moderatora - może otworzyć Twoją publiczną stronę lub kanał RSS i zobaczyć Twoje wpisy oznaczone jako publiczne i niewidoczne. Niestety nie ma na to rady. Pomóc może ustawienie wszystkich wpisów jako widoczne tylko dla obserwujących.

## Jak sprawdzić, czy dana osoba mnie wyciszyła lub zablokowała?

Nie da się. Nie dostaniesz powiadomienia o tym fakcie.

Jeśli dana osoba Cię wyciszyła, nie będziesz mieć stuprocentowej pewności. Brak reakcji na Twoje wzmianki może być powodem do podejrzeń, ale Mastodon celowo utrudnia rozpoznanie, czy tak się dzieje. Ma to na celu na celu zapobiegnięcie sytuacji, w której ktoś nęka Cię z wielu kont aby obejść wyciszenie.

Gdy ktoś Cię zablokuje, stracisz możliwość obserwowania tej osoby, a jej wpisy nie pojawią się w Twojej osi czasu. Gdy otworzysz profil tej osoby _wewnątrz inferfejsu WWW Mastodona_, żaden z jej wpisów nie będzie widoczny. Warto jednak zaznaczysz, że jeżeli otworzysz profil kogoś, kogo _nie obserwujesz_, a wpisy tej osoby się nie wyświetlą, to przyczyną nie musi być blokada, lecz problemy z serwerem. Nie wyciągaj pochopnych wniosków.

Jeśli ktoś Cię zablokował, wciąż możesz otworzyć publiczną stronę tej osoby i zobaczyć jej publiczne i niewidoczne wpisy. Publiczne profile nie wymagają logowania, aby je zobaczyć, więc nie ma możliwości rozpoznania, że Ty to Ty i że dana osoba Cię blokuje. _Jednak bądźmy szczerzy:_ jeśli dana osoba Cię zablokowałą, to znaczy że nie życzy sobie Twojej obecności w pobliżu. _Masz techniczną możliwość_ czytania publicznych i niewidocznych wpisów tej osoby, ale może jednak przestań? Naruszasz w znaczący sposób prywatność tej osoby i z premedytacją przekraczasz wyznaczone granice. Argument w stylu "oprogramowanie na to pozwala, czyli to jest w porządku" jest żałosny. Poważnie - zostaw tę osobę w spokoju.

## Co się dzieje, gdy przekroczę limit znaków?

Spokojnie - nie da się. Mastodon nie pozwoli Ci dodać wpisu dłuższego niż limit na Twojej instancji. Nikt nie zrobi Ci żadnych nieprzyjemności z tego powodu.

Jeśli przeczujwasz, że Twoja wiadomość jest zbyt długa na jeden wpis, albo przyszło Ci do głowy coś jeszcze już po opublikowaniu wpisu, możesz _odpowiedzieć na własny wpis_. Mastodon obsługuje wątkowanie wpisów, więc możesz dodać dowolną liczbę wpisów jako odpowiedzi jedna na drugą, i cała seria wyświetli się po kliknięciu w którykolwiek z wpisów w Twoim wątku.

A zatem - jeżeli Twój wpis jest zbyt długi, podziel go i dodaj drugą część jako odpowiedź do pierwszego. A gdy przypomnisz sobie o czymś jeszcze, to po prostu dodaj odpowiedź do Twojego pierwotnego wpisu i ta odpowiedź będzie widoczna, gdy ktoś kliknie na oryginalny wpis.

## Czym są hasztagi?

Aby stworzyć hasztaga, wpisz "#" i dowolną sekwencję liter lub liczb. Możesz używać liter z ogonkami. Hasztagi nie obsługują interpunkcji, spacji, symboli ani emoji.

`#fotografia` jest poprawnym hasztagiem. `#PięknoNauki` również.

`#Piekno-Nauki` nie zadziała (hasztagiem stanie się jedynie `#Piekno`).

Hasztag stanowi metadane Twoim wpisu, tj. dostarcza dodatkowych informacji, które nie są częścią wpisu, ale ułatwiają zrozumienie jego treści. Jeżeli masz styczność z programowaniem, pomyśl o hasztagu jak o komentarzu w kodzie.

Hasztagi są śledzone przez każdą instancję. Kliknięcie w hasztag przenosi Cię do listy publicznych wpisów z tym hasztagiem. Możesz za ich pomocą czytać, co ciekawego przyniosła #polityka, znaleźć nowe osoby do obserwowania w tagu #FollowFriday, czy też zobaczyć prace artystyczne ludzi w tagu #mastoArt. Mastodon od wersji 4.0.0 pozwala na obserwowanie wybranych hasztagów, dzięki czemu wpisy zawierające obserwowany hasztag 
wylądują na Twojej osi czasu.

Jeśli hasztag składa się z kilku słów, używaj wielkich liter - np. `#DepartamentWiedzyUżytecznej` zamiast `#departamentwiedzyużytecznej`. Dzięki temu czytniki ekranowe poprawnie odczytają pojedyncze słowa w hasztagu i ułatwią jego zrozumienie osobom niewidomym lub słabo widzącym.

Nie przesadzaj z ilością hasztagów. Co do zasady hasztagi raczej nie powinny przekraczać 10% całkowitej długości Twojego wpisu. Jeśli zdarza Ci się przekraczać ten pułap, być może za bardzo rozmieniasz się na drobne.

## Co oznacza "CW"?

:bangbang: CW to skrót od anglojęzycznego 'Content Warning' i oznacza ostrzeżenie o zawartości. Ukrywa ono Twój wpis za jakimś tekstem (który możesz samodzielnie ustawić). Działa on trochę jak link "Czytaj dalej".

Możesz używać ostrzeżeń o zawartości do oznaczania takich tematów jak:

- polityka
- seks
- tematy wzbudzające obrzydzenie
- częste fobie, takie jak pająki czy krew
- rozmowy o zdrowiu
- długie wpisy, które zajęłyby sporo miejsca na osiach czasu innych użytkowników
- komentarze do dyskusji trwających gdzieś indziej w fediwersum, często oznaczone jako "meta" czy "dyskusja" (ang. "discourse")

Niektóre popularne skróty, które napotkasz w ostrzeżeniach u anglojęzycznych użytkowników:

- mh: zdrowie psychiczne (od ang. mental health)
- ph: zdrowie fizyczne (od ang. physical health)
- alc: alkohol (od ang. alcohol)
- pol: polityka, często w połączeniu z kodem kraju, np. "uspol" oznacza politykę USA
- pda: publiczne okazywanie czułości (od ang. public display of affection)
- nsfw: nie oglądać w miejscu pracy (od ang. not safe for work)
- ec: kontakt wzrokowy (od ang. eye contact) - zazwyczaj używany, gdy do wpisu dołączone jest zdjęcie

Oprócz tego w ostrzeżeniach mogą znaleźć się dodatkowe informacje:

- `+` i `-` w połączeniu z innym skrótem (np. `mh+` albo `mh-`) - sygnalizuje czy informacja jest pozytywna czy negatywna
- 'boosts ok' / 'boosts appreciated' - prośba albo zachęta do podbicia wpisu
- 'no boosts' / 'no favs' - informuje, że dana osoba nie życzy sobie, aby jej wpis był podbijany / dodawany do ulubionych i warto to uszanować

Jak formułować ostrzeżenia o zawartości? Ogólnie mówiąc, kieruj się swoim najlepszym osądem. Zadaj sobie pytanie: "czy jest jakiś powód, dla którego ktoś nie chciałby tego zobaczyć?". Masz możliwość, aby poświęcić zaledwie chwilkę czasu i uczynić fediwersum lepszym miejscem. Czemu z tego nie skorzystać?

Ostrzeżenia o zawartości mogą być wymagane w zasadach serwera dla wpisów o określonej tematyce. Nie jest to cenzura, a raczej uprzejmość wobec ludzi, którzy w jakimś stopniu patrzą na świat inaczej, niż my. Dzięki ostrzeżeniom o zawartości osoby o różnej wrażliwości na pewne bodźce (np. osoby ze spektrum autyzmu, bojące się widoku pająków, cierpiące na depresję itp.) mogą pominąć pewne treści i nadal cieszyć się bezpieczną i zdrową platformą do rozmów i wymiany myśli.

**Ważna uwaga:** Mastodon _ignoruje_ hasztagi w treści ostrzeżeń o zawartości. Mastodon _widzi_ hasztagi, które znajdują się *pod* ostrzeżeniami. Zawsze wstawiaj hasztagi w treści wpisu (np. na końcu), a nie wewnątrz samego ostrzeżenia.

## Załączyłam obrazek do mojego wpisu. Co to za ikonka z okiem?

:bangbang: Kliknięcie w nią spowoduje, że Twój obrazek zostanie zakryty nakładką z ostrzeżeniem "Wrażliwa zawartość". Dobrze jest tego używać do oznaczania nagości, przemocy i krwi, tematów politycznych itp.

Zapewne zauważysz, że jeżeli do wpisu załączysz obrazek i użyjesz CW, nakładka "wrażliwa zawartość" włącza się automatycznie i nie da się jej wyłączyć. To zamierzony efekt.

## Załączyłam obrazek do mojego wpisu. Jak dodać do niego opis zawartości?

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

## Dlaczego nie mogę zacytować czyjegoś wpisu jak na Twitterze?

:bangbang: Podobnie jak z wyszukiwaniem, jest to funkcja zapobiegająca nękaniu. Jeżeli chcesz odpowiedzieć na czyjś wpis, no to zrób dokładnie to - dodaj odpowiedz do tego wpisu. Nie możesz tak po prostu rzucić go swoim obserwującym i dołączyć złośliwy komentarz.

_(Daruj sobie robienie zrzutów ekranu wpisów i dołączanie ich jako obrazki. **Da się**, ale społeczność Mastodona nie pochwala tego. Jeżeli będziesz to robić nagminnie, szybko wyrobisz sobie złą reputację.)_

## Kultura na Mastodonie jest jakaś taka... dziwna?

To prawda! Ale z czasem ta dziwność staje się bardzo przyjemna.

Poniżej kilka popularnych dziwactw:

- :pineapple:: - nikt tak naprawdę nie wie. [acw](https://cybre.space/@acw) wrzucił jako pierwszy, ktoś inny podchwycił, i tak to to trwa do dziś. Takie tam głupoty. Nie wiesz co napisać? Wrzuć :pineapple:.

- AWOO: [Awoo.Space](https://awoo.space) to jedna z pierwszych instancji Mastodona. "Awoo" to dźwięk wyjącego wilka. Śmiesznie to brzmi. Awoo! (Pawoo.net nie ma z tym nic wspólnego; w języku japońskim "pawoo" jest oznacza trąbienie słonia.). Ktoś się wkurzył na te wszystkie "awoo" i ustanowił karę 350 dolarów za każde "awoo". Spokojnie, nikt jej nigdy nie zapłacił.

- #gameing: Swego czasu istniało (i wciąż istnieje) przekonanie, że granie w gry określane hasztagiem #gaming jest "hardkorowe" i elitarne. Istniały też obawy, że pewne grupy graczy zawłaszczą hasztag #gaming. #gameing powstał jako środek zapobiegawczy; chodzi w nim o przyjemne, luźne i bezstresowe podejście do gier, czy to video czy innych _[ przyp. tłum.: w polskiej społeczności Mastodona istnieje podobny hasztag #giereczkowo ]_.

Przyzwyczaisz się.

## Co oznacza ![:red_candle:](red_candle.png)?

Na początku listopada 2017 roku w wyniku samobójstwa odeszła od nas znana i lubiana użytkowniczka Mastodona. ![:red_candle:](red_candle_sm.png) i ![lattentacle](lattentacle_sm.png) upamiętniają naszą przyjaciółkę Natalie Nguyen.

## Jaka jest ogólnie przyjęta etykieta na Mastodonie?

Nie ma jednego sztywnego zestawu reguł dla wszystkich. Jak wspomniałam wyżej, różne instancje mają różne zasady. Mimo to, wielu ludzi kieruje się kilkoma prostymi zasadami, których celem jest uczynienie Mastodona miejscem bardziej przyjaznym dla wszystkich.

- Jeśli załączasz obrazek do swojego wpisu, ale nie opisujesz go w treści, dodaj opis jego zawartości, aby ułatwić zrozumienie go przez osoby używające czytników ekranu.

- Jeśli załączasz obrazek, który zawiera **nagość, pornografię lub treści sugestywne seksualnie, krew, przemoc, lub politykę**, lub którykolwiek z popularnych czynników wywołujących PTSD / niepokój (np. jedzenie, pająki), [oznacz go jako treść wrażliwą](#załączyłam-obrazek-do-mojego-wpisu-co-to-za-ikonka-z-okiem).

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

Sprawdź [instrukcje dla współtwórców](DLA_WSPOLTWORCOW.md)!
