# groupomania-chat-app

ReadMe OCP7

Bonjour, vous trouverez ci-après les instructions pour lancer le projet de « Chat » Groupomania.
Il s’agit d’un outil encourageant et facilitant la communication entre les collaborateurs et entre les services. Un modérateur sera nommé pour valider les contenus échangés.
Pour découvrir ce nouveau réseau social d’entreprise, je vous invite à suivre les consignes ci-dessous et je vous souhaite une expérience agréable.

1)	Rendez-vous sur www.github.com et télécharger ou cloner le projet oob3003/OCP7front 
2)	Ouvrez un terminal depuis le répertoire OCP7front puis lancer le serveur du front avec la commande suivante en fonction de l’emplacement du téléchargement précédent
 OCP7front\groupomania-chat-app> npm run serve 
3)	Ouvrez votre navigateur internet et allez sur localhost:8080 ; vous devriez arriver sur la page d’accueil du Chat Groupomania.
4)	Retourner sur www.github.com télécharger ou cloner le projet oob3003/backendOCP7
5)	Créer un fichier .env à la racine du dossier backend contenant :
DB_HOST=
DB_USER=
DB_PASS= MonMotDePasseDeBaseDeDonnées
6)	Ouvrez un terminal du back depuis le répertoire backendOCP7 et installer les éléments avec les commandes suivantes en fonction de l’emplacement du téléchargement précédent.
backendOCP7> npm install
puis
backendOCP7> npm install dotenv
7)	Puis lancer le serveur du back
backendOCP7> node server ou nodemon server si déjà installé.



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
