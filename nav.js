// TypeCert Navigation — shared across all pages
const NAV_HTML = `
<nav id="mainNav">
  <div class="nav-inner-wrap">
    <a href="index.html" class="tc-logo"><span class="t">Type</span><span class="c">Cert</span></a>
    <div class="tc-nav-links">
      <a href="index.html" class="tc-nav-link" data-page="index">Home</a>
      <a href="practice.html" class="tc-nav-link" data-page="practice">Practice</a>
      <a href="exams.html" class="tc-nav-link" data-page="exams">Exam Patterns</a>
      <a href="dashboard.html" class="tc-nav-link" data-page="dashboard">Dashboard</a>
      <a href="verify.html" class="tc-nav-link" data-page="verify">Verify</a>
    </div>
    <a href="certificate.html" class="tc-nav-cta">Get Certificate →</a>
    <button class="tc-hamburger" onclick="toggleMobileNav()" id="hamburger">☰</button>
  </div>
  <div class="tc-mobile-nav" id="mobileNav">
    <a href="index.html" class="tc-mobile-link">🏠 Home</a>
    <a href="practice.html" class="tc-mobile-link">⌨️ Practice</a>
    <a href="exams.html" class="tc-mobile-link">🏛️ Exam Patterns</a>
    <a href="dashboard.html" class="tc-mobile-link">📊 Dashboard</a>
    <a href="certificate.html" class="tc-mobile-link">🏆 Get Certificate</a>
    <a href="verify.html" class="tc-mobile-link">🔍 Verify Certificate</a>
  </div>
</nav>`;

const NAV_CSS = `
#mainNav {
  padding: 0;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  backdrop-filter: blur(20px);
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(8,8,16,0.92);
  font-family: 'Inter', sans-serif;
}
.nav-inner-wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 18px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.tc-logo {
  font-family: 'Syne', sans-serif;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.5px;
  text-decoration: none;
  color: #f0f0fa;
  flex-shrink: 0;
}
.tc-logo .t { color: #7c6dfa; }
.tc-logo .c { color: #f0f0fa; }
.tc-nav-links {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  justify-content: center;
}
.tc-nav-link {
  font-size: 13px;
  color: #8888aa;
  text-decoration: none;
  padding: 7px 14px;
  border-radius: 8px;
  transition: all 0.15s;
  white-space: nowrap;
}
.tc-nav-link:hover { color: #f0f0fa; background: rgba(255,255,255,0.05); }
.tc-nav-link.active { color: #7c6dfa; background: rgba(124,109,250,0.1); }
.tc-nav-cta {
  background: #7c6dfa;
  color: white;
  border: none;
  padding: 9px 20px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
}
.tc-nav-cta:hover { background: #6b5cf0; transform: translateY(-1px); }
.tc-hamburger {
  display: none;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.12);
  color: #f0f0fa;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}
.tc-mobile-nav {
  display: none;
  flex-direction: column;
  padding: 12px 28px 20px;
  border-top: 1px solid rgba(255,255,255,0.07);
  gap: 4px;
}
.tc-mobile-nav.open { display: flex; }
.tc-mobile-link {
  font-size: 15px;
  color: #8888aa;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 10px;
  transition: all 0.15s;
}
.tc-mobile-link:hover { color: #f0f0fa; background: rgba(255,255,255,0.05); }
@media (max-width: 768px) {
  .tc-nav-links { display: none; }
  .tc-nav-cta { display: none; }
  .tc-hamburger { display: block; }
}
`;

function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
  document.getElementById('hamburger').textContent = nav.classList.contains('open') ? '✕' : '☰';
}

function injectNav() {
  // Inject CSS
  const style = document.createElement('style');
  style.textContent = NAV_CSS;
  document.head.appendChild(style);

  // Inject HTML
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Set active link based on current page
  const page = window.location.pathname.split('/').pop().replace('.html','') || 'index';
  document.querySelectorAll('.tc-nav-link').forEach(link => {
    if (link.dataset.page === page) link.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', injectNav);
