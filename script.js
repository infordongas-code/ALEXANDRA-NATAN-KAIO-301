const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('printBtn').addEventListener('click', () => {
  window.print();
});

document.getElementById('contactBtn').addEventListener('click', async () => {
  const contactText = [
    'Professora Ana Lurdes',
    'Componente curricular: Filosofia',
    'E-mail: seuemail@exemplo.com',
    'Instituição: Nome da escola ou instituição',
    'Currículo Lattes: inserir link'
  ].join('\\n');
  const feedback = document.getElementById('contactFeedback');
  try {
    await navigator.clipboard.writeText(contactText);
    feedback.textContent = 'Modelo de contato copiado. Edite os dados de exemplo antes de publicar.';
  } catch (error) {
    feedback.textContent = 'Copie manualmente os dados de contato exibidos nesta página e substitua os exemplos.';
  }
});
