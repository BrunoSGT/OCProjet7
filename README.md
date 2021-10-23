# groupomania-chat-app

ReadMe OCP7

Bonjour, vous trouverez ci-après les instructions pour lancer le projet de « Chat » Groupomania.
Je vous souhaite une expérience agréable.

1)	Rendez-vous sur www.github.com et télécharger ou cloner le projet oob3003/OCP7front 
2)	Ouvrez un terminal dans votre IDE et lancer le serveur du front avec la commande suivante en fonction de l’emplacement du téléchargement précédent
(D:)\OCP7v1\frontOCP7\groupomania-chat-app> npm run serve 
3)	Ouvrez votre navigateur internet et allez sur localhost:8080 ; vous devriez arriver sur la page d’accueil du Chat Groupomania.
4)	Retourner sur www.github.com télécharger ou cloner le projet oob3003/backendOCP7
5)	Créer un fichier .env à la racine du dossier backend contenant :
DB_HOST=localhost
DB_USER=oob3003
DB_PASS=OCP7oob3003!
6)	Ouvrez un terminal du back dans votre IDE et installer les éléments avec les commandes suivantes en fonction de l’emplacement du téléchargement précédent.
(D:)\OCP7v1\backendOCP7> npm install
puis
(D:)\OCP7v1\backendOCP7> npm install dotenv
7)	Puis lancer le serveur du back
(D:)\OCP7v1\backendOCP7> node server ou nodemon server si déjà installé

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
