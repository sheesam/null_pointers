/**
 * DÉLICE ATELIER DE STYLING & COUTURE
 * Application Interactivity & State Management (English Default)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTranslations();
  initModals();
  initSoundAtmosphere();
  initLookbookFilter();
  initCareersForm();
  initStatsCounter();
  initMobileMenu();
  initAppointmentForm();
  initSpecialButtons();
});

/* ----------------------------------------------------
   1. TRANSLATION DICTIONARY (EN Default & FR Available)
---------------------------------------------------- */
const translations = {
  en: {
    'nav.tagline': 'Styling & Atelier 1970',
    'nav.collections': 'The Collections',
    'nav.rituals': 'Daily Pleasures',
    'nav.suites': 'Private Suites',
    'nav.careers': 'Careers',
    'nav.visit': 'The Atelier',
    'btn.quiz': '✦ Style Diagnostic',
    'btn.book': 'Book Appointment',
    'hero.badge': 'Couture & Styling since 1970',
    'hero.title_part1': 'The art of wardrobe,',
    'hero.title_part2': 'the daring of style.',
    'hero.desc': 'In the heart of Lévis, blending warmth, grandeur, and welcoming vibes in a vibrant atmosphere. Discover our bespoke silhouettes, mild organic fabrics, and personalized styling guidance.',
    'hero.btn_collections': 'Explore Collections',
    'hero.btn_quiz': 'Take Silhouette Quiz',
    'hero.strip_label': 'Weekly Specials & Daily Rituals',
    'hero.badge_top_title': 'Bespoke Styling',
    'hero.badge_top_sub': 'Pure fibers & architectural tailoring',
    'hero.badge_bot_title': 'VIP Suite Open',
    'hero.badge_bot_sub': 'Welcome bubbles & concierge service',
    'philo.eyebrow': 'The Wardrobe Philosophy',
    'philo.title': 'A Choice for Every Silhouette',
    'philo.desc': 'World textures, pure textiles, and garments designed to elevate your everyday glow. For early birds, our Breakfast Capsule consultations await fresh, diverse, and colorful.',
    'philo.card1_title': 'Mild & Responsible Fabrics',
    'philo.card1_desc': 'Organic washed linen, delicate combed wool, and textured silks in soothing pastel and earth tones that respect your skin and freedom of movement.',
    'philo.card1_link': 'Explore Fabrics',
    'philo.card2_title': 'Architectural Cuts & Ease',
    'philo.card2_desc': 'A subtle balance of relaxed modernity and tailored precision. Our structured jackets and fluid trousers effortlessly flatter every silhouette.',
    'philo.card2_link': 'View Silhouettes',
    'philo.card3_title': 'Private Styling Sessions',
    'philo.card3_desc': 'Our stylists guide you without pressure to build your seasonal capsule or prepare for an event in the plush intimacy of our private suites.',
    'philo.card3_link': 'Discover Suites',
    'rituals.eyebrow': 'Daily Pleasures',
    'rituals.title': 'Your Weekly Styling Rituals',
    'rituals.desc': 'Every day has its signature charm. From Happy Hour styling to wine & fitting nights, enjoy the Délice experience with our daily perks.',
    'rituals.item1_title': 'Happy Hour Styling',
    'rituals.item1_punchline': 'Your late afternoons, elevated.',
    'rituals.item1_desc': 'Express silhouette consultation and personalized accessorizing with a signature complimentary drink in our lounge.',
    'rituals.item2_title': 'Lunch Specials',
    'rituals.item2_punchline': 'Lunch break, at friendly prices.',
    'rituals.item2_desc': 'Our "30-Minute Express Look": 3 coordinated outfits ready to try on upon your arrival with zero waiting.',
    'rituals.item3_title': 'Archival Vintage Tuesdays',
    'rituals.item3_punchline': 'Crisp, golden, irresistible.',
    'rituals.item3_desc': 'Exclusive drop of our restored 70s and 80s vintage finds, oversized blazers, and timeless trench coats at gentle prices.',
    'rituals.item4_title': 'Wednesdélice Concierge',
    'rituals.item4_punchline': 'On Wednesdays, we think style.',
    'rituals.item4_desc': '20% off styled home delivery and private courier try-ons to bring home your favorite looks.',
    'rituals.item5_title': 'Adjustments & Unlimited Fitting',
    'rituals.item5_punchline': 'A classic with no limits.',
    'rituals.item5_desc': 'Our master tailors provide complimentary hem adjustments, shaping, and sleeve alterations on all pieces from our collection.',
    'rituals.item6_title': 'Wine Tasting & VIP Suites',
    'rituals.item6_punchline': 'All our private suites, at half price.',
    'rituals.item6_desc': 'Half-price private styling suite rentals paired with curated wine tastings for an unforgettable evening with friends.',
    'stats.stat1_title': 'Passionate Artisans',
    'stats.stat1_sub': 'Stylists, patternmakers & consultants',
    'stats.stat2_title': 'Founding Year',
    'stats.stat2_sub': 'Over 50 years of sartorial heritage',
    'stats.stat3_title': 'Wardrobes Curated',
    'stats.stat3_sub': 'Bespoke capsules each fashion season',
    'stats.stat4_title': 'Partner Designers',
    'stats.stat4_sub': 'Ethical textiles sourced worldwide',
    'lookbook.eyebrow': 'The Lookbook',
    'lookbook.title': 'Current Collections',
    'lookbook.desc': 'Gentle hues, relaxed cuts, and contemporary touches tailored to be mixed and matched effortlessly.',
    'suites.eyebrow': 'Exclusive Experience',
    'suites.title': 'Private Suites & VIP Fitting',
    'suites.desc': 'Experience an intimate wardrobe transformation. Our private rooms welcome personal fittings, event preparations, or group styling sessions in a serene atmosphere.',
    'suites.btn': 'Reserve a Private Suite',
    'careers.eyebrow': 'Open Positions',
    'careers.title': 'We Are Hiring — Délice Atelier',
    'careers.desc': 'Join an inspired team of over 160 fashion professionals, tailors, and hosts in downtown Lévis.',
    'visit.eyebrow': 'The Atelier & Lounge',
    'visit.title': 'Visit Délice Atelier',
    'visit.desc': 'Located in the heart of downtown Lévis, right near the Convention Center and highway, ideal for travelers and hotel guests with ample free private parking and valet service.',
    'visit.address_lbl': 'Address',
    'visit.phone_lbl': 'Phone',
    'visit.hours_lbl': 'Atelier Hours',
    'visit.hours_note': 'Please check Google hours during statutory holidays or festive seasons.',
    'visit.open_now': 'Currently Open',
    'visit.email_lbl': 'Email'
  },
  fr: {
    'nav.tagline': 'Styling & Atelier 1970',
    'nav.collections': 'Les collections',
    'nav.rituals': 'Plaisirs du jour',
    'nav.suites': 'Salons privés',
    'nav.careers': 'On recrute',
    'nav.visit': "L'Atelier",
    'btn.quiz': '✦ Diagnostic Style',
    'btn.book': 'Prendre RDV',
    'hero.badge': 'Couture & Styling depuis 1970',
    'hero.title_part1': "L'art du vestiaire,",
    'hero.title_part2': "l'audace du style.",
    'hero.desc': "Au cœur de Lévis, alliant chaleur, grandeur et convivialité dans une ambiance vibrante et accueillante. Découvrez nos silhouettes sur mesure, nos étoffes douces et nos conseils de style personnalisés.",
    'hero.btn_collections': 'Découvrir les Collections',
    'hero.btn_quiz': 'Faire le test Morpho-Style',
    'hero.strip_label': 'Spéciaux & Privilèges de la semaine',
    'hero.badge_top_title': 'Styling Sur Mesure',
    'hero.badge_top_sub': 'Matières pures & coupes architecturales',
    'hero.badge_bot_title': 'Salon Privé VIP Ouvert',
    'hero.badge_bot_sub': 'Coupe de bienvenue & conciergerie',
    'philo.eyebrow': 'Le vestiaire Délice',
    'philo.title': 'Un choix pour tous les goûts',
    'philo.desc': "Des textures du monde, des ingrédients nobles et des pièces pensées pour vous sublimer au quotidien. Pour les lève-tôt, nos consultations 'Capsule Déjeuner' vous attendent fraîches, variées et colorées.",
    'philo.card1_title': 'Étoffes Douces & Responsables',
    'philo.card1_desc': 'Lin lavé biologique, laines peignées délicates et soies texturées. Des matières respirantes aux teintes pastel et terreuses.',
    'philo.card1_link': 'Explorer les matières',
    'philo.card2_title': 'Coupes Architecturales & Confort',
    'philo.card2_desc': 'Un équilibre subtil entre décontraction contemporaine et rigueur tailleur. Nos vestes et pantalons s’adaptent à toutes les morphologies.',
    'philo.card2_link': 'Voir les silhouettes',
    'philo.card3_title': 'Accompagnement & Styling Privé',
    'philo.card3_desc': 'Nos stylistes vous guident sans pression pour composer votre capsule saisonnière dans le confort intime de nos salons feutrés.',
    'philo.card3_link': 'Découvrir les salons',
    'rituals.eyebrow': 'Plaisirs du jour',
    'rituals.title': 'Vos rendez-vous de la semaine',
    'rituals.desc': "Chaque moment a sa signature. Du Happy Hour styling aux sessions vin & dressing, vivez l'expérience Délice au rythme de nos privilèges quotidiens.",
    'rituals.item1_title': 'Happy Hour Styling',
    'rituals.item1_punchline': 'Vos fins d’après-midi, rehaussées.',
    'rituals.item1_desc': 'Consultation express de silhouette et accessoirisation personnalisée accompagnée d\'un rafraîchissement signature dans notre lounge.',
    'rituals.item2_title': 'Spéciaux du midi',
    'rituals.item2_punchline': 'Pause lunch, à petit prix.',
    'rituals.item2_desc': 'Notre formule "Look Express 30 minutes" : sélection de 3 tenues coordonnées prêtes à essayer dès votre arrivée, sans attente.',
    'rituals.item3_title': 'Mardi Pièces d\'Archive',
    'rituals.item3_punchline': 'Croustillant, doré, irrésistible.',
    'rituals.item3_desc': 'Déballage exclusif de nos trouvailles vintage 70s et 80s restaurées, blazers oversize et trenchs intemporels à prix doux.',
    'rituals.item4_title': 'Mercredélice Conciergerie',
    'rituals.item4_punchline': 'Le mercredi, on pense allure.',
    'rituals.item4_desc': '20 % de rabais en livraison stylée à domicile et essayage avec coursier privé pour emporter vos coups de cœur.',
    'rituals.item5_title': 'Ajustements & Retouches',
    'rituals.item5_punchline': 'Un classique sans limite.',
    'rituals.item5_desc': 'Nos maîtres-tailleurs ajustent gratuitement vos ourlets, cintres et manches sur toutes les pièces acquises dans nos collections.',
    'rituals.item6_title': 'Dégustation & Salons Privés',
    'rituals.item6_punchline': 'Toutes nos suites, à moitié prix.',
    'rituals.item6_desc': 'Accès aux salons de styling privés à demi-tarif avec dégustation de cépages sélectionnés pour une soirée entre amis inoubliable.',
    'stats.stat1_title': 'Passionnés dans l’équipe',
    'stats.stat1_sub': 'Stylistes, modélistes & conseillers',
    'stats.stat2_title': 'Année de fondation',
    'stats.stat2_sub': 'Plus de 50 ans de savoir-faire',
    'stats.stat3_title': 'Garde-robes composées',
    'stats.stat3_sub': 'Vestiaires sur mesure chaque saison',
    'stats.stat4_title': 'Créateurs partenaires',
    'stats.stat4_sub': 'Matières éthiques à travers le monde',
    'lookbook.eyebrow': 'Le Lookbook',
    'lookbook.title': 'Collections Actuelles',
    'lookbook.desc': 'Des silhouettes douces, des coupes décontractées et des touches contemporaines uniques conçues pour être combinées à l’infini.',
    'suites.eyebrow': 'Expérience Exclusive',
    'suites.title': 'Salons Privés & Suites VIP',
    'suites.desc': 'Vivez un moment de métamorphose intime. Nos salons particuliers sont conçus pour accueillir vos essayages personnels ou séances styling entre amis.',
    'suites.btn': 'Réserver un Salon Privé',
    'careers.eyebrow': 'Les postes à combler',
    'careers.title': 'On engage — Délice Atelier',
    'careers.desc': "Rejoignez une équipe de plus de 160 passionnés du vêtement, de la coupe et de l'accueil bienveillant au centre de Lévis.",
    'visit.eyebrow': 'Le restaurant & Le Studio',
    'visit.title': "Venir à l'Atelier Délice",
    'visit.desc': "Situé au cœur du centre-ville de Lévis, tout près du Centre des congrès, l'Atelier Délice est à deux pas de l’autoroute, idéal pour les voyageurs. Nous sommes également à proximité de tous les grands hôtels et facilement accessibles à pied, en vélo ou en voiture grâce à notre vaste stationnement gratuit.",
    'visit.address_lbl': 'Adresse',
    'visit.phone_lbl': 'Téléphone',
    'visit.hours_lbl': "Horaires de l'atelier",
    'visit.hours_note': 'Veuillez vérifier les horaires sur Google en cas de jours fériés ou de périodes festives.',
    'visit.open_now': 'Ouvert actuellement',
    'visit.email_lbl': 'Courriel'
  }
};

