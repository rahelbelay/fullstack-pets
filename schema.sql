

create table owners (
    id serial primary key,
    name text,
    phone_number varchar(20)
);

create table pets(
    id serial primary key,
    name text,
    species varchar(100),
    birthdate date,
    owner_id integer references owners (id)


);




-- create table pets_owner (
--     --no id

-- owner_id integer references owners (id),
-- pets_id integer references pets (id)

-- );