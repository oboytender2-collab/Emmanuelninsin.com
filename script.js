
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* =========================
   DAILY BIBLE VERSE
   New World Translation
========================= */
const dailyVerses = [
  ['Psalm 23:1', 'Jehovah is my Shepherd. I will lack nothing.', 'https://www.jw.org/en/library/bible/nwt/books/psalms/23/'],
  ['Proverbs 3:5', 'Trust in Jehovah with all your heart, And do not rely on your own understanding.', 'https://www.jw.org/en/library/bible/nwt/books/proverbs/3/'],
  ['Isaiah 41:10', 'Do not be afraid, for I am with you. Do not be anxious, for I am your God.', 'https://www.jw.org/en/library/bible/nwt/books/isaiah/41/'],
  ['Matthew 6:33', 'Keep on, then, seeking first the Kingdom and his righteousness.', 'https://www.jw.org/en/library/bible/nwt/books/matthew/6/'],
  ['Psalm 119:105', 'Your word is a lamp to my foot, And a light for my path.', 'https://www.jw.org/en/library/bible/nwt/books/psalms/119/'],
  ['Joshua 1:9', 'Be courageous and strong. Do not be struck with terror or fear, for Jehovah your God is with you wherever you go.', 'https://www.jw.org/en/library/bible/nwt/books/joshua/1/'],
  ['Proverbs 16:3', 'Commit to Jehovah whatever you do, And your plans will succeed.', 'https://www.jw.org/en/library/bible/nwt/books/proverbs/16/'],
  ['Micah 6:8', 'Only to exercise justice, to cherish loyalty, And to walk in modesty with your God!', 'https://www.jw.org/en/library/bible/nwt/books/micah/6/'],
  ['Colossians 3:23', 'Whatever you are doing, work at it whole-souled as for Jehovah, and not for men.', 'https://www.jw.org/en/library/bible/nwt/books/colossians/3/'],
  ['Psalm 46:1', 'God is our refuge and strength, A help that is readily found in times of distress.', 'https://www.jw.org/en/library/bible/nwt/books/psalms/46/']
];

const verseReference = document.getElementById('verse-reference');
const verseText = document.getElementById('verse-text');
const verseSection = document.getElementById('daily-verse');

if (verseReference && verseText && dailyVerses.length) {
  const now = new Date();
  const yearStart = new Date(now.getFullYear(), 0, 1);
  const dayNumber = Math.floor((now - yearStart) / 86400000) + 1;
  const [reference, verse, bibleLink] =
    dailyVerses[(dayNumber - 1) % dailyVerses.length];

  verseReference.textContent = reference;
  verseText.textContent = verse;

  const verseCard = verseSection
    ? verseSection.querySelector('.daily-verse-card')
    : null;

  if (verseCard) {
    let sourceLink = document.getElementById('verse-source-link');

    if (!sourceLink) {
      sourceLink = document.createElement('a');
      sourceLink.id = 'verse-source-link';
      sourceLink.className = 'verse-source-link';
      sourceLink.target = '_blank';
      sourceLink.rel = 'noopener noreferrer';
      sourceLink.textContent = 'Visit JW.ORG';
      verseCard.appendChild(sourceLink);
    }

    sourceLink.href = bibleLink;
  }
}

