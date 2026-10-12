(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const projects = {
    timetable: {
      title: 'AI-Based Timetable Generator',
      intro: 'A team-built academic scheduling application, designed around faculty availability, room capacity, and batch allocation.',
      sections: [
        ['User-facing workflow', 'Dynamic department and year dropdowns support selection before timetable generation. Import and export features support CSV, XLSX and PDF workflows.'],
        ['My contribution', 'Built UI enhancements and selection workflows, contributed to import/export features, and integrated an LLM with basic NLP to parse scheduling constraints and explain the timetable through a chatbot.'],
        ['Technical foundation', 'Python (Flask), JavaScript, HTML/CSS, Bootstrap, DuckDB, and OpenAI/Gemini APIs.'],
        ['Design focus', 'Making complex scheduling inputs easier to navigate while keeping constraints visible. The visual on this page is a recreated concept, not a screenshot of the submitted application.']
      ]
    },
    placement: {
      title: 'Student Placement Prediction',
      intro: 'A Streamlit application that predicts placement outcomes from academic and training data.',
      sections: [
        ['Interface', 'Designed a report-card-style UI, with a placement probability gauge and radar chart comparing a student’s profile against cohort medians.'],
        ['Model workflow', 'Used Stratified K-Fold cross-validation and F1-optimized threshold tuning. No measured accuracy or UX results have been added to this portfolio.'],
        ['Design focus', 'Presenting a prediction alongside context, so it is read as a model estimate rather than a guaranteed outcome.'],
        ['Technical foundation', 'Python, Streamlit and Scikit-learn. The chart on the portfolio is illustrative.']
      ]
    },
    roommate: {
      title: 'Roommate Finder',
      intro: 'A full-stack platform for people looking to share an apartment or find a compatible roommate.',
      sections: [
        ['User-facing workflow', 'User authentication and profile management connect to a compatibility questionnaire covering budget, location, and lifestyle preferences.'],
        ['My contribution', 'Owned frontend and backend development, designed the questionnaire, and built matching logic to pair compatible profiles.'],
        ['Design focus', 'Organising several personal preferences into a usable profile and matching flow.'],
        ['Technical foundation', 'PHP, HTML, CSS, JavaScript and MySQL. A public repository link was not supplied in the résumé.']
      ]
    },
    interview: {
      title: 'AI-Based Interview Platform',
      intro: 'A full-stack platform for candidate practice and recruiter-scheduled interviews, with configurable subjects, difficulty and question count.',
      sections: [
        ['My contribution', 'Led frontend and backend development using AI coding assistants, collaborating with teammates on ML/NLP components.'],
        ['User-facing features', 'GPT-generated questions and evaluation, a resume parser for skill-specific questions, and webcam-based facial emotion classification using a CNN trained on RAF-DB.'],
        ['Design consideration', 'Facial emotion estimates are uncertain and should not be treated as reliable measures of competence or hiring suitability.'],
        ['Technical foundation', 'React, JavaScript, Python, HTML/CSS, OpenAI GPT API and CNN components.']
      ]
    },
    finance: {
      title: 'Personal Finance Management Dashboard',
      intro: 'An interactive dashboard for exploring spending, budgets and financial trends.',
      sections: [
        ['My contribution', 'Built dynamic charts and visualisations with a focus on frontend architecture and data visualisation components, using AI coding assistants during development.'],
        ['Design focus', 'Turning financial records into an interface that can be explored visually. The portfolio artwork is a concept, not a screenshot or actual financial data.'],
        ['Technical foundation', 'JavaScript, React and HTML/CSS. A public repository link was not supplied in the résumé.']
      ]
    }
  };
  const dialog=$('project-dialog');let trigger=null;
  document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
    const project=projects[button.dataset.project];if(!project)return;
    trigger=button;$('dialog-title').textContent=project.title;$('dialog-intro').textContent=project.intro;
    const content=$('dialog-content');content.replaceChildren();
    project.sections.forEach(([heading,body])=>{const section=document.createElement('section'),h=document.createElement('h3'),p=document.createElement('p');h.textContent=heading;p.textContent=body;section.append(h,p);content.append(section);});
    dialog.showModal();dialog.scrollTop=0;document.body.classList.add('dialog-open');$('close-dialog').focus();
  }));
  $('close-dialog').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close();});
  dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');trigger?.focus();});
  const moods={garden:'Rose Garden · flowers blooming across the page',coast:'Seaside Morning · shells, sand and gentle moving water',peach:'Apricot Afternoon · warm colours and drifting autumn leaves'};
  const themeCopy={garden:['petal.','bloom.','#244c3d'],coast:['tidal.','breathe.','#284d5b'],peach:['amber.','wander.','#683e2b']};
  function setTheme(theme, persist=false) {
    if(!Object.prototype.hasOwnProperty.call(moods,theme)) theme='garden';
    document.documentElement.dataset.theme=theme;
    document.querySelector('.studio-preview').dataset.theme=theme;
    document.querySelectorAll('[data-palette]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.palette===theme)));
    $('palette-status').textContent=moods[theme];
    $('theme-brand').textContent=themeCopy[theme][0];
    const headline=$('theme-headline');headline.replaceChildren(document.createTextNode('Room to'),document.createElement('br'));
    const emphasis=document.createElement('em');emphasis.textContent=themeCopy[theme][1];headline.append(emphasis);
    document.querySelector('meta[name="theme-color"]').setAttribute('content',themeCopy[theme][2]);
    if(persist){try{localStorage.setItem('sakshi-portfolio-theme',theme);}catch{/* Storage can be blocked; the theme still works for this visit. */}}
  }
  let initialTheme='garden';try{initialTheme=localStorage.getItem('sakshi-portfolio-theme')||'garden';}catch{}
  setTheme(initialTheme);
  document.querySelectorAll('[data-palette]').forEach(button=>button.addEventListener('click',()=>setTheme(button.dataset.palette,true)));
  let saved=false;
  $('sample-button').setAttribute('aria-pressed','false');
  $('sample-button').addEventListener('click',()=>{
    saved=!saved;$('sample-button').setAttribute('aria-pressed',String(saved));
    $('sample-button').textContent=saved?'Inspiration saved ♥':'Save a little inspiration ♡';
    $('save-status').textContent=saved?'A small moment, kept for this visit.':'A tiny interaction to try.';
  });
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');let paused=preference.matches;
  function motion(){document.body.classList.toggle('paused',paused);$('motion-toggle').textContent=paused?'Resume motion ▷':'Pause motion Ⅱ';$('motion-toggle').setAttribute('aria-pressed',String(paused));}
  $('motion-toggle').addEventListener('click',()=>{paused=!paused;motion();});
  preference.addEventListener('change',e=>{paused=e.matches;motion();});
  document.addEventListener('visibilitychange',()=>document.body.classList.toggle('paused',paused||document.hidden));
  $('year').textContent=new Date().getFullYear();motion();
})();
