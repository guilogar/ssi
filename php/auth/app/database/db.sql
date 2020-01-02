set timezone to 'CET';

drop table if exists credentials;
create table credentials(
    id        bigserial primary key,
    client_id varchar(500)
);

drop table if exists tokens;
create table tokens(
    id        bigserial primary key,
    val       varchar(500),
    expire_at timestamp default '2999-12-31'
);

insert into credentials(client_id) values('dfgbsahkbkhdf2alsjkdhf');

drop table if exists users;
create table users(
    id   bigserial primary key,
    nick varchar(500)
);

CREATE INDEX idx_users_nick
ON users(nick);

insert into users(nick) values('perico'), ('juanito'),
                              ('periquito'), ('jaimito'),
                              ('guillermito'), ('pan con queso');