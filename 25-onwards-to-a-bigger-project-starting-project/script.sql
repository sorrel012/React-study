create table MEETUP 
(
	id UUID primary key DEFAULT uuid_generate_v4(),
	title varchar(5000) not null,
	image varchar(5000) not null,
	address varchar(1000) not null,
	description varchar(5000) not null
) 

select * from MEETUP;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

select id from meetup;

