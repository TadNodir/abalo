# Installation instruction
The following is the step by step installation instruction of Laravel project "abalo" and PostgreSQL configuration

<br>

## Steps
<br>

1. In order to create a project we have to run the following command in Command Prompt or git bash: <br>
   ```php <yourPathToComposerPharFile>/composer.phar create-project laravel/laravel abalo``` <br>
   To check, if our created project is running correctly, we go to abalo project folder: ```cd abalo```
   <br>
   And run: ```php artisan serve --port=8020``` <br>
   As the result we recieve the following response: <br>
   ![grafik](https://user-images.githubusercontent.com/74507609/226545100-ddba548f-66f4-42f1-b510-22b95e799a14.png)

2. Download PostgreSQL: https://www.postgresql.org/ and follow installation instructions for your specific device. Save the password, which you wrote during the installation
    After installing it open the app SQL Shell (psql) and enter all the necessary information such as the server, database, port, username, and password. To accept the
    default, you can press Enter. Note that you should provide the password that you entered during installing the PostgreSQL. To test it and find out the installed version,
    write the command: ```SELECT version();```
    <br>
    If as a result you have something like this:
    
    ![grafik](https://user-images.githubusercontent.com/74507609/227053757-67ba2265-c8e8-4139-923e-62d0194e732b.png)

    then you successfully downloaded PostgreSQL.
    
3. To create a database run in SQL Shell(psql): ```CREATE DATABASE abalo WITH ENCODING = 'UTF-8';```
    <br>
    Now check, if it was correctly created by: ```\l```
    <br>
    You should get a result like this: ![grafik](https://user-images.githubusercontent.com/74507609/227210855-edf7ad5d-1e13-495f-9995-25884c59de8a.png)
    
    Open pgAdmin, go to your database and create schema "public" if it doesn't exist
    
    