let currentLang = 'en'; // Default language is English

function initTranslations() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      if (selected === currentLang) return;
      currentLang = selected;
      
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      applyLanguage(currentLang);
      showToast(currentLang === 'en' ? 'Language: English' : 'Langue : Français');
    });
  });
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.documentElement.lang = lang;
}

/* ----------------------------------------------------
   2. AMBIENT CHIC SOUND SYNTHESIZER (Web Audio API)
---------------------------------------------------- */
let audioCtx = null;
let isPlayingSound = false;
let ambientNodes = [];

function initSoundAtmosphere() {
  const soundBtn = document.getElementById('sound-toggle');
  const soundBars = document.getElementById('sound-bars');
  const soundLabel = document.getElementById('sound-label');

  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isPlayingSound) {
      startAmbientPad();
      isPlayingSound = true;
      soundBars.classList.add('playing');
      soundLabel.textContent = currentLang === 'en' ? 'Lounge On' : 'Ambiance On';
      showToast(currentLang === 'en' ? '♫ Ambient lounge mood active' : '♫ Ambiance sonore lounge activée');
    } else {
      stopAmbientPad();
      isPlayingSound = false;
      soundBars.classList.remove('playing');
      soundLabel.textContent = 'Lounge';
      showToast(currentLang === 'en' ? 'Ambient sound paused' : 'Ambiance sonore en pause');
    }
  });
}

