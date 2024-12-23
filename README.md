# React Redux Cart Application

Ce projet est une développée avec **React** et **Redux Toolkit**.

## Prérequis

#Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (v14 ou supérieure)
- [npm](https://www.npmjs.com/)

## Installation

# 1. **Cloner le dépôt**

### Clonez le projet depuis GitHub ou téléchargez-le en tant que fichier ZIP.

git clone https://github.com/zakariadbani/reactjsFormation.git

# 2. **Accéder au dossier du projet**

### Naviguez vers le dossier du projet cloné :

cd votre-repo

# 3. **Installer les dépendances**

### Installez les packages nécessaires avec npm :

npm install

# 4. **Lancer l'application**

### Démarrer le serveur de développement

npm start

# 5. **Accéder à l'application**

### Ouvrez votre navigateur et accédez à l'adresse suivante :

http://localhost:3000

# Lancer les tests

### Pour exécuter les tests unitaires et vérifier le bon fonctionnement de l'application, utilisez la commande suivante :

npm test

# Fonctionnalités principales

- **Affichage d'une liste d'utilisateurs avec navigation vers les détails (fetch)** :

  - La liste des utilisateurs est récupérée via une requête **fetch** et affichée. L'utilisateur peut cliquer sur un utilisateur pour accéder à ses détails.

- **Affichage d'une liste d'employés avec navigation vers les détails (axios)** :

  - La liste des employés est récupérée via une requête **axios**. Chaque employé peut être sélectionné pour afficher ses détails.

- **Affichage d'une liste de produits (axios + redux)** :

  - Les produits sont récupérés à l'aide de **axios** pour effectuer les requêtes API. L'état de la liste des produits est géré par **Redux**, permettant une gestion centralisée de l'état de l'application.

- **Affichage des Graphs en utilisant (recharts)** :

  - Les données sont visualisées à l'aide de graphiques interactifs créés avec **Recharts**, une bibliothèque de graphiques pour React. Pour plus d'exemples, vous pouvez consulter la [documentation des exemples Recharts](https://recharts.org/en-US/examples).

- **Gestion centralisée de l'état avec Redux Toolkit** :
  - L'état de l'application est géré de manière centralisée avec **Redux Toolkit**, simplifiant la gestion de l'état, les actions et les reducers.
