CREATE TABLE employees
(
    id                      INTEGER GENERATED BY DEFAULT AS IDENTITY,
    full_name                VARCHAR(255),
    mail                    VARCHAR(255),
    phone_number             VARCHAR(255),
    PRIMARY KEY (id)
);