function startAmbientPad() {
  if (!audioCtx) return;

  // Gentle, soothing Fmaj9 jazz atelier harmony (F3, A3, C4, E4, G4)
  const freqs = [174.61, 220.00, 261.63, 329.63, 392.00];
  
  const masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(0.06, audioCtx.currentTime);
  
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(450, audioCtx.currentTime);

  filter.connect(masterGain);
  masterGain.connect(audioCtx.destination);

  ambientNodes = freqs.map((freq, i) => {
    const osc = audioCtx.createOscillator();
    const oscGain = audioCtx.createGain();

    osc.type = i % 2 === 0 ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    lfo.frequency.setValueAtTime(0.2 + (i * 0.05), audioCtx.currentTime);
    lfoGain.gain.setValueAtTime(1.5, audioCtx.currentTime);
    lfo.connect(osc.frequency);
    lfo.start();

    oscGain.gain.setValueAtTime(0.015, audioCtx.currentTime);
    osc.connect(oscGain);
    oscGain.connect(filter);
    osc.start();

    return { osc, lfo };
  });
}

function stopAmbientPad() {
  ambientNodes.forEach(node => {
    try {
      node.osc.stop();
      node.lfo.stop();
    } catch (e) {}
  });
  ambientNodes = [];
}

/* ----------------------------------------------------
   3. MODAL MANAGEMENT (Booking & Quiz)
---------------------------------------------------- */
function initModals() {
  // Booking modal
  const bookingModal = document.getElementById('booking-modal');
  const openBookingBtn = document.getElementById('open-booking-btn');
  const openSuiteBtn = document.getElementById('open-suite-modal-btn');
  const closeBookingBtn = document.getElementById('close-booking-btn');

  const openBooking = () => {
    bookingModal.classList.add('open');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateInput = document.getElementById('book-date');
    if (dateInput && !dateInput.value) {
      dateInput.value = tomorrow.toISOString().split('T')[0];
    }
  };

  if (openBookingBtn) openBookingBtn.addEventListener('click', openBooking);
  if (openSuiteBtn) openSuiteBtn.addEventListener('click', () => {
    const serviceSelect = document.getElementById('book-service');
    if (serviceSelect) serviceSelect.value = 'salon-vip';
    openBooking();
  });
  if (closeBookingBtn) closeBookingBtn.addEventListener('click', () => bookingModal.classList.remove('open'));

  // Quiz modal
  const quizModal = document.getElementById('quiz-modal');
  const openQuizBtn = document.getElementById('open-quiz-btn');
  const heroQuizCta = document.getElementById('hero-quiz-cta');
  const closeQuizBtn = document.getElementById('close-quiz-btn');

  const openQuiz = () => quizModal.classList.add('open');
  if (openQuizBtn) openQuizBtn.addEventListener('click', openQuiz);
  if (heroQuizCta) heroQuizCta.addEventListener('click', openQuiz);
  if (closeQuizBtn) closeQuizBtn.addEventListener('click', () => quizModal.classList.remove('open'));

  // Close modals on backdrop click or Escape key
  [bookingModal, quizModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      bookingModal.classList.remove('open');
      quizModal.classList.remove('open');
    }
  });

  // Quiz Step Logic
  const optButtons = document.querySelectorAll('.quiz-opt-btn');
  optButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentStep = btn.closest('.quiz-step');
      if (currentStep.id === 'quiz-step-1') {
        document.getElementById('quiz-step-1').classList.remove('active');
        document.getElementById('quiz-step-2').classList.add('active');
      } else if (currentStep.id === 'quiz-step-2') {
        document.getElementById('quiz-step-2').classList.remove('active');
        document.getElementById('quiz-step-3').classList.add('active');
      }
    });
  });

  const quizRestartBtn = document.getElementById('quiz-restart-btn');
  if (quizRestartBtn) {
    quizRestartBtn.addEventListener('click', () => {
      document.getElementById('quiz-step-3').classList.remove('active');
      document.getElementById('quiz-step-1').classList.add('active');
    });
  }

  const quizBookResultBtn = document.getElementById('quiz-book-result-btn');
  if (quizBookResultBtn) {
    quizBookResultBtn.addEventListener('click', () => {
      quizModal.classList.remove('open');
      openBooking();
      const notes = document.getElementById('book-notes');
      if (notes) {
        notes.value = currentLang === 'en' 
          ? 'Recommended Profile: Lavender Orchid & Powder Rose Allure' 
          : 'Sélection recommandée : Élégance Orchidée Lavande & Rose Poudré';
      }
    });
  }
}

