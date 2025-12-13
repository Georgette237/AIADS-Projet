function toggleLangMenu(){
  document.getElementById("langMenu").classList.toggle("open");
}

function changeLang(lang){
  i18next.changeLanguage(lang, () => {
    updateContent();
    document.getElementById("langMenu").classList.remove("open");
  });
}

