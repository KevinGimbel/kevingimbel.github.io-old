---
layout: default
title: Facebook "Hack"
---

"Zur Zeit" gibt es in einigen Facebook Gruppen "Konsolen Hacks" um Abonnenten, Freundschaftsanfragen oder wie Senad [hier entdeckt hat Nacktbilder freizuschalten](http://www.senadpalic.de/facebook-hack). Diese Posts sehen typischerweise so aus:
![Facebook Hack "Anleitung für den Facebook Hack"](http://www.senadpalic.de/uploads/2014/01/Facebook-Hack.png)

Klingt super oder? Ein bisschen Code eingeben und ZACK -> sexy Bilder erscheinen? **Normalerweise** sollte man bei solchen Dingen immer skeptisch sein, deswegen möchte ich gern eine kleinen Einblick geben was man hier eigentlich tut.

Die Konsole mit der man diese "Hacks" ausführt ist die Debug-Konsole die so ziemlich jeder Browser hat. Normalerweise wird in ihr JavaScript debugged oder getestet während man Webseiten entwickelt. Ungefährliche Dinge mit der Konsole sind z.B. die Funktion `console.log()` die einfach nur einen Text oder den Inhalt einer Variable in der Konsole ausgibt - sehr angenehm wenn man Webseiten erstellt und sich während ein Script abgearbeitet wird verschiedene Werte anzeigen lassen möchte. (Wer das testen möchte: Rechtsklick -> Element Untersuchen -> zu "Konsole" wechseln und console.log("Test"); eingeben -> Enter drücke - WOW! In der Konsole steht nun Test. Glückwunsch.)

`console.log()` ist eine der Funktionen die man mit der Konsole ausführen kann und dieses Script zum "freischalten" des Bildes oder um sofort 50.000 Freundschaftsanfragen zu bekommen tut währendessen noch etwas anderes: Es abonniert - in diesem Fall - zwei spezifische Nutzer und drei Gruppen. 

 In [Zeile 71](https://github.com/senadpalic/Schadhaft/blob/master/wtfacebook#L71) und [Zeile 72](https://github.com/senadpalic/Schadhaft/blob/master/wtfacebook#L72) wird eine Funktion ausgeführt die [diesen Nutzer](https://www.facebook.com/xfreaki) sowie [diesen Nutzer](https://www.facebook.com/C.Corex) abonniert. [Zeile 73 bis 75](https://github.com/senadpalic/Schadhaft/blob/master/wtfacebook#L73-L75) abonniert die folgenden Gruppen: 

- [Abonniere die Gruppe & erhalte 10.000 Kostenlose Abonnenten ! in 25 Minuten !](https://www.facebook.com/lists/506524782745126)
- [Addbörse Admins](https://www.facebook.com/lists/555082877889316)
- [Bekomme 5.000 Abonnenten ! Admins Abonnieren!](https://www.facebook.com/lists/555082554556015)
 
Zufällig alles Gruppen die [Chris Rachor](https://www.facebook.com/C.Corex), einer der beiden User die abonniert werden, erstellt hat. Interessant nicht?

Sämtliche dieser Scripte funktionieren nach diesem Prinzip: Man bekommt Abonnenten, Freundes anfragen oder Likes versprochen und abonniert im Endeffekt nur Gruppen und Profile der Leute, die diese Scripte geschrieben haben. Es empfiehlt sich daher zweimal nachzudenken und nicht jedes Script einfach in diese wunderbare Konsole zu schreibe, prinzipiell kann nämlich jedes Script, dass z.B. an einen Klick auf einen Button gebunden ist, in der Konsole ausgeführt werden.