/* ----------------------------------------------------
   4. LOOKBOOK FILTERING & TRY-ON
---------------------------------------------------- */
function initLookbookFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.lookbook-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Lookbook "Try in salon" button trigger
  document.querySelectorAll('.lookbook-try-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lookTitle = btn.getAttribute('data-look');
      const bookingModal = document.getElementById('booking-modal');
      const notes = document.getElementById('book-notes');
      if (notes) {
        notes.value = currentLang === 'en' 
          ? `Requested fitting: ${lookTitle}` 
          : `Essayage demandé : ${lookTitle}`;
      }
      bookingModal.classList.add('open');
    });
  });
}

/* ----------------------------------------------------
   5. SPECIALS / RITUALS BUTTON TRIGGER
---------------------------------------------------- */
function initSpecialButtons() {
  document.querySelectorAll('.book-special-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const special = btn.getAttribute('data-special');
      const bookingModal = document.getElementById('booking-modal');
      const serviceSelect = document.getElementById('book-service');
      const notes = document.getElementById('book-notes');

      if (special.includes('Happy Hour')) {
        serviceSelect.value = 'happy-hour';
      } else if (special.includes('Lunch') || special.includes('midi')) {
        serviceSelect.value = 'express-midi';
      } else if (special.includes('Price') || special.includes('Salons')) {
        serviceSelect.value = 'salon-vip';
      } else if (special.includes('Vintage')) {
        serviceSelect.value = 'mardi-vintage';
      }

      if (notes) {
        notes.value = currentLang === 'en' 
          ? `Booking for ritual: ${special}` 
          : `Réservation pour le rituel : ${special}`;
      }
      bookingModal.classList.add('open');
    });
  });

  const conciergeBtn = document.getElementById('open-concierge-btn');
  if (conciergeBtn) {
    conciergeBtn.addEventListener('click', () => {
      const bookingModal = document.getElementById('booking-modal');
      const notes = document.getElementById('book-notes');
      if (notes) {
        notes.value = currentLang === 'en' 
          ? 'Request for at-home styling concierge trunk delivery' 
          : 'Demande de conciergerie et malle styling à domicile';
      }
      bookingModal.classList.add('open');
    });
  }
}

