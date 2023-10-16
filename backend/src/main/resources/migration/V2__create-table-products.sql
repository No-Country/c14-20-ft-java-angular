CREATE TABLE products (
    id bigint not null auto_increment,
    name varchar(100) not null,
    description varchar(300) not null,
    category_id bigint not null,
    created_at datetime not null,
    updated_at datetime not null,
    price decimal(10, 2) not null,
    stock bigint not null,
    image varchar(500) not null,
    enable tinyint not null,

    primary key(id),
    constraint fk_product_category foreign key(category_id) references categories(id)
   
);
