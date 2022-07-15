

npm init -y

npm i express morgan sequelize pg pg-hstore

echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

npx nodemon src/index.js
        
        ****para correr el script npm run dev
        "scripts": {
            "dev": "nodemon src/index.js"
        },


TIPOS DE DATOS
https://sequelize.org/docs/v6/core-concepts/model-basics/