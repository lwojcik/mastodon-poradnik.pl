---
title: Jak bardzo prywatne jest Prywatne?
slug: prywatnosc-na-mastodonie
---

Chcemy to podkreślić z całą powagą: **Wpisy widoczne tylko dla wspomnianych ("Wiadomości bezpośrednie") nie są szyfrowane ani zabezpieczone.**

Administracja Twojego serwera ma możliwość odczytania _wszystkich_ wpisów opublikowanych na tym serwerze, jak również _wszystkich_ wpisów wysłanych do ludzi korzystających z tego serwera. **Jednakże** proces ten jest upierdliwy.

Twoje prywatne wpisy nie pojawią się panelu administracyjnym serwera. Aby się do nich dostać, Twój administrator musi się zalogować do bazy danych - zazwyczaj za pomocą linii komend serwera. Administracja ma zazwyczaj inne rzeczy na głowie i nie będzie robić tego dla przyjemności. Czasem jednak musi i jest ku temu ważny powód:

**Jest to niezbędny środek bezpieczeństwa.**

Administracja _nie chce_ czytać Twoich prywatnych wpisów. Muszą jednak mieć taką możliwość, ponieważ prywatne wpisy mogą być wykorzystywane do potajemnego nękania ludzi lub innych nielegalnych działań. W wielu systemach prawnych administracja serwera może być pociągnięta do odpowiedzialności karnej _nawet jeżeli nie wiedziała, że nielegalny czyn miał miejsce_.

A zatem - administracja serwera przejrzy Twoje wpisy oznaczone jako prywatne tylko wtedy, gdy będzie podejrzewać, że dopuszczasz się nękania albo nielegalnych działań. Upewnij się, że masz wystarczająco dużo zaufania do administracji, aby ten fakt nie stanowił dla Ciebie problemu. Jeżeli nie, to może warto rozejrzeć się za inną instancją.

Skoro już przy tym jesteśmy, warto odnotować, że tak samo jest na większości serwisów społecznościowych. Administratorzy Twittera mogą czytać Twoje prywatne wiadomości. Administratorzy forum również mogą czytać Twoje wiadomości. Mastodon nie jest w tym aspekcie nowatorski ani nadzwyczajny. Chcieliśmy się tylko upewnić, że jest to dla Ciebie wiadome.

**Ogólna zasada jest taka: jeżeli aplikacja, której używasz, nie posiada [szyfrowania end to end](https://pl.wikipedia.org/wiki/Szyfrowanie_od_ko%C5%84ca_do_ko%C5%84ca), to informacja, którą przez nią przesyłasz, nie jest zabezpieczona o ile nie użyjesz [dodatkowych narzędzi](https://pl.wikipedia.org/wiki/Pretty_Good_Privacy) do jej zabezpieczenia.**