/* ----------------------------------------------------
   6. CAREERS FORM INTERACTION
---------------------------------------------------- */
function initCareersForm() {
  const form = document.getElementById('careers-application-form');
  const fileInput = document.getElementById('cv-file');
  const fileNameDisplay = document.getElementById('file-name-display');
  const fileLabelText = document.getElementById('file-label-text');

  if (fileInput) {
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        fileNameDisplay.textContent = currentLang === 'en'
          ? `✓ Attached document: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`
          : `✓ Document joint : ${file.name} (${(file.size / 1024).toFixed(1)} Ko)`;
        fileLabelText.textContent = currentLang === 'en' ? 'Document ready to send' : "Document prêt à l'envoi";
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = document.getElementById('first-name').value;
      const roleSelect = document.getElementById('desired-role');
      const roleText = roleSelect.options[roleSelect.selectedIndex].text;

      showToast(
        currentLang === 'en'
          ? `Thank you ${firstName}! Your application for "${roleText}" was successfully submitted.`
          : `Merci ${firstName} ! Votre candidature pour le poste « ${roleText} » a été transmise.`
      );

      form.reset();
      if (fileNameDisplay) fileNameDisplay.textContent = '';
      if (fileLabelText) {
        fileLabelText.textContent = currentLang === 'en'
          ? 'No document chosen — Drag and drop your CV here'
          : 'Aucun document choisi — Glissez votre CV ici';
      }
    });
  }
}

