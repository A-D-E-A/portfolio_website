---
layout: ../../layouts/Layout.astro
title: MiCC GUI
by: Aberia
clients: ["Aberia", "Mutac", "Mutuelle du Rempart", "Yelloh", "Capa"]
description: Nous avons construit un panneau de contrôle interactif pour gérer votre centre d'appel.
tags:
  - design
  - webdev
  - call-center
---

# Présentation

**MiCC GUI** est la première plateforme développée par Aberia permettant de gérer visuellement et simplement un centre d'appel. Du renvoi d'appel à la gestion de calendriers, en passant par les fermetures exceptionnelles, tout est paramétrable avec un module correspondant à chaque fonctionnalité demandée par le client.

<hr>

# Contexte

Lorsque l'on passe un appel téléphonique, de nombreux éléments rentrent en jeu :
- L'appel est renvoyé sur le centre d'appel de l'entreprise;
- Le centre va reconnaitre la langue de l'appel entrant;
- Un message dans la langue détectée est envoyé et donne des choix à l'utilisateur (taper 1, taper 2, etc.);
- L'appel est redirigé vers un service de l'entreprise;
- En fonction de la date, l'heure, et d'un calendrier pré-établi il peut y avoir une réponse automatique;
- Sinon, une musique d'attente est jouée pendant que le service cherche un agent disponible pour répondre à l'appel et parlant la langue souhaitée,
- On arrive enfin à avoir une personne en ligne.

Il est complexe de gérer chaque élément avec une grande précision, c'est pourquoi des ingénieurs spécialisés s'occupent de la configuration et du bon fonctionnement de ce système. Mais ces ingénieurs doivent souvent gérer plusieurs projets, ce qui peut allonger le temps nécessaire à l'apport d'une modification. Afin que les clients puissent effectuer des configurations simples (par exemple un changement de musique d'attente ou mettre un service en fermeture exceptionnelle) et que les ingénieurs en télécommunications puissent effectuer toutes les configurations plus rapidement et simplement, Aberia a mis au point une plateforme web de gestion de centre d'appel.

<hr>

# Étapes

Premièrement, Aberia a commandé une plateforme web développée par [Ad'on Communication](https://www.ad-on.fr/) sous [Wordpress](https://wordpress.org). La plateforme proposa alors une interface graphique soignée avec des fonctionnalités rangées dans un menu.

J'ai ensuite repris le projet et été amené à créer la logique des fonctionnalités: connexion à des bases de données, règles de validation des formulaires, transfer de fichier pour les musiques d'attente, etc. Le résultat n'était pas des plus propres car je n'avais que peu d'expérience en [PHP](https://www.php.net) et que l'outil Wordpress est inadaptée à un lourd traitement de données tel que dans notre projet. Cependant c'était fonctionnel.

À chaque nouveau client, de nouvelles fonctionnalités étaient demandées. Pour simplifier le déploiement j'ai appris à utiliser [Docker](https://docker.com) pour **containeriser** l'application, ce qui a l'avantage de pouvoir créer un ensemble de services connectés qui seront isolés du reste de la machine sur laquelle ils seront installés, et donc de pouvoir "construire une fois, déployer partout". Pour ajouter une fonctionnalité à ce déploiement, j'ajoutait donc un **plugin Wordpress** développé au-dessus de l'existant fait par Ad'on avec uniquement les fichiers nécessaires aux fonctionnalités commandées.

Pour envoyer des fichiers audio, j'ai programmé des **scripts shell** qui se connectent en **SSH** au serveur de téléphonie pour les envoyer. <dfn><abbr title="Secure Shell">SSH</abbr></dfn> est un protocole sécurisé de connexion entre deux hôtes distants. Pour changer des configurations j'insérai de nouvelles tables dans une base de données [MySQL](https://www.mysql.com/fr) que mes collègues ingénieurs télécom connectaient à un serveur d'appel. Toutes ces fonctionnalités se trouvant dans leur propre dossier de l'application.

<hr>

# Acteurs principaux

- Alexandre Allies : Chef de projet (pour certains déploiements)
- Vincent Jacquet : Chef de projet (pour les autres déploiements)
- Adam Ambrosino : Développeur / designer
- Quentin Fankhauser : Administrateur bases de données
- Le product owner (représentant le besoin client) spécifique à chaque client

<hr>

# Résultats

Pour moi, ce projet a été l'occasion de travailler sur des technologies qui ne sont pas mon fort, et d'apprendre à faire de la maintenance technique sur du code non documenté. Ces points sont très importants dans ce domaine et c'est une des raisons qui me pousse à être fier de ce projet. Je n'ai pas toujours aimé travailler sur ce projet, mais la gratification donnée par ma montée en compténce en valait la peine.

Pour Aberia, c'est un atout qui permet de se démarquer de la concurrence en offrant des solutions personnalisées de gestion.

Pour les clients, c'est la possibilité d'avoir la main sur leur centre d'appel pour le mettre plus rapidement à jour.

!!INSERT SCREEN CAPTURE!!

<hr>

# Avenir

Le **MiCC GUI** est encore maintenu chez plusieurs clients. Cependant, les soucis apportés par la plateforme **Wordpress** et son incompatibilité avec nos besoins nous pousse à revoir le projet. 

Nous sommes actuellement en phase de refonte totale du projet afin d'éliminer ces inconvénients. Nous espérons un code plus propre, une structure plus lisible, un déploiement plus simple, un site plus rapide et performant, et surtout une meilleure expérience de développement pour simplifier les mises à jours et correctifs réguliers à la demande de nos clients.

<hr>

# Critique

Ayant développés ce projet seul en grande partie, si on ommet la plateforme de base, j'ai vu beaucoup de défauts et d'améliorations possibles. Une partie vient de mon manque d'expérience avec le langage et le framework, une autre vient de ces derniers qui sont inadaptés à nos besoins. Pour imager, faire cette plateforme en Wordpress c'est comme planter des clous avec un tournevis : c'est possible, mais le choix n'est pas forcément judicieux.

Je ressors grandi de cette expérience qui m'a montré mes faiblesses et fait prendre conscience que les choix de structure auxquels je ne prétait pas toujours d'importence pouvaient rapidement devenir de vrais problème. C'est une grande leçon d'humilité que j'espère ne pas avoir à réapprendre. J'espère que la refonte du projet sera à la hauteur de mes attentes, et qu'il permettra à Aberia de plus facilement industrialiser le produit en automatisant au maximum sa configuration.

<hr>

# Compétences

- [PHP](/skill/php)
- [Docker](/skill/docker)
- [Gestion de tickets](/skill/tickets)
