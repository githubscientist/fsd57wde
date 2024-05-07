# Database- Day -1: MySQL

Contents:

Introduction to database

Database:

- a collection of data
- data in the form of tables or documents
- tables are collection of rows and columns: structured databases; e.g. MySQL, PostgreSQL; SQL langauge; Relational databases
- documents are collection of key-value pairs: unstructured databases; e.g. MongoDB, Elasticsearch; NoSQL language; Non-relational databases

what is mysql?

- open-source relational database management system
- developed by Oracle Corporation
- SQL language: Structured Query Language
- used for managing databases

intro to mysql engines

- storage engines: InnoDB, NDB, MariaDB,...

basic queries - create db, table
insert, update, alter
select - where clause, distinct, group by, order by, offset, limit

Pre-read:
https://dev.mysql.com/doc/

To List all databases:

```sql
show databases;
```

To show the version of MySQL:

```sql
select version();
```

To create a database:

```sql
create database mydb;
```

To see which database is currently in use:

```sql
select database();
```

To select a database:

```sql
use mydb;
```

To show all tables in a database:

```sql
show tables;
```

To create a table:

```sql
create table mytable (id int, name varchar(20));
```

Constraints:

- NOT NULL
- UNIQUE
- PRIMARY KEY (combination of NOT NULL and UNIQUE)
- FOREIGN KEY

To insert data into a table:

```sql
insert into mytable values (1, 'John');
```

To add a not null constraint to a column:

```sql
alter table mytable modify name varchar(20) not null;
```

To delete all the records from a table:

```sql
delete from mytable;
```

To modify the column datatype:

```sql
alter table mytable modify name varchar(30);
```

To add a new column:

```sql
alter table mytable add column email varchar(20);
```

To select all the columns from the table:

```sql
select * from mytable;
```