/* ----------------------------------------------------
   7. APPOINTMENT FORM INTERACTION
---------------------------------------------------- */
function initAppointmentForm() {
  const form = document.getElementById('appointment-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('book-name').value;
      const date = document.getElementById('book-date').value;
      const time = document.getElementById('book-time').value;

      document.getElementById('booking-modal').classList.remove('open');
      showToast(
        currentLang === 'en'
          ? `Appointment confirmed for ${name} on ${date} at ${time}! Confirmation email sent.`
          : `Rendez-vous confirmé pour ${name} le ${date} à ${time} ! Un courriel vous a été envoyé.`
      );
      form.reset();
    });
  }
}

/* ----------------------------------------------------
   8. STATS COUNTER ANIMATION
---------------------------------------------------- */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const runAnimation = () => {
    statNumbers.forEach(stat => {
      const target = +stat.getAttribute('data-target');
      const duration = 1800;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          stat.textContent = target;
          clearInterval(timer);
        } else {
          stat.textContent = Math.floor(current);
        }
      }, stepTime);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        runAnimation();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats');
  if (statsSection) observer.observe(statsSection);
}

/* ----------------------------------------------------
   9. MOBILE MENU TOGGLE
---------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
      });
    });
  }
}

/* ----------------------------------------------------
   10. TOAST NOTIFICATION UTILITY
---------------------------------------------------- */
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4200);
}
