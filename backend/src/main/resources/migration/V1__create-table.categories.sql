CREATE TABLE categories(
    
    id bigint not null auto_increment,
    name varchar(100) not null,
    description varchar(300) not null,
    created_at datetime not null,
    updated_at datetime not null,
    enable tinyint not null,

    primary key(id)
);