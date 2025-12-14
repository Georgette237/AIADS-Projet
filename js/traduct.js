// Affiche ou cache le menu
function toggleLangMenu() {
  const menu = document.getElementById('langMenu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Fonction récursive pour traduire uniquement les noeuds de texte
async function translateNode(node, targetLang) {
  if (node.nodeType === 3 && node.textContent.trim() !== "") {
    try {
      const response = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: node.textContent,
          source: "auto",
          target: targetLang,
          format: "text"
        })
      });
      const data = await response.json();
      node.textContent = data.translatedText;
    } catch (err) {
      console.error("Erreur traduction :", err);
    }
  } else {
    node.childNodes.forEach(child => translateNode(child, targetLang));
  }
}

// Traduire toute la page
function translatePage(targetLang) {
  translateNode(document.body, targetLang);
  document.getElementById('langMenu').style.display = 'none';
}
