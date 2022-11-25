---
layout: ../../layouts/Layout.astro
title: Docker
description: L'outil de containerisation qui a changé l'infrastructure moderne.
tags:
  - fullstack
  - devops
  - infrastructure
---

# [La technologie Docker](#docker)

## [Définition](#definition)

[Docker](https://www.docker.com) est une solution complète de containerisation.

La containerisation est un principe qui vise à isoler les processus d'une machine. Chaque applicatif fonctionne dans son propre microsystème afin de ne pas dépendre d'autres composants, on peut donc déclarer explicitement ce avec quoi notre programme peut intéragir.

La containerisation se rapproche de la **virtualisation** qui consiste à émuler un ordinateur dans un programme. *Cependant, les deux technologies prennent une approche très différente de la chose* : la virtualisation émule un ordinateur complet ; la containerisation ne va faire fonctionner que la partie logicielle nécessaire et pourra intéragir directement avec le noyau de notre machine au lieu de créer un noyau virtuel.

*La containerisation est donc plus légère que la virtualisation*. Ce qui en fait un candidat parfait pour isoler des applications uniques sur un système plus complet. Docker permet de configurer un container à partir d'une "**image**", une pré-configuration du système définissable dans des fichiers textuels ; il permet également **l'orchestration** de ces containeurs : la gestion de partages de fichiers entre l'hôte et le containeur, la connexion à des réseaux virtuels, la multiplication de containeurs afin de répondre à une lourde charge de travail (par exemple, monter 10 répliques d'un site web pour que plusieurs milliers d'utilisateurs puissent l'utiliser en même temps).

## [Contexte professionnel](#context)

Dans le monde des technologies de l'information, *il est de plus en plus important d'avoir une facilité de gestion des applicatifs afin de garantir le fonctionnement des services disponibles*. Des systèmes critiques comme les centres d'appels d'hôpitaux ou les applications de facturations doivent fonctionner en permanence.

*À une époque où les **services** se multiplient et les **dépendances** (logiciels supplémentaires nécessaires à l'exécution d'un programme) sont de plus en plus importantes*, il devient difficile de configurer un système avec plusieurs applications sans se heurter à des incompatibilités. C'est une des raisons qui pousse la popularité des applications web, pouvant tourner dans un navigateur, sans problèmes de compatibilités d'installations. Cependant, les serveurs qui font fonctionner ces applications doivent toujours être configurés méticuleusement pour éviter tout problème. *C'est là qu'est tout l'avantage de la containerisation avec Docker*.

On peut isoler chaque service dans son propre containeur, chaque containeur ayant une image configurée avec les dépendances qui lui sont propres, *et ainsi **automatiser** simplement et rapidement la création et le démarrage de tous les programmes nécessaires*. Si un containeur ne fonctionne plus, le travail est passé à une réplique que l'on aura pris soin d'instancier auparavant pendant que l'on redémarre le containeur en question, *opération se déroulant en quelques secondes seulement*.

## [Actualité](#news)

Il est difficile de parler *d'actualité* avec Docker. Depuis sa création en 2013, le monde de l'informatique s'est rendu compte de l'avantage qu'offre la technologie des containeurs. Ce n'est pas le premier outil qui offre ces capacités, mais c'est le premier à les rendre accessible de façon relativement simple.

Cet outil a changé la façon de penser l'infrastructure au point que l'infrastrucure de containeurs est aujourd'hui au centre d'organisations comme *Google*, *Amazon* ou *Microsoft*. Ces dernières offrent d'ailleurs des hébergements dans le **Cloud** qui proposent de gérer nos propres containeurs. Même si les statistiques sont difficiles à trouver, il suffit d'une recherche rapide pour comprendre à quel point c'est devenu vital pour le web d'aujourd'hui.

<hr>

# [Anecdotes](#stories)

Un des projets les plus parlant sur cette technologie est le premier projet **Liveboard** que j'ai créé. Je dis le premier car j'ai produit plusieurs projets Liveboard, lire l'article pour plus d'informations.

Dans ce projet, j'ai dû premièrement installer une instance de [Wordpress](https://wordpress.org) et sa base de données [MySQL](https://mysql.com) en m'inspirant de l'[exemple de la documentation Docker Compose](https://github.com/docker/awesome-compose/blob/master/official-documentation-samples/wordpress/README.md).

