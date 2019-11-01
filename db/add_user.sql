create table product (
    product_id serial primary key not null,
    name varchar(40) not null,
    description varchar(80) not null,
    price interger not null,
    image_url text not null
);

insert into product(name, description, price, image_url) values();

select * from product;



