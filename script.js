const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();


// Daily Bible verse — New World Translation of the Holy Scriptures (2013 Revision).
// The displayed selections are brief excerpts; the reference links to JW.ORG for the full verse.
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
if (verseReference && verseText) {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 1);
  const day = Math.floor((today - start) / 86400000) + 1;
  const [reference, text, link] = dailyVerses[(day - 1) % dailyVerses.length];
  verseReference.textContent = reference;
  verseText.textContent = text;
  const verseSection = document.getElementById('daily-verse');
  if (verseSection) {
    let sourceLink = document.getElementById('verse-source-link');
    if (!sourceLink) {
      sourceLink = document.createElement('a');
      sourceLink.id = 'verse-source-link';
      sourceLink.className = 'verse-source-link';
      sourceLink.target = '_blank';
      sourceLink.rel = 'noopener noreferrer';
      sourceLink.textContent = 'Read the full verse on JW.ORG';
      verseSection.querySelector('.daily-verse-card').appendChild(sourceLink);
    }
    sourceLink.href = link;
  }
}


// Quote of the day. These short reflections are original website copy.
const dailyQuotes = [
  ['Education opens doors, but character determines what you do after you enter.', 'Daily Reflection'],
  ['Small steps taken consistently can become a remarkable journey.', 'Daily Reflection'],
  ['Let today be another opportunity to learn, serve and grow.', 'Daily Reflection'],
  ['Your present circumstances do not have to define your future.', 'Daily Reflection'],
  ['Knowledge becomes powerful when it is used to help others.', 'Daily Reflection'],
  ['Discipline turns good intentions into meaningful progress.', 'Daily Reflection'],
  ['A life of purpose is built one faithful decision at a time.', 'Daily Reflection'],
  ['Do not wait for the perfect moment; make this moment meaningful.', 'Daily Reflection'],
  ['Wisdom grows when we remain humble enough to keep learning.', 'Daily Reflection'],
  ['The best investment in tomorrow is the responsible work you do today.', 'Daily Reflection'],
  ['Service gives knowledge a human purpose.', 'Daily Reflection'],
  ['Courage is continuing to do what is right even when it is difficult.', 'Daily Reflection'],
  ['A setback can become a lesson when you choose to learn from it.', 'Daily Reflection'],
  ['Great goals are reached through ordinary actions repeated with consistency.', 'Daily Reflection'],
  ['Let your values guide your choices when circumstances become uncertain.', 'Daily Reflection'],
  ['Learning is not merely preparation for life; it is part of life itself.', 'Daily Reflection'],
  ['Kindness and justice can make knowledge a force for good.', 'Daily Reflection'],
  ['Progress may be slow, but every honest effort has value.', 'Daily Reflection'],
  ['Keep building: the future is shaped by what you do with today.', 'Daily Reflection'],
  ['Leadership begins with responsibility, not recognition.', 'Daily Reflection'],
  ['When you know better, you have an opportunity to do better.', 'Daily Reflection'],
  ['A clear purpose can give strength to a difficult journey.', 'Daily Reflection'],
  ['Use your education not only to advance yourself, but also to uplift others.', 'Daily Reflection'],
  ['Patience gives good work the time it needs to mature.', 'Daily Reflection'],
  ['Integrity is doing what is right even when no applause follows.', 'Daily Reflection'],
  ['Every new day carries another chance to improve your story.', 'Daily Reflection'],
  ['Hope grows when preparation meets perseverance.', 'Daily Reflection'],
  ['Your journey does not need to look like anyone else’s to be meaningful.', 'Daily Reflection'],
  ['Serve faithfully where you are while preparing for where you want to go.', 'Daily Reflection'],
  ['Let your work speak through consistency, humility and purpose.', 'Daily Reflection'],
  ['Finish the day knowing that sincere effort is never wasted.', 'Daily Reflection']
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
if (quoteText && quoteAuthor) {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 1);
  const day = Math.floor((today - start) / 86400000) + 1;
  const [quote, author] = dailyQuotes[(day - 1) % dailyQuotes.length];
  quoteText.textContent = quote;
  quoteAuthor.textContent = '— ' + author;
}

// Daily sports updates. Uses ESPN's public site API for current headlines/scores.
const sportsGrid = document.getElementById('sports-grid');
const sportsUpdated = document.getElementById('sports-updated');
const refreshSports = document.getElementById('refresh-sports');

const sportsFeeds = [
  {name:'Football', news:'https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news', score:'https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard'},
  {name:'Basketball', news:'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news', score:'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard'},
  {name:'Tennis', news:'https://site.api.espn.com/apis/site/v2/sports/tennis/atp/news', score:'https://site.api.espn.com/apis/site/v2/sports/tennis/atp/scoreboard'}
];

function escapeHtml(value){
  return String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

async function getJson(url){
  const response = await fetch(url, {cache:'no-store'});
  if(!response.ok) throw new Error('Sports feed unavailable');
  return response.json();
}

function formatEvent(event){
  const competitors = event?.competitions?.[0]?.competitors || [];
  if(competitors.length >= 2){
    const names = competitors.map(c => `${c.team?.displayName || c.athlete?.displayName || 'Team'} ${c.score ? c.score : ''}`.trim());
    return `${names.join(' vs ')}${event.status?.type?.shortDetail ? ' — ' + event.status.type.shortDetail : ''}`;
  }
  return event?.name || 'Scheduled event';
}

async function loadSports(){
  if(!sportsGrid) return;
  sportsGrid.innerHTML = sportsFeeds.map(f => `<article class="sports-card sports-loading"><h3>${f.name}</h3><p>Loading today's updates…</p></article>`).join('');
  if(sportsUpdated) sportsUpdated.textContent = 'Updating…';

  const cards = await Promise.all(sportsFeeds.map(async feed => {
    try{
      const [news, scores] = await Promise.all([getJson(feed.news), getJson(feed.score)]);
      const articles = (news.articles || []).slice(0,3);
      const events = (scores.events || []).slice(0,3);
      let items = articles.map(a => `<li><a href="${escapeHtml(a.links?.web?.href || '#')}" target="_blank" rel="noopener noreferrer">${escapeHtml(a.headline || a.title || 'Latest sports story')}</a><span class="sports-meta">${escapeHtml(a.published ? new Date(a.published).toLocaleDateString() : 'Latest')}</span></li>`).join('');
      const scoreItems = events.map(e => `<li><strong>${escapeHtml(formatEvent(e))}</strong><span class="sports-meta">Score / schedule</span></li>`).join('');
      if(!items && !scoreItems) items='<li>No new updates were returned right now.</li>';
      return `<article class="sports-card"><h3>${feed.name}</h3><ul>${scoreItems}${items}</ul><p class="sports-source">Source: <a href="https://www.espn.com/" target="_blank" rel="noopener noreferrer">ESPN</a></p></article>`;
    }catch(error){
      return `<article class="sports-card"><h3>${feed.name}</h3><p>Live updates are temporarily unavailable. Please refresh shortly.</p><p class="sports-source">Source: <a href="https://www.espn.com/" target="_blank" rel="noopener noreferrer">ESPN</a></p></article>`;
    }
  }));
  sportsGrid.innerHTML = cards.join('');
  if(sportsUpdated) sportsUpdated.textContent = `Last checked: ${new Date().toLocaleString()}`;
}

loadSports();
if(refreshSports) refreshSports.addEventListener('click', loadSports);
