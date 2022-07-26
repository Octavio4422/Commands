# MYSQL

# DATA TYPES
int = integer numbers
float = decimal numbers
varchar = character chain (between "")

# to comment a line
--"the code here"

# DATABASES
# To create a database
create database "name database";

# To show all the databases
show databases;

# TABLES

# to choose the DB which we are going to insert the table
use "name database";

# to create a table 
CREATE TABLE "name table"(
    id int NOT NULL,
    type varchar(255) DEFAULT NULL,
    state varchar(255),
    PRIMARY KEY("name of the column, id in this case") to set te pk in a table
);

# to change a table name
rename table "name table" to "new name table" 
(this command should need a refresh of the schemas)

# to insert into a table
------------------------"name column"-----"the correspondig name column value"
ISERT INTO "name table" (type, state) VALUES ('chanchito', 'feliz');

# to modificate an existing table
---------------------------------- "name column"
ALTER TABLE "name table" MODIFY COLUMN id int auto_increment;

# to get the code line of an existing table
SHOW CREATE TABLE "name table"; (it will display a console with the code line of the table slightly modificated)

# to select all the registers
------"name of the colums"
SELECT *(it means all) FROM "name table";

# to select a specific register
(the requests that not comply the conditions does not return error it instead return an empty table)
-----------------------------------------"limit of request returns"
SELECT *(it means all) FROM "name table" limit "num";

------------------------------ "condition"
SELECT * FROM "name table" WHERE id = 1 ; (id always should return one register)

SELECT * FROM "name table" WHERE state = 'feliz'; (this request could return more than one register)

-----------------------------------------------------"adds a condition"
SELECT * FROM "name table" WHERE state = 'feliz' AND type = 'chanchito'; 

-----------------------------------------------------"adds a condition"
SELECT * FROM "name table" WHERE state = 'feliz' OR type = 'chanchito';
(also exist operators like >, <, >=, <=, !=, between "value" and "value", like('%value%'))

SELECT * FROM "name table" order by "name column" asc/desc;
SELECT max("name column") as "new name table for display" from "name table";
SELECT min("name column") as "new name table for display" from "name table";

SELECT "name column","name column2" FROM "name table";

 ----------------------------------"changes the display name"
SELECT "name column","name column2" as "new name for display" FROM "name table";

|(the request from below will display an error if you dont indicate an id)
|(this can by disabled in preferences)
|
# to update a register
-------------------"name column and new value" "target"
UPDATE "name table" SET state = 'feliz' WHERE id = 3;

# to delete a register
DELETE from "name table" where id = 3;

# to create a table with a foreing key
CREATE TABLE "name table"(
    id int not null auto_increment,
    name varchar(50) not null,
    created_by int not null,
    brand varchar(50) not null,
    primary key(id),
    foreing key(created_by) references "name table"("name column referenced")
);

# to insert many data in one insert
--------------------"column names"
insert into product (name, created_by, brand)
values
    ('ipdad', 1, 'apple'),
    ('iphone', 1, 'apple'),
    ('watch', 2, 'apple'),
    ('macbook', 1, 'apple'),
    ('imac', 3, 'apple');


