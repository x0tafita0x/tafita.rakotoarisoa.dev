(function() {
  /* email assemble en JS - jamais ecrit en clair dans le HTML */
  var u = 'rrtafita', d = 'gmail' + '.com';
  var el = document.getElementById('email-link');
  var ev = document.getElementById('email-val');
  if (el) { el.href = 'mai' + 'lto:' + u + '@' + d; }
  if (ev) { ev.textContent = u + '@' + d; }

  var T = {
    fr: {
      'nl-about':'A propos','nl-skills':'Stack','nl-proj':'Projets','nl-edu':'Formation','nl-contact':'Contact',
      'nl2-about':'A propos','nl2-skills':'Stack','nl2-proj':'Projets','nl2-edu':'Formation','nl2-contact':'Contact',
      'h-tag':'Développeur Web',
      'h-sub':'Je transforme des idées en <strong>solutions numériques</strong> &mdash;<br>du backend robuste à l\'interface soignée.',
      'h-btn1':'Mes projets','h-btn2':'Me contacter',
      'ab-title':'Résoudre les défis,<br>au-delà du simple <span class="y">codage.</span>',
      'ab-p1':'Je transforme des idées en solutions numériques. Résoudre des problèmes complexes avec des solutions élégantes, c\'est ce qui me passionne.',
      'ab-p2':'Au-delà du code, je cherche à <strong>comprendre les besoins réels des utilisateurs</strong> pour créer des applications qui ont du sens et qui durent. Ma capacité d\'adaptation me permet de maîtriser rapidement les outils les plus pertinents pour chaque projet.',
      'ab-p3':'Basé à <strong>Antananarivo, Madagascar</strong>. Licence en Informatique obtenue en 2025. Disponible pour de nouvelles opportunités.',
      'st1':'projets<br>réalisés','st2':'licence<br>informatique','st3':'place<br>hackathon','st4':'langues<br>maîtrisées',
      'sk-title':'Technologies et outils<br>que j\'<span class="y">utilise.</span>',
      'pr-title':'Projets que j\'ai<br><span class="y">développés.</span>',
      'p1-badge':'Aviation Civile de Madagascar &mdash; DSE',
      'p1-title':'Supervision de Sécurité Aérienne',
      'p1-desc':'Application web complète développée lors de mon stage à l\'Aviation Civile de Madagascar. Elle centralise la gestion administrative de la DSE : facturation des compagnies aériennes avec suivi des paiements, calendrier interactif pour planifier les inspections et audits réglementaires, gestion fine des utilisateurs et de leurs rôles. Chaque connexion et chaque action est enregistrée dans un historique de traçabilité. Architecture Clean en backend ASP.NET, Angular en frontend, SQL Server pour la persistance. Tests unitaires xUnit couvrant les services métiers critiques.',
      'p2-title':'CRM Open Source',
      'p2-desc':'Reprise d\'un CRM open source existant sous Spring Boot pour y ajouter deux modules manquants. Un dashboard analytique avec indicateurs clés (activité récente, évolution des contacts, taux de conversion). Un système d\'import CSV qui charge des données en masse, valide chaque ligne indépendamment et remonte les erreurs précisément à l\'utilisateur sans bloquer les lignes valides.',
      'p3-title':'GreenBrain',
      'p3-desc':'Projet réalisé en équipe de 4 (3 devs + 1 agripreneur) au hackathon Redshalk 2024, 2e place. Objectif : aider les cultivateurs de champignons à optimiser leurs conditions de pousse. J\'ai conçu un modèle prédictif en Python qui analyse température, humidité et CO2 pour recommander des ajustements en temps réel. L\'interface Spring Boot visualise les mesures et déclenche des alertes quand les seuils sont franchis.',
      'p4-title':'Plateforme Crypto',
      'p4-desc':'Plateforme de simulation de trading crypto développée en contexte académique, architecturée en deux parties indépendantes. Une API d\'identité en ASP.NET (C#) qui gère l\'inscription, la connexion et les tokens JWT. Une application web Symfony qui consomme cette API : les utilisateurs peuvent simuler des achats et ventes de cryptomonnaies, consulter leur portefeuille en temps réel et suivre l\'évolution des cours.',
      'edu-title':'Mon parcours<br>et mes <span class="y">formations.</span>',
      'e1-deg':'Licence en Informatique',
      'e2-deg':'Advanced 2 Certificate &mdash; Anglais',
      'e3-deg':'Baccalauréat TGI',
      'ct-title':'Échangeons<br><span class="y">ensemble.</span>',
      'ct-sub':'Un projet, une opportunité, une question &mdash; je réponds rapidement. Pas de formulaire, un simple message suffit.',
      'ct-email-lbl':'Email','ct-tel-lbl':'Telephone',
      'ct-cv':'Télécharger le CV',
      'ft-status':'&#x1F7E2; Disponible pour de nouvelles opportunités'
    },
    en: {
      'nl-about':'About','nl-skills':'Stack','nl-proj':'Work','nl-edu':'Education','nl-contact':'Contact',
      'nl2-about':'About','nl2-skills':'Stack','nl2-proj':'Work','nl2-edu':'Education','nl2-contact':'Contact',
      'h-tag':'Web Developer',
      'h-sub':'I turn ideas into <strong>digital solutions</strong> &mdash;<br>from solid backend to polished interface.',
      'h-btn1':'My work','h-btn2':'Get in touch',
      'ab-title':'Solving challenges,<br>beyond mere <span class="y">coding.</span>',
      'ab-p1':'I turn ideas into digital solutions. Solving complex problems with elegant answers is what drives me.',
      'ab-p2':'Beyond the code, I focus on <strong>understanding real user needs</strong> to build applications that make sense and stand the test of time. I adapt quickly and pick up the right tools for each project.',
      'st1':'projects<br>built','st2':'BSc<br>comp. sci.','st3':'hackathon<br>placement','st4':'languages<br>spoken',
      'sk-title':'Technologies and tools<br>I <span class="y">use.</span>',
      'pr-title':'Projects I\'ve<br><span class="y">developed.</span>',
      'p1-badge':'Aviation Civile de Madagascar &mdash; DSE',
      'p1-title':'Aviation Safety Supervision',
      'p1-desc':'Full web application built during my internship at Aviation Civile de Madagascar. It centralizes the administrative management of the DSE: billing airlines and tracking payments, an interactive calendar for scheduling regulatory inspections and audits, fine-grained user and role management. Every login and action is recorded in a complete audit trail. Clean Architecture backend in ASP.NET, Angular frontend, SQL Server database. xUnit unit tests covering the critical business services.',
      'p2-title':'Open Source CRM',
      'p2-desc':'Forked an existing Spring Boot open source CRM and added two missing modules. An analytics dashboard showing key metrics (recent activity, contact growth, conversion rates). A CSV bulk import system that validates each row independently and reports errors back to the user precisely, without blocking the valid rows.',
      'p3-title':'GreenBrain',
      'p3-desc':'Built in a team of 4 (3 devs + 1 agripreneur) at the Redshalk 2024 hackathon, 2nd place. Goal: help mushroom growers optimize their cultivation conditions. I designed a Python predictive model that analyzes temperature, humidity and CO2 to recommend real-time adjustments. The Spring Boot interface visualizes live sensor data and triggers alerts when thresholds are exceeded.',
      'p4-title':'Crypto Platform',
      'p4-desc':'Crypto trading simulation platform built for an academic project, split into two independent parts. An ASP.NET (C#) identity API handling registration, login and JWT tokens. A Symfony web app that consumes this API: users can simulate buying and selling cryptocurrencies, view their portfolio, and track live price movements.',
      'edu-title':'My educational<br><span class="y">background.</span>',
      'e1-deg':'BSc in Computer Science',
      'e2-deg':'Advanced 2 Certificate &mdash; English',
      'e3-deg':'Baccalaureat TGI',
      'ct-title':'Let\'s<br><span class="y">connect.</span>',
      'ct-sub':'A project, an opportunity, a question &mdash; I reply quickly. No form needed, just send a message.',
      'ct-email-lbl':'Email','ct-tel-lbl':'Phone',
      'ct-cv':'Download Resume',
      'ft-status':'&#x1F7E2; Open to new opportunities'
    }
  };

  window.setLang = function(l) {
    var t = T[l];
    document.querySelectorAll('.lang-switch button').forEach(function(b) {
      b.classList.toggle('on', b.textContent === l.toUpperCase());
    });
    Object.keys(t).forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.innerHTML = t[id];
    });
  };

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.r').forEach(function(el) { obs.observe(el); });

  window.setLang('fr');
})();