/* =========================
   QUOTE OF THE DAY
========================= */
const dailyQuotes = [
  'Education opens doors, but character determines what you do after you enter.',
  'Small steps taken consistently can become a remarkable journey.',
  'Let today be another opportunity to learn, serve and grow.',
  'Your present circumstances do not have to define your future.',
  'Knowledge becomes powerful when it is used to help others.',
  'Discipline turns good intentions into meaningful progress.',
  'A life of purpose is built one faithful decision at a time.',
  'Do not wait for the perfect moment; make this moment meaningful.',
  'Wisdom grows when we remain humble enough to keep learning.',
  'The best investment in tomorrow is the responsible work you do today.',
  'Service gives knowledge a human purpose.',
  'Courage is continuing to do what is right even when it is difficult.',
  'A setback can become a lesson when you choose to learn from it.',
  'Great goals are reached through ordinary actions repeated with consistency.',
  'Let your values guide your choices when circumstances become uncertain.',
  'Learning is not merely preparation for life; it is part of life itself.',
  'Kindness and justice can make knowledge a force for good.',
  'Progress may be slow, but every honest effort has value.',
  'Keep building: the future is shaped by what you do with today.',
  'Leadership begins with responsibility, not recognition.',
  'When you know better, you have an opportunity to do better.',
  'A clear purpose can give strength to a difficult journey.',
  'Use your education not only to advance yourself, but also to uplift others.',
  'Patience gives good work the time it needs to mature.',
  'Integrity is doing what is right even when no applause follows.',
  'Every new day carries another chance to improve your story.',
  'Hope grows when preparation meets perseverance.',
  'Your journey does not need to look like anyone else’s to be meaningful.',
  'Serve faithfully where you are while preparing for where you want to go.',
  'Let your work speak through consistency, humility and purpose.',
  'Finish the day knowing that sincere effort is never wasted.'
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

if (quoteText && quoteAuthor && dailyQuotes.length) {
  const now = new Date();
  const yearStart = new Date(now.getFullYear(), 0, 1);
  const dayNumber = Math.floor((now - yearStart) / 86400000) + 1;

  quoteText.textContent =
    dailyQuotes[(dayNumber - 1) % dailyQuotes.length];
  quoteAuthor.textContent = '— Daily Reflection';
}

/* =========================
   DAILY SPORTS UPDATES
========================= */
const sportsGrid = document.getElementById('sports-grid');
const sportsUpdated = document.getElementById('sports-updated');
const refreshSports = document.getElementById('refresh-sports');

const sportsFeeds = [
  {
    name: 'Football',
    news: 'https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news',
    score: 'https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard'
  },
  {
    name: 'Basketball',
    news: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news',
    score: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard'
  },
  {
    name: 'Tennis',
    news: 'https://site.api.espn.com/apis/site/v2/sports/tennis/atp/news',
    score: 'https://site.api.espn.com/apis/site/v2/sports/tennis/atp/scoreboard'
  }
];

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[character]));
}

async function getJson(url) {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Sports feed unavailable');
  }
  return response.json();
}

function formatEvent(event) {
  const competitors = event?.competitions?.[0]?.competitors || [];

  if (competitors.length >= 2) {
    const names = competitors.map(team => {
      const name =
        team.team?.displayName ||
        team.athlete?.displayName ||
        'Team';
      return `${name} ${team.score || ''}`.trim();
    });

    const status = event.status?.type?.shortDetail;
    return names.join(' vs ') + (status ? ' — ' + status : '');
  }

  return event?.name || 'Scheduled event';
}

async function loadSports() {
  if (!sportsGrid) return;

  sportsGrid.innerHTML = sportsFeeds.map(feed =>
    `<article class="sports-card sports-loading">
      <h3>${feed.name}</h3>
      <p>Loading today's updates…</p>
    </article>`
  ).join('');

  if (sportsUpdated) {
    sportsUpdated.textContent = 'Updating…';
  }

  const cards = await Promise.all(sportsFeeds.map(async feed => {
    try {
      const [news, scores] = await Promise.all([
        getJson(feed.news),
        getJson(feed.score)
      ]);

      const articles = (news.articles || []).slice(0, 3);
      const events = (scores.events || []).slice(0, 3);

      const newsItems = articles.map(article => {
        const url = escapeHtml(article.links?.web?.href || '#');
        const headline = escapeHtml(
          article.headline || article.title || 'Latest sports story'
        );
        const date = escapeHtml(
          article.published
            ? new Date(article.published).toLocaleDateString()
            : 'Latest'
        );

        return `<li>
          <a href="${url}" target="_blank" rel="noopener noreferrer">${headline}</a>
          <span class="sports-meta">${date}</span>
        </li>`;
      }).join('');

      const scoreItems = events.map(event =>
        `<li>
          <strong>${escapeHtml(formatEvent(event))}</strong>
          <span class="sports-meta">Score / schedule</span>
        </li>`
      ).join('');

      let items = scoreItems + newsItems;

      if (!items) {
        items = '<li>No new updates were returned right now.</li>';
      }

      return `<article class="sports-card">
        <h3>${feed.name}</h3>
        <ul>${items}</ul>
        <p class="sports-source">
          Source: <a href="https://www.espn.com/"
          target="_blank" rel="noopener noreferrer">ESPN</a>
        </p>
      </article>`;
    } catch (error) {
      return `<article class="sports-card">
        <h3>${feed.name}</h3>
        <p>Live updates are temporarily unavailable. Please refresh shortly.</p>
        <p class="sports-source">
          Source: <a href="https://www.espn.com/"
          target="_blank" rel="noopener noreferrer">ESPN</a>
        </p>
      </article>`;
    }
  }));

  sportsGrid.innerHTML = cards.join('');

  if (sportsUpdated) {
    sportsUpdated.textContent =
      `Last checked: ${new Date().toLocaleString()}`;
  }
}

loadSports();

if (refreshSports) {
  refreshSports.addEventListener('click', loadSports);
}
