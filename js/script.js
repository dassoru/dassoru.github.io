/**
 * DASSORU — Photography by Basuru Jayasanka
 * Core interactive scripts: navigation, filters, and reader reflections
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Menu Toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? 'CLOSE' : 'MENU';
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    // Close when clicking any nav link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'MENU';
        toggle.setAttribute('aria-label', 'Open navigation menu');
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'MENU';
        toggle.setAttribute('aria-label', 'Open navigation menu');
        toggle.focus();
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'MENU';
        toggle.setAttribute('aria-label', 'Open navigation menu');
      }
    });
  }

  // 2. Portfolio Category Filter (photography/index.html)
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.archive-grid .photo-card');
  if (filters.length > 0 && cards.length > 0) {
    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        filters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.dataset.filter;
        cards.forEach(card => {
          if (filterVal === 'All' || card.dataset.category === filterVal) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 3. Reader Reflections & Comments System
  initCommentsSystem();
});

/**
 * Curated initial reflections for each photograph
 */
const SEED_REFLECTIONS = {
  'innocent-smile': [
    {
      author: 'Kasun Perera',
      location: 'Kurunegala, Sri Lanka',
      date: '12 Oct 2026',
      text: 'This took me straight back to childhood in the village. There is something pure in the way children climb trees without a care in the world. Beautifully captured.'
    },
    {
      author: 'Ananya Sharma',
      location: 'Mumbai, India',
      date: '14 Oct 2026',
      text: 'Their smiles are genuine and untouched. What a heartwarming moment.'
    }
  ],
  'patience': [
    {
      author: 'David Miller',
      location: 'Melbourne, Australia',
      date: '18 Jul 2024',
      text: 'The stillness of the pelican against the drought landscape carries so much emotion. A wonderful reminder that waiting is also part of life.'
    },
    {
      author: 'Nalaka Senanayake',
      location: 'Trincomalee, Sri Lanka',
      date: '25 Jul 2024',
      text: 'Trinco\'s dry season is fierce, but life always finds its rhythm. Such a calm and dignified frame.'
    }
  ],
  'backwaters-boat-ride': [
    {
      author: 'Sophie Dubois',
      location: 'Paris, France',
      date: '15 Jan 2023',
      text: 'The thought "What if I was in their photograph?" is so poetic. We cross paths with thousands of strangers, and we might be memories in their albums too.'
    },
    {
      author: 'Rajesh Nair',
      location: 'Kochi, Kerala',
      date: '22 Jan 2023',
      text: 'Alappuzha has this serene magic. Your perspective of seeing oneself through other people\'s lenses gives this image a philosophical depth.'
    }
  ],
  'wild-flowers': [
    {
      author: 'Thilina Jayawardena',
      location: 'Kandy, Sri Lanka',
      date: '04 Mar 2023',
      text: 'Giving tribute to the dried seed head that released its seeds to the wind... such deep observation. Most people only look at fresh blooms.'
    },
    {
      author: 'Meera Patel',
      location: 'Ahmedabad, India',
      date: '19 Mar 2023',
      text: 'Jamnagar\'s morning light captured with so much tenderness. A forgotten flower given eternal life.'
    }
  ],
  '2000-vibe': [
    {
      author: 'Chaminda Wijesinghe',
      location: 'Colombo, Sri Lanka',
      date: '10 Aug 2024',
      text: 'The posture on this hornbill really made me laugh! The 2000s pose description is so accurate and fun.'
    },
    {
      author: 'Liam O\'Connor',
      location: 'Dublin, Ireland',
      date: '15 Aug 2024',
      text: 'Magnificent bird, and great sharpness on the feathers. You captured true personality here.'
    }
  ],
  'blood-is-thicker': [
    {
      author: 'Dilini Fernando',
      location: 'Galle, Sri Lanka',
      date: '14 Oct 2026',
      text: 'As a mother, this brought tears to my eyes. Sisterhood captured in its purest, most honest state.'
    },
    {
      author: 'Rohan Sen',
      location: 'Bengaluru, India',
      date: '15 Oct 2026',
      text: 'A father\'s perspective through the lens is always special. The affection between the two sisters is palpable.'
    }
  ],
  'birds-by-the-water': [
    {
      author: 'Vikram Singh',
      location: 'Jaipur, India',
      date: '12 Feb 2023',
      text: 'In the harsh dry heat of Western India, finding water is pure bliss. You captured that relief in the bird\'s posture so well.'
    },
    {
      author: 'Ruwan Silva',
      location: 'Matara, Sri Lanka',
      date: '20 Feb 2023',
      text: 'The babbler\'s energy and the water droplets look stunning. Simple comfort is truly the greatest luxury.'
    }
  ],
  'closest-one-to-us': [
    {
      author: 'Ashan Bandara',
      location: 'Anuradhapura, Sri Lanka',
      date: '08 Feb 2023',
      text: 'Full Moon Poya Day carries a special serenity. The clouds wrapping the moon create such a meditative atmosphere.'
    },
    {
      author: 'Elena Rossi',
      location: 'Rome, Italy',
      date: '11 Feb 2023',
      text: 'Calm, quiet and profound. A reminder to look up at the night sky and breathe.'
    }
  ],
  'just-curious': [
    {
      author: 'Pooja Menon',
      location: 'Thrissur, Kerala',
      date: '05 Sep 2022',
      text: 'Three days on an Indian train is an unforgettable adventure, but seeing it through the eyes of an infant discovering the world is truly magical.'
    },
    {
      author: 'Sanjeewa Kumara',
      location: 'Colombo, Sri Lanka',
      date: '18 Sep 2022',
      text: 'A daughter\'s curiosity preserved forever. Time flies so fast, but this photograph will keep that innocence alive.'
    }
  ]
};

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatDate(d) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function initCommentsSystem() {
  const section = document.querySelector('.comments-section');
  if (!section) return;

  const photoId = section.dataset.photoId;
  const photoTitle = section.dataset.photoTitle || 'this photograph';
  const form = document.getElementById('commentForm');
  const listEl = document.getElementById('commentsList');
  const countEl = document.getElementById('commentsCount');
  const statusEl = document.getElementById('commentStatus');

  if (!photoId || !listEl) return;

  const storageKey = 'dassoru_comments_' + photoId;

  // Load custom comments from localStorage
  let userComments = [];
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) userComments = JSON.parse(raw);
  } catch (err) {
    console.warn('Could not read stored comments', err);
  }

  const seed = SEED_REFLECTIONS[photoId] || [];

  function renderComments(highlightId) {
    listEl.innerHTML = '';
    const all = [...userComments, ...seed];

    if (countEl) {
      countEl.textContent = `${all.length} Reflection${all.length === 1 ? '' : 's'}`;
    }

    if (all.length === 0) {
      listEl.innerHTML = '<p style="color:#888; font-size:13px; font-style:italic;">Be the first to share your reflection on this photograph.</p>';
      return;
    }

    all.forEach(c => {
      const card = document.createElement('article');
      card.className = 'comment-card' + (c.id === highlightId ? ' newly-posted' : '');

      const isUserComment = Boolean(c.isUser);
      let shareHtml = '';
      if (isUserComment) {
        const waMsg = encodeURIComponent(`Hello Basuru, I shared this reflection on your photograph '${photoTitle}':\n\n"${c.text}"\n— ${c.author}`);
        shareHtml = `
          <div class="comment-share-author">
            <a href="https://wa.me/94763011292?text=${waMsg}" target="_blank" rel="noopener noreferrer">
              <span>Send reflection to Basuru on WhatsApp</span> 💬
            </a>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="comment-card-header">
          <div class="comment-author-wrap">
            <strong class="comment-author">${escapeHtml(c.author)}</strong>
            ${c.location ? `<span class="comment-location">· ${escapeHtml(c.location)}</span>` : ''}
          </div>
          <span class="comment-date">${escapeHtml(c.date)}</span>
        </div>
        <p class="comment-body">${escapeHtml(c.text)}</p>
        ${shareHtml}
      `;
      listEl.appendChild(card);
    });
  }

  renderComments();

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const authorInput = document.getElementById('commentAuthor');
      const locationInput = document.getElementById('commentLocation');
      const textInput = document.getElementById('commentText');

      const author = authorInput ? authorInput.value.trim() : '';
      const location = locationInput ? locationInput.value.trim() : '';
      const text = textInput ? textInput.value.trim() : '';

      if (!author || !text) return;

      const newId = Date.now();
      const newComment = {
        id: newId,
        author: author,
        location: location,
        text: text,
        date: formatDate(new Date()),
        isUser: true
      };

      userComments.unshift(newComment);
      try {
        localStorage.setItem(storageKey, JSON.stringify(userComments));
      } catch (err) {
        console.warn('Could not save comment to localStorage', err);
      }

      renderComments(newId);
      form.reset();

      if (statusEl) {
        statusEl.className = 'comment-status success';
        statusEl.textContent = `Thank you, ${author}! Your reflection has been shared.`;
        setTimeout(() => {
          statusEl.textContent = '';
        }, 6000);
      }

      // Smooth scroll to the newly posted comment
      const firstCard = listEl.querySelector('.comment-card');
      if (firstCard) {
        firstCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }
}