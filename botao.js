(function () {
  var params = new URLSearchParams(window.location.search);
  if (params.get('origem') !== 'acdccasa') return;

  var style = document.createElement('style');
  style.textContent = `
    #btn-voltar-acdc {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: #fff;
      color: #000;
      font-family: Inter, system-ui, sans-serif;
      font-size: 15px;
      font-weight: 600;
      padding: .75rem 1.25rem;
      border-radius: 6px;
      text-decoration: none;
      box-shadow: 0 4px 20px rgba(0,0,0,.25);
      z-index: 9999;
      transition: background 150ms ease, transform 150ms ease;
    }
    #btn-voltar-acdc:hover {
      background: #e5e5e5;
      transform: translateY(-2px);
    }
  `;
  document.head.appendChild(style);

  var btn = document.createElement('a');
  btn.id = 'btn-voltar-acdc';
  btn.href = 'cvvisudf.lojavirtualnuvem.com.br';
  btn.textContent = '← Voltar para o site';
  document.body.appendChild(btn);
})();
