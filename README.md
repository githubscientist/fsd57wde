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

To group the data by customer_id and name to find
the number of items purchased by each customer:

```sql
select customer_id, name, count(*) from sales group by customer_id, name;
```

To rename the grouped column count(\*) to items_count:

```sql
select customer_id, name, count(*) as items_count from sales group by customer_id, name;
```

To find the total amount spent by each customer:

```sql
select customer_id, name, count(*) as items_count, sum(amount) as total_amount from sales group by customer_id, name;
```

To sort the data in descending order:

```sql
select customer_id, name, count(*) as items_count, sum(amount) as total_amount from sales group by customer_id, name order by total_amount desc;
```

To skip the first 3 records and fetch the next 5 records:

```sql
select customer_id, name, count(*) as items_count, sum(amount) as total_amount from sales group by customer_id, name order by total_amount desc limit 5 offset 3;
```

To find the top 3 customers who have spent the most:

```sql
select customer_id, name, count(*) as items_count, sum(amount) as total_amount from sales group by customer_id, name order by total_amount desc limit 3;
```

Normalization:

Normalization is a process of organizing the data in the database efficiently, reducing redundancy and dependency by dividing the large table into smaller tables and defining relationships between them.

Example:

books table

| book_id | title                 | author        | author_email   |
| ------- | --------------------- | ------------- | -------------- |
| 1       | To Kill a Mockingbird | Harper Lee    | harper@xyz.com |
| 2       | 1984                  | George Orwell | george@xyz.com |
| 3       | Animal Farm           | George Orwell | george@xyz.com |
| 4       | The Great Gatsby      | Harper Lee    | harper@xyz.com |
| 5       | Pride and Prejudice   | Jane Austen   | jane@xyz.com   |

The books table is not normalized because the author and author_email are repeated for each book. To normalize the table, we can create a separate authors table:

books table:

| book_id | title                 | author_id |
| ------- | --------------------- | --------- |
| 1       | To Kill a Mockingbird | 1         |
| 2       | 1984                  | 2         |
| 3       | Animal Farm           | 2         |
| 4       | The Great Gatsby      | 1         |
| 5       | Pride and Prejudice   | 3         |

authors table:

| author_id | author        | author_email   |
| --------- | ------------- | -------------- |
| 1         | Harper Lee    | harper@xyz.com |
| 2         | George Orwell | george@xyz.com |
| 3         | Jane Austen   | jane@xyz.com   |

Now, the books table is normalized, and the author and author_email are stored in the authors table.

Joins:

Joins are used to combine rows from two or more tables based on a related column between them.

Types of Joins:

- INNER JOIN: returns rows when there is a match in both tables
- OUTER JOIN: returns rows when there is a match in one of the tables
  - LEFT JOIN: returns all rows from the left table and the matched rows from the right table
  - RIGHT JOIN: returns all rows from the right table and the matched rows from the left table
  - FULL JOIN: returns all rows when there is a match in one of the tables

Example:

To Find the author of each book
To Find the author of the book 1984

Guvi Zen class:

- students
- courses
- mentors
- placements

List of tables and columns:

1. students
   - student_id: int (primary key)
   - student_name: varchar(50)
   - student_email
   - student_phone
   - student_dob
   - student_address
   - student_city
   - student_state
   - student_country
   - student_pincode
   
   