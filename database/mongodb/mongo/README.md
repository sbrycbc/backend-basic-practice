# CRUD Operationen im mongo

1. Starte den `mongo`-shell auf der Kommandozeile.
2. Erstelle eine neue Datenbank mit dem Kommando: `use meineDatenbank`. Mit `show dbs` kann man die Namen der Datenbank sehen.

3. Probiere die Methoden unten aus, um Dokumente in der Datenbank zu speichern (erstellen), abzurufen, ändern und löschen.

- Eine Collection (Sammlung) wird automatisch erstellt, wenn das erste Mal etwas reingeschrieben wird. Mit `show collections` kann man die Collections in der Datenbank sehen.

- Erstelle 3 Dokumenten mit folgendem Inhalt:

```
      {tier: 'Katze', alter: 10, essen: ["Maus", "Pute", "Milch"]},
      {tier: 'Elefant', alter: 95, essen: ["Bananen", "Grass", "Wasser"]},
      {tier: 'Hund', alter: 15, essen: ["Trockenfutter", "Knochen"]}
```

- Gib alle Dokumente in der Collection aus.

- Suche alle Dokumente,in denen die Eigenschaft 'tier' den Wert "Elefant" hat.

- Suche alle Dokumente,in denen die Eigenschaft 'alter' weniger als 80 ist.
- Ändere eine Eigenschaft in jedem Dokument.
- Lösche ein Dokument.

## Create (Http methode POST)

Ein Dokument erstellen (Insert)

    db.meineSammlung.insertOne(
       { name: "Anna", alter: 100, hobbies: ["schwimmen", "tennis"] }
    )

Mehrere Dokumente erstellen (Insert)

    db.meineSammlung.insertMany( [
       { name: "Anna", alter: 100, hobbies: ["schwimmen", "tennis"] },
     { name: "Pelle", alter: 19, hobbies: ["tok tok", "bandy"] },
     { name: "Karl", alter: 35, hobbies: ["lesen", "coden"] }
     ])

## Read (Http-Methode GET)

Einen oder mehrere Einträge holen (Query)

Alle Dokumente in der Kollektion holen:
db.meineSammlung.find({})
`find` gibt einen "Cursor" zurück. Diese kann in einer Variable gespeichert werden, und dann auf alle Dokumente zugegriffen werden. Wenn man es nicht in einer Variable speichert, hat man Zugriff auf die ersten 20 Dokumente.

Es ist oft parktisch, die Dokumenten als eine Array zurückzubekommen. Dafür kettet man an dem `find` die Methode `toArray()` an.  

db.meineSammlung.find({}).toArray()
**Gefiltert**

Mit `find` kann man auch filtern, d.h. gezielt Dokumente rausholen.

Nur die Dokumente finden, mit der Eigenschaft `name` und der Wert "Anna":

    	db.meineSammlung.find( { name: "Anna" } )

Nur die Dokumente finden, mit der Eigenschaft `name` und der Wert "Anna": ODER der Wert "Pelle"
db.meineSammlung.find( { name: { $in: [ "Anna", "Pelle" ] } } )
Die Elemente finden, mit der Eigenschaft `name` und der Wert "Anna" ODER der Eigenschaft `alter` weniger als 30

    db.meineSammlung.find( { $or: [ { name: "Anna" }, { alter: { $lt: 30 } } ] } )

Dokumente, die nicht die Eigenschaft `item` haben oder die Eigenschaft `item` den Wert null hat

    db.meineSammlung.find( { item: "null" } )

Elemente, die nicht die Eigenschaft `item` haben :

    db.meineSammlung.find( { item : { $exists: false } } )

Es gibt viele weitere Vergleichsoperatoren:

[Weitere Operatoren Zum Nachlesen](https://docs.mongodb.com/manual/reference/operator/query-comparison/#query-selectors-comparison)

## Update (Http-Methode PUT)

Einen Eintrag ändern (neue Informationen speichern)

Ändert in der ersten Dokument mit der Eigenschaft `name`: "Anna", die Eigenschaft `alter` zu 32.
Mit currentDate wird die Zeitpunkt des Speicherns upgedatet.

    db.meineSammlung.updateOne(
       { name: "Anna" },
       {
         $set: { "alter": 32},
         $currentDate: { lastModified: true }
       }
    )

Mehrere Dokumente gleichzeitig ändern:

    db.meineSammlung.updateMany(
       { "alter": { $lt: 30 } },
       {
         $set: { "lieblingsEssen": "Pizza" },
         $currentDate: { lastModified: true }
       }
    )

Ein _komplettes_ Dokument ändern (d.h. nicht einzelne Eigenschaften, außer `_id`):

Findet das erste Dokument und ersetzt es:

    db.meineSammlung.replaceOne(
      { name: "Anna" },
      { name: "Karin", hobbies: ["katzen füttern", "Tee trinken"]}
      {upsert:true}
    )

Mit `upsert:true` wird ein neues Dokument erstellt, wenn kein passendes Dokument gefunden wurde.

## Delete (Http-Methode DELETE)

Einen Eintrag löschen

Dokument mit der Eigenschaft `name`: "Anna" löschen: (erstes gefundenes Dokument)

    db.meineSammlung.deleteOne({name: 'Anna'})

Alle löschen, mit einer bestimmten Eigenschaft. Hier werden alle Dokumente mit der Eigenschaft `name` und der Wert "Anna" gelöscht.

    db.meineSammlung.deleteMany({ name : "Anna" })

Alle Dokumente löschen:

    db.meineSammlung.deleteMany({})

## Zum Weiterlesen:

https://docs.mongodb.com/manual/crud/

https://flaviocopes.com/node-mongodb/

Playground online:
us