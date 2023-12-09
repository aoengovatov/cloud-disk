CREATE TABLE IF NOT EXISTS users (
	id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    disk_space BIGINT,
    used_space BIGINT,
    avatar VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS file (
	id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    accsess_link VARCHAR(255),
    size BIGINT,
    user_id BIGINT,
    parent_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
