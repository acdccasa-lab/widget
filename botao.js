(function () {
  var SESSION_KEY = 'origem_acdccasa';
  var params = new URLSearchParams(window.location.search);

  if (params.get('origem') === 'acdccasa') {
    sessionStorage.setItem(SESSION_KEY, 'true');
  }

  if (sessionStorage.getItem(SESSION_KEY) !== 'true') return;

  function init() {
    if (!document.head || !document.body) return;

    var style = document.createElement('style');
    style.textContent = [
      '#btn-voltar-acdc {',
      '  position: fixed;',
      '  bottom: 2rem;',
      '  right: 2rem;',
      '  background: #fff;',
      '  color: #000;',
      '  font-family: Inter, system-ui, sans-serif;',
      '  font-size: 15px;',
      '  font-weight: 600;',
      '  padding: .75rem 1.25rem;',
      '  border-radius: 6px;',
      '  text-decoration: none;',
      '  box-shadow: 0 4px 20px rgba(0,0,0,.25);',
      '  z-index: 9999;',
      '  transition: background 150ms ease, transform 150ms ease;',
      '}',
      '#btn-voltar-acdc:hover {',
      '  background: #e5e5e5;',
      '  transform: translateY(-2px);',
      '}'
    ].join('\n');

    document.head.appendChild(style);

    var btn = document.createElement('a');
    btn.id = 'btn-voltar-acdc';
    btn.href = 'https://www.acdccasa.com.br';
    btn.textContent = '\u2190 Voltar para o site';
    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
