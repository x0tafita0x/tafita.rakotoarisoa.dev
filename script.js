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
      'h-tag':'Developpeur Web',
      'h-sub':'Je transforme des idees en <strong>solutions numeriques</strong> &mdash;<br>du backend robuste a l\'interface soignee.',
      'h-btn1':'Mes projets','h-btn2':'Me contacter',
      'ab-title':'Resoudre,<br>pas juste <span class="y">coder.</span>',
      'ab-p1':'Je transforme des idees en solutions numeriques. Resoudre des problemes complexes avec des solutions elegantes, c\'est ce qui me passionne.',
      'ab-p2':'Au-dela du code, je cherche a <strong>comprendre les besoins reels des utilisateurs</strong> pour creer des applications qui ont du sens et qui durent. Ma capacite d\'adaptation me permet de maitriser rapidement les outils les plus pertinents pour chaque projet.',
      'ab-p3':'Base a <strong>Antananarivo, Madagascar</strong>. Licence en Informatique obtenue en 2025. Disponible pour de nouvelles opportunites.',
      'st1':'projets<br>realises','st2':'licence<br>informatique','st3':'place<br>hackathon','st4':'langues<br>maitrisees',
      'sk-title':'Ce avec quoi<br>je <span class="y">travaille.</span>',
      'pr-title':'Ce que<br><span class="y">j\'ai construit.</span>',
      'p1-badge':'Aviation Civile de Madagascar &mdash; DSE',
      'p1-title':'Supervision de Securite Aerienne',
      'p1-desc':'Application web pour la Direction de la Supervision de Securite : gestion de facturation et suivi des paiements, calendrier reglementaire des inspections et audits, gestion des roles avec tracabilite complete des connexions et actions. Architecture Clean, tests unitaires xUnit.',
      'p2-title':'CRM Open Source',
      'p2-desc':'Reprise et amelioration d\'un CRM open source Spring Boot : module de dashboard analytique, import de donnees CSV avec validation et gestion des erreurs.',
      'p3-title':'GreenBrain',
      'p3-desc':'Application IA pour optimiser la culture de champignons &mdash; modele predictif Python base sur des facteurs environnementaux, interface web Spring Boot. 2e place, equipe de 4.',
      'p4-title':'Plateforme Crypto',
      'p4-desc':'Simulation de transactions de cryptomonnaies : API d\'identite ASP.NET pour l\'authentification, application Symfony pour la gestion des utilisateurs, transactions et suivi en temps reel des cours.',
      'edu-title':'Parcours &amp;<span class="y"><br>formations.</span>',
      'e1-deg':'Licence en Informatique',
      'e2-deg':'Advanced 2 Certificate &mdash; Anglais',
      'e3-deg':'Baccalaureat TGI',
      'ct-title':'On se<br><span class="y">parle ?</span>',
      'ct-sub':'Un projet, une opportunite, une question &mdash; je reponds rapidement. Pas de formulaire, un simple message suffit.',
      'ct-email-lbl':'Email','ct-tel-lbl':'Telephone',
      'ct-cv':'Telecharger le CV',
      'ft-status':'&#x1F7E2; Disponible pour de nouvelles opportunites'
    },
    en: {
      'nl-about':'About','nl-skills':'Stack','nl-proj':'Work','nl-edu':'Education','nl-contact':'Contact',
      'nl2-about':'About','nl2-skills':'Stack','nl2-proj':'Work','nl2-edu':'Education','nl2-contact':'Contact',
      'h-tag':'Web Developer',
      'h-sub':'I turn ideas into <strong>digital solutions</strong> &mdash;<br>from solid backend to polished interface.',
      'h-btn1':'My work','h-btn2':'Get in touch',
      'ab-title':'Solve problems,<br>not just <span class="y">write code.</span>',
      'ab-p1':'I turn ideas into digital solutions. Solving complex problems with elegant answers is what drives me.',
      'ab-p2':'Beyond the code, I focus on <strong>understanding real user needs</strong> to build applications that make sense and stand the test of time. I adapt quickly and pick up the right tools for each project.',
      'ab-p3':'Based in <strong>Antananarivo, Madagascar</strong>. BSc in Computer Science, 2025. Open to new opportunities.',
      'st1':'projects<br>built','st2':'BSc<br>comp. sci.','st3':'hackathon<br>placement','st4':'languages<br>spoken',
      'sk-title':'What I<br><span class="y">work with.</span>',
      'pr-title':'Things<br><span class="y">I\'ve built.</span>',
      'p1-badge':'Aviation Civile de Madagascar &mdash; DSE',
      'p1-title':'Aviation Safety Supervision',
      'p1-desc':'Web app for the Aviation Safety Supervision Directorate: billing and payment tracking, regulatory inspection/audit calendar, role-based user management with full connection and action traceability. Clean Architecture, xUnit unit tests.',
      'p2-title':'Open Source CRM',
      'p2-desc':'Forked and improved a Spring Boot open source CRM: built an analytics dashboard module and a CSV import feature with validation and error handling.',
      'p3-title':'GreenBrain',
      'p3-desc':'AI app to optimize mushroom cultivation &mdash; Python predictive model based on environmental factors, Spring Boot web interface. 2nd place at Redshalk Hackathon, team of 4.',
      'p4-title':'Crypto Platform',
      'p4-desc':'Cryptocurrency transaction simulator: ASP.NET identity API for authentication, Symfony app for user management, transactions, and real-time price tracking.',
      'edu-title':'Education &amp;<span class="y"><br>training.</span>',
      'e1-deg':'BSc in Computer Science',
      'e2-deg':'Advanced 2 Certificate &mdash; English',
      'e3-deg':'Baccalaureat TGI',
      'ct-title':'Let\'s<br><span class="y">talk.</span>',
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