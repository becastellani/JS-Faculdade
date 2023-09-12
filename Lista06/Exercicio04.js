

console.log(navigator.userAgent);


  var userAgent = navigator.userAgent;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Edge/i.test(userAgent)) {
      // Redireciona para a página móvel
      window.location.href = 'pagina_mobile.html';
  } else {
      // Redireciona para a página de desktop
      window.location.href = 'pagina_desktop.html';
  }
