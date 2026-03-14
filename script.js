(function () {
  'use strict';

  const animals = [
    { id: 1, name: 'Thor', species: 'cachorro', age: 'adulto', size: 'grande', location: 'sao-paulo', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80', weight: '28 kg', gender: 'Macho', temperament: 'Carinhoso e calmo', description: 'Thor é um cachorro muito dócil, adora brincar e se dá bem com crianças. Está castrado e vacinado.' },
    { id: 2, name: 'Luna', species: 'gato', age: 'filhote', size: 'pequeno', location: 'rio-de-janeiro', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80', weight: '2,5 kg', gender: 'Fêmea', temperament: 'Brincalhona', description: 'Luna é uma gatinha cheia de energia. Adora carinho e se adapta bem a apartamentos.' },
    { id: 3, name: 'Rex', species: 'cachorro', age: 'filhote', size: 'medio', location: 'belo-horizonte', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80', weight: '8 kg', gender: 'Macho', temperament: 'Alegre e energético', description: 'Rex adora correr e brincar. Ideal para famílias ativas. Todas as vacinas em dia.' },
    { id: 4, name: 'Mia', species: 'gato', age: 'adulto', size: 'medio', location: 'sao-paulo', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80', weight: '4 kg', gender: 'Fêmea', temperament: 'Independente e tranquila', description: 'Mia é uma gata calma, ideal para quem busca um companheiro sereno. Castrada e saudável.' },
    { id: 5, name: 'Bob', species: 'cachorro', age: 'idoso', size: 'grande', location: 'curitiba', image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&q=80', weight: '22 kg', gender: 'Macho', temperament: 'Calmo e afetuoso', description: 'Bob é um senhor muito tranquilo. Perfeito para quem quer um amigo companheiro e sossegado.' },
    { id: 6, name: 'Nala', species: 'gato', age: 'filhote', size: 'pequeno', location: 'sao-paulo', image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&q=80', weight: '1,8 kg', gender: 'Fêmea', temperament: 'Curiosa e carinhosa', description: 'Nala é uma gatinha amorosa que adora colo. Ideal para apartamentos.' },
    { id: 7, name: 'Max', species: 'cachorro', age: 'adulto', size: 'medio', location: 'rio-de-janeiro', image: 'https://img.freepik.com/fotos-gratis/cao-de-raca-pura-sendo-bonito-em-um-estudio_23-2149016892.jpg?t=st=1773105777~exp=1773109377~hmac=e18f4923a1a907cd284f3dff61febc6b1d4495ca8eaf6f9c395a507c8ff50c10&w=1480', weight: '15 kg', gender: 'Macho', temperament: 'Leal e protetor', description: 'Max é muito fiel e se adapta bem a qualquer ambiente. Castrado e vacinado.' },
    { id: 8, name: 'Bella', species: 'gato', age: 'adulto', size: 'pequeno', location: 'belo-horizonte', image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600&q=80', weight: '3,2 kg', gender: 'Fêmea', temperament: 'Dócil e quieta', description: 'Bella adora sonecas ao sol. Gata castrada e muito saudável.' },
    { id: 9, name: 'Duke', species: 'cachorro', age: 'filhote', size: 'grande', location: 'curitiba', image: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=600&q=80', weight: '12 kg', gender: 'Macho', temperament: 'Brincalhão e sociável', description: 'Duke ainda é filhote mas já mostra muito carisma. Adora outros animais e crianças.' },
    { id: 10, name: 'Kiara', species: 'gato', age: 'idoso', size: 'medio', location: 'sao-paulo', image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80', weight: '4,5 kg', gender: 'Fêmea', temperament: 'Mansa e companheira', description: 'Kiara é uma senhora muito carinhosa. Perfeita para quem busca um companheiro tranquilo.' },
    { id: 11, name: 'Buddy', species: 'cachorro', age: 'adulto', size: 'pequeno', location: 'rio-de-janeiro', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80', weight: '6 kg', gender: 'Macho', temperament: 'Alegre e pequeno', description: 'Buddy é um cãozinho perfeito para apartamentos. Muito carinhoso e obediente.' },
    { id: 12, name: 'Olívia', species: 'gato', age: 'filhote', size: 'pequeno', location: 'curitiba', image: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=600&q=80', weight: '2 kg', gender: 'Fêmea', temperament: 'Ativa e amorosa', description: 'Olívia é uma gatinha muito fofa e brincalhona. Adora interagir com a família.' }
  ];

  const locationLabels = {
    'sao-paulo': 'São Paulo',
    'rio-de-janeiro': 'Rio de Janeiro',
    'belo-horizonte': 'Belo Horizonte',
    'curitiba': 'Curitiba'
  };

  const ageLabels = { filhote: 'Filhote', adulto: 'Adulto', idoso: 'Idoso' };
  const sizeLabels = { pequeno: 'Pequeno', medio: 'Médio', grande: 'Grande' };
  const speciesLabels = { cachorro: 'Cachorro', gato: 'Gato' };

  const testimonials = [
    { name: 'Ana Silva', text: 'Adotamos a Luna há um ano. Foi a melhor decisão! Ela trouxe alegria para nossa casa.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80' },
    { name: 'Carlos Mendes', text: 'O Thor é incrível. O processo de adoção foi transparente e rápido. Recomendo muito.', image: 'https://img.freepik.com/fotos-gratis/close-up-foto-de-um-homem-bonito-branco-com-barba-vestido-com-uma-camiseta-olhando-e-sorrindo-com-uma-expressao-alegre-e-feliz-sentado-em-um-restaurante-na-calcada-em-um-dia-ensolarado-esperando-por-amigos_273609-6600.jpg?t=st=1773105118~exp=1773108718~hmac=20527cf9b80b638172cbd72da7e884e8f70c9e7679a00f2618f834b584665aa3&w=1480' },
    { name: 'Marina Costa', text: 'Meus filhos amam o Rex. Ver a felicidade deles com o novo amigo não tem preço.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80' },
    { name: 'Pedro Santos', text: 'Adoção responsável faz a diferença. A equipe nos orientou em tudo. Gratidão!', image: 'https://img.freepik.com/fotos-gratis/homem-sorridente-usando-fones-de-ouvido_23-2148718046.jpg?t=st=1773105194~exp=1773108794~hmac=e3fe2707d9244c0f0cbe5cf3d00fe7f9e1e61e6654a4fc47244d214f99225ff8&w=1060' }
  ];

  const animalsGrid = document.getElementById('animals-grid');
  const noResults = document.getElementById('no-results');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const contactForm = document.getElementById('contact-form');
  const testimonialsTrack = document.getElementById('testimonials-track');
  const testimonialPrev = document.getElementById('testimonial-prev');
  const testimonialNext = document.getElementById('testimonial-next');
  const testimonialDots = document.getElementById('testimonial-dots');

  function renderAnimals(list = animals) {
    if (!animalsGrid) return;
    animalsGrid.innerHTML = '';
    if (list.length === 0) {
      noResults.classList.remove('hidden');
      return;
    }
    noResults.classList.add('hidden');
    list.forEach((animal, index) => {
      const card = document.createElement('article');
      card.className = 'animal-card scroll-reveal bg-white rounded-2xl overflow-hidden shadow-md';
      card.style.animationDelay = `${index * 0.05}s`;
      card.innerHTML = `
        <div class="overflow-hidden aspect-[4/3]">
          <img src="${animal.image}" alt="${animal.name}" loading="lazy" class="w-full h-full object-cover" width="600" height="450">
        </div>
        <div class="p-5">
          <h3 class="font-display font-bold text-xl text-gray-900 mb-1">${animal.name}</h3>
          <p class="text-gray-600 text-sm mb-2">${ageLabels[animal.age]} • ${sizeLabels[animal.size]}</p>
          <p class="text-gray-500 text-sm mb-4 flex items-center gap-1">
            <i class="fa-solid fa-location-dot text-primary-500"></i> ${locationLabels[animal.location]}
          </p>
          <button type="button" class="card-btn w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 rounded-xl transition-colors" data-animal-id="${animal.id}">
            Ver detalhes
          </button>
        </div>
      `;
      animalsGrid.appendChild(card);
    });
    observeReveal();
  }

  const animalModal = document.getElementById('animal-modal');
  const animalModalBody = document.getElementById('animal-modal-body');
  const animalModalClose = document.getElementById('animal-modal-close');
  const animalModalOverlay = animalModal?.querySelector('.animal-modal-overlay');

  function openAnimalModal(animalId) {
    const animal = animals.find((a) => a.id === animalId);
    if (!animal || !animalModalBody) return;
    animalModalBody.innerHTML = `
      <div class="aspect-[4/3] overflow-hidden">
        <img src="${animal.image}" alt="${animal.name}" class="w-full h-full object-cover">
      </div>
      <div class="p-6 sm:p-8">
        <h2 id="modal-title" class="font-display font-bold text-2xl text-gray-900 mb-4">${animal.name}</h2>
        <div class="grid grid-cols-2 gap-3 mb-4">
          <div class="flex items-center gap-2 text-gray-600">
            <i class="fa-solid fa-paw text-primary-500 w-5"></i>
            <span>${speciesLabels[animal.species]}</span>
          </div>
          <div class="flex items-center gap-2 text-gray-600">
            <i class="fa-solid fa-cake-candles text-primary-500 w-5"></i>
            <span>${ageLabels[animal.age]}</span>
          </div>
          <div class="flex items-center gap-2 text-gray-600">
            <i class="fa-solid fa-weight-scale text-primary-500 w-5"></i>
            <span>${animal.weight}</span>
          </div>
          <div class="flex items-center gap-2 text-gray-600">
            <i class="fa-solid fa-venus-mars text-primary-500 w-5"></i>
            <span>${animal.gender}</span>
          </div>
          <div class="col-span-2 flex items-center gap-2 text-gray-600">
            <i class="fa-solid fa-location-dot text-primary-500 w-5"></i>
            <span>${locationLabels[animal.location]}</span>
          </div>
        </div>
        <div class="mb-4">
          <h3 class="font-semibold text-gray-800 mb-1">Tamanho</h3>
          <p class="text-gray-600">${sizeLabels[animal.size]}</p>
        </div>
        <div class="mb-4">
          <h3 class="font-semibold text-gray-800 mb-1">Temperamento</h3>
          <p class="text-gray-600">${animal.temperament}</p>
        </div>
        <div class="mb-6">
          <h3 class="font-semibold text-gray-800 mb-1">Sobre</h3>
          <p class="text-gray-600">${animal.description}</p>
        </div>
        <a href="#contato" class="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-xl transition-colors">
          Quero adotar
        </a>
      </div>
    `;
    animalModal?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    const contactLink = animalModalBody.querySelector('a[href="#contato"]');
    contactLink?.addEventListener('click', () => closeAnimalModal());
  }

  function closeAnimalModal() {
    if (!animalModal || animalModal.classList.contains('hidden')) return;
    animalModal.classList.add('animal-modal-closing');
    setTimeout(() => {
      animalModal.classList.add('hidden');
      animalModal.classList.remove('animal-modal-closing');
      document.body.style.overflow = '';
    }, 350);
  }

  function initAnimalModalListeners() {
    animalsGrid?.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-animal-id]');
      if (btn) openAnimalModal(parseInt(btn.dataset.animalId, 10));
    });
    animalModalClose?.addEventListener('click', closeAnimalModal);
    animalModalOverlay?.addEventListener('click', closeAnimalModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && animalModal && !animalModal.classList.contains('hidden')) closeAnimalModal();
    });
  }

  // FILTRO DINÂMICO (chips visuais)
  function getFilterValues() {
    const getActiveValue = (filterName) => {
      const container = document.querySelector(`.filter-chips[data-filter="${filterName}"]`);
      const active = container?.querySelector('.filter-chip.active');
      return active?.dataset.value || '';
    };
    return {
      species: getActiveValue('species'),
      age: getActiveValue('age'),
      size: getActiveValue('size'),
      location: getActiveValue('location')
    };
  }

  function applyFilters() {
    const { species, age, size, location } = getFilterValues();
    const filtered = animals.filter((a) => {
      if (species && a.species !== species) return false;
      if (age && a.age !== age) return false;
      if (size && a.size !== size) return false;
      if (location && a.location !== location) return false;
      return true;
    });
    renderAnimals(filtered);
  }

  function updateFilterSummary() {
    const summary = document.getElementById('filter-summary');
    if (!summary) return;
    const labels = [];
    ['species', 'age', 'size', 'location'].forEach((name) => {
      const active = document.querySelector(`.filter-chips[data-filter="${name}"] .filter-chip.active`);
      const label = active?.dataset.label || (name === 'species' || name === 'size' ? 'Todos' : 'Todas');
      if (label && label !== 'Todos' && label !== 'Todas') labels.push(label);
    });
    summary.textContent = labels.length ? labels.join(' · ') : 'Todos os filtros';
  }

  function toggleFilterExpand() {
    const collapsible = document.querySelector('.filter-collapsible');
    if (!collapsible) return;
    collapsible.classList.toggle('expanded');
  }

  function initFilterChips() {
    const filterTrigger = document.getElementById('filter-trigger');
    filterTrigger?.addEventListener('click', toggleFilterExpand);

    document.querySelectorAll('.filter-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const container = chip.closest('.filter-chips');
        container?.querySelectorAll('.filter-chip').forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        applyFilters();
        updateFilterSummary();
        toggleFilterExpand();
      });
    });

    updateFilterSummary();
  }

  // MENU MOBILE
  function initMobileMenu() {
    if (!menuToggle || !mobileMenu) return;
    const links = mobileMenu.querySelectorAll('.mobile-nav-link');

    function closeMenu() {
      mobileMenu.classList.remove('mobile-menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    function openMenu() {
      mobileMenu.classList.add('mobile-menu-open');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    menuToggle.addEventListener('click', () => {
      if (mobileMenu.classList.contains('mobile-menu-open')) closeMenu();
      else openMenu();
    });

    links.forEach((link) => link.addEventListener('click', closeMenu));
  }

  // SLIDER DEPOIMENTOS
  let currentSlide = 0;
  function buildTestimonials() {
    if (!testimonialsTrack || !testimonialDots) return;
    testimonialsTrack.innerHTML = testimonials
      .map(
        (t) => `
      <div class="slide-item">
        <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 text-center w-full flex flex-col items-center">
          <img src="${t.image}" alt="${t.name}" class="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-3 sm:mb-4 flex-shrink-0" loading="lazy">
          <p class="text-gray-600 italic text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 break-words w-full">"${t.text}"</p>
          <p class="font-semibold text-gray-900 text-sm sm:text-base mt-auto">${t.name}</p>
        </div>
      </div>
    `
      )
      .join('');

    testimonialDots.innerHTML = '';
    testimonials.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `w-3 h-3 rounded-full transition-all ${i === 0 ? 'bg-primary-500 w-8' : 'bg-gray-300 hover:bg-gray-400'}`;
      dot.setAttribute('aria-label', `Ir para depoimento ${i + 1}`);
      dot.dataset.index = i;
      testimonialDots.appendChild(dot);
    });
  }
  function goToSlide(index) {
    const total = testimonials.length;
    currentSlide = ((index % total) + total) % total;
    if (testimonialsTrack) {
      const percentPerSlide = 100 / total;
      testimonialsTrack.style.transform = `translateX(-${currentSlide * percentPerSlide}%)`;
    }
    testimonialDots?.querySelectorAll('button').forEach((btn, i) => {
      btn.className = i === currentSlide ? 'w-3 h-3 rounded-full bg-primary-500 w-8 transition-all' : 'w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all';
    });
  }

  function initTestimonials() {
    buildTestimonials();
    testimonialPrev?.addEventListener('click', () => goToSlide(currentSlide - 1));
    testimonialNext?.addEventListener('click', () => goToSlide(currentSlide + 1));
    testimonialDots?.addEventListener('click', (e) => {
      const idx = e.target.dataset.index;
      if (idx !== undefined) goToSlide(parseInt(idx, 10));
    });
  }

  function observeReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
  }

  function validateForm() {
    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const message = document.getElementById('contact-message');
    let valid = true;

    function showError(input, msgEl, message) {
      input.classList.add('error');
      if (msgEl) {
        msgEl.textContent = message;
        msgEl.classList.remove('hidden');
      }
      valid = false;
    }

    function clearError(input, msgEl) {
      input.classList.remove('error');
      if (msgEl) {
        msgEl.textContent = '';
        msgEl.classList.add('hidden');
      }
    }

    clearError(name, name?.nextElementSibling);
    clearError(email, email?.nextElementSibling);
    clearError(message, message?.nextElementSibling);

    if (!name?.value.trim()) {
      showError(name, name?.nextElementSibling, 'Por favor, informe seu nome.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email?.value.trim()) {
      showError(email, email?.nextElementSibling, 'Por favor, informe seu email.');
    } else if (!emailRegex.test(email.value)) {
      showError(email, email?.nextElementSibling, 'Informe um email válido.');
    }
    if (!message?.value.trim()) {
      showError(message, message?.nextElementSibling, 'Por favor, escreva sua mensagem.');
    }

    return valid;
  }

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner animate-spin mr-2"></i>Enviando...';

    setTimeout(() => {
      contactForm.reset();
      contactForm.querySelectorAll('.form-input').forEach((el) => el.classList.remove('error'));
      contactForm.querySelectorAll('.error-message').forEach((el) => el.classList.add('hidden'));

      const notification = document.createElement('div');
      notification.className = 'fixed top-8 right-8 bg-primary-600 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in z-50 max-w-sm';
      notification.innerHTML = '<i class="fa-solid fa-check-circle text-xl flex-shrink-0"></i><div><strong>Sucesso!</strong><p class="text-sm text-primary-100">Mensagem enviada com sucesso. Entraremos em contato em breve.</p></div>';
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.style.animation = 'fadeOut 0.4s ease-out forwards';
        setTimeout(() => notification.remove(), 400);
      }, 5000);

      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }, 1200);
  });

  contactForm?.querySelectorAll('.form-input').forEach((input) => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const err = input.nextElementSibling;
      if (err?.classList.contains('error-message')) err.classList.add('hidden');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  function initLazyLoad() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
          }
        });
      },
      { rootMargin: '100px' }
    );
    images.forEach((img) => io.observe(img));
  }

  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function init() {
    renderAnimals();
    initFilterChips();
    initMobileMenu();
    initTestimonials();
    initAnimalModalListeners();
    observeReveal();
    initLazyLoad();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();