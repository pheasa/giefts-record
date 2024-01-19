# giefts-record
## To create table List of value:
```
CREATE TABLE "list_of_values" (
	"id"	INTEGER NOT NULL,
	"name"	TEXT NOT NULL,
	"type"	TEXT NOT NULL,
	"group"	TEXT NOT NULL,
	"active"	BLOB NOT NULL DEFAULT 'true',
	"note"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);
```
## to create table giver
```
CREATE TABLE "giver" (
	"id"	INTEGER NOT NULL,
	"name"	TEXT NOT NULL,
	"amount"	INTEGER NOT NULL,
	"currency_type"	INTEGER NOT NULL,
	"send_by"	INTEGER NOT NULL,
	"friendship_type"	INTEGER NOT NULL,
	"note"	TEXT,
	"from"	INTEGER NOT NULL,
	FOREIGN KEY("friendship_type") REFERENCES "list_of_values"("id"),
	FOREIGN KEY("currency_type") REFERENCES "list_of_values"("id"),
	FOREIGN KEY("send_by") REFERENCES "list_of_values"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
```