Ensuite, j'ai deux services qui traitent des APIs : le premier donne les statistiques du centre d'appel, le deuxième donne les statistiques de réponses aux mails. Ces deux services ont chacun leur containeur. Le service lié aux mails est lié à une base de données de cache [Redis](https://redis.io).

Voici un schéma de l'infrastructure de ce liveboard :

<figure>
  <img src="/assets/liveboard-structure2.svg" alt="Diagramme de l'infrastructure">
  <figcaption>Diagramme Plantuml de l'insfrastructure conteneurisée d'un des liveboard.</figcaption>
</figure>

[Lien vers le projet **Liveboard**](/projects/liveboard)

<b>

Un deuxième projet parlant sur cette compétence est **MICCGUI**, ce panneau d'aministration contient peu de composants (simplement un site wordpress et une base mysql) mais est tout de même intéressant.

La première chose à noter est qu'un MICCGUI doit pouvoir accéder à une instance de [Microsoft SQL Serer](https://www.microsoft.com/en-us/sql-server) qui demande des drivers spécifiques. Aucune image docker wordpress ne possède directement ces drivers, pour automatiser le processus d'installations de ces derniers il faut donc créer une image.

```docker
//Dockerfile
FROM wordpress:6.1.1-php8.1-apache

// Installation des drivers et configurations
RUN docker-ext-install ...

COPY ./wp-content ./wp-content
```

Deuxièmement, la base de donnée doit être régulièrement sauvegardée en cas de panne, d'où la présence d'un **service de backup** qui exporte la base de données régulièrement. Aussi, la base de données doit être générée à partir de l'export existant et d'une configuration spécifique. Elle nécessite donc également sa propre image.

Enfin, il est utile d'avoir des outils d'administrations sur ce type d'applications car elles utilisent fortement la base de données, donc un service d'administration tel que [PhpMyAdmin](https://www.phpmyadmin.net) est ajouté.

C'est de cette façon que nous avons notre infrastructure stable, reproduisible avec sauvegardes, tout ça grâce à une infrastructure containeurisée.

[Lien vers le projet **MICCGUI**](/projects/miccgui)

<hr>

# [Compétence](#skill)

## [Niveau](#level)

Je considère être autonome sur cette technologie. Il m'est difficile de parler de maîtrise ou d'expertise sur cette technologie car j'ai du mal à imaginer *ce que serait la maîtrise de Docker*. L'outil est relativement simple, au sens où il offre peu de fonctionnalités à apprendre si on ommet des configurations spécifiques que peu auront d'intérêt à apprendre. Je sais manipuler les containeurs, créer mes images et organiser mon infrastructure ; mais je n'apprendrais peut-être jamais à gérer le lien entre un containeur et une clé USB car je n'en aurait certainement pas l'utilité.

## [Marge de progression et contexte en fonction de la situation](#margin)

Comme dit plus haut, j'ai déjà une certaine autonomie par rapport à cette technologie. Je sais créer et manipuler des images et des containeurs. Je gère les réseaux virtuels entre ces containeurs et leurs fichiers partagés.

Même si je trouve intéressant de pouvoir paramétrer des drivers USB ou l'allocation des ressources du processeur et des cartes graphiques, je n'aurait probablement jamais de cas d'utilisation concret qui me poussera à apprendre ces particularités.

## [Importance dans mon profil par rapport à mes responsabilités](#importance)

En tant qu'ingénieur full-stack devops, il est **vital** de pouvoir maintenir une infrastructure de containeurs. Premièrement car la construction des applications doit pouvoir s'automatiser sur le plus grand nombre de systèmes et que c'est très clairement le moyen le plus simple de le faire. Mais aussi parce que la maintenance des services est également plus simple et plus rapide.

## [Vitesse d'acquisition](#acquisition)

J'ai eu quelques difficultés lors de mes premiers contacts avec la technologie en mars 2021. En effet, apprendre seul un outil de gestion d'infrastructure, en ayant aucune connaissance sur le domaine au préalable, n'est pas toujours simple. 

Mais après deux semaines d'auto-formation intensive sur les documentations j'ai réussi à créer des infrastructures fonctionnelles qui, aujourd'hui encore, supportent de nombreux services en production.

Aujourd'hui, je ne me forme plus sur la technologie car je n'en ressens pas le besoin, mais je ne suis pas contre le fait d'en suivre une si l'occasion se présente.

## [Recul sur la compétence, conseils](#step-back)

J'écris ces lignes en fin 2022, un peu moins de 2 ans après avoir découvert cette technologie. Je n'ai pas grand chose à dire en terme de recul sur la compétence.

J'ai cependant deux conseils pour ceux qui voudraient apprendre cet outil :
- N'apprenez pas seul si vous le pouvez, demandez de l'aide à des personnes qui connaissent Docker ;
- N'apprenez pas Docker purement en ligne de commande, apprenez directement avec **Docker compose** car *un fichier de configuration sera toujours plus lisible qu'une commande de 5 lignes*.

# [Avenir](#future)

## [Projet professionnel, niveau souhaité](#pro)

Je souhaite être et rester un ingénieur full-stack devops. Gérer le cycle de vie d'un logiciel de A à Z est très gratifiant.

Docker, et plus globalement la technologie des containeurs, est indispensable pour cela. Comme dit plus haut, 

## [Formations/autoformations en cours ou à venir](#training)

Je ne suis actuellement aucune formation sur cette technologie et je ne pense pas en suivre à l'avenir. Car, encore une fois, je n'ai pas de cas d'utilisation sous la main qui me pousserai à voir les derniers points spécifiques que je n'ai pas expérimenté.

