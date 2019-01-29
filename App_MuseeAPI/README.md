# TX Musée - API

## Installation
1. (Recommended) Create a virtual python environment with `virtualenv env` then `source env/bin/activate`. If virtualenv isn't installed yet, install it with `sudo pip install virtualenv`.
2. Install requirements with `pip3 install -r requirements.txt`.
3. Launch migrations with `python3 manage.py migrate`.
4. Run server with `python3 manage.py runserver 0.0.0.0:8000`
5. You can see the app running on : [localhost:8000](http://localhost:8000)

## Launch interactive shell

To launch the Django interactive shell to interact with the database, type `python manage.py shell_plus`.
