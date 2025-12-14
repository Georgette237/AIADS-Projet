 function toggleLangMenu() {
    const menu = document.getElementById('langMenu');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }

  function changeLang(lang) {
    alert("Langue choisie : " + lang);
    // Ici vous pouvez ajouter la logique pour changer la langue du site
    document.getElementById('langMenu').style.display = 'none'; // ferme le menu après le choix
  }

