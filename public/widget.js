/**
 * PMI Türkiye SSS Chatbot — Floating Widget
 * --------------------------------------------------------------
 * Bu dosya, herhangi bir web sitesine tek satırlık script ile
 * gömülmek üzere tasarlanmıştır:
 *
 *   <script src="https://YOUR-CLOUDFLARE-PAGES-URL/widget.js" defer></script>
 *
 * Tüm CSS'leri kendi içine enjekte eder ve tüm sınıf/ID'ler
 * "pmi-ai-" ön ekiyle başlar; ev sahibi sitenin stillerine
 * müdahale etmez.
 */
(function () {
  "use strict";

  // Tekrar yükleme korumasi
  if (window.__pmiAiWidgetLoaded) return;
  window.__pmiAiWidgetLoaded = true;

  // ---------- Base URL tespiti ----------
  // chat.html'i widget.js ile aynı klasörden yükleriz.
  function detectBaseUrl() {
    try {
      var current = document.currentScript;
      if (current && current.src) {
        return current.src.replace(/widget\.js(\?.*)?$/, "");
      }
      var scripts = document.getElementsByTagName("script");
      for (var i = scripts.length - 1; i >= 0; i--) {
        var src = scripts[i].src || "";
        if (/widget\.js(\?.*)?$/.test(src)) {
          return src.replace(/widget\.js(\?.*)?$/, "");
        }
      }
    } catch (e) {}
    return "/";
  }
  var BASE_URL = detectBaseUrl();
  var CHAT_URL = BASE_URL + "chat.html";

  // ---------- CSS enjeksiyonu ----------
  var CSS = [
    "#pmi-ai-bubble{",
    "  position:fixed;right:20px;bottom:20px;z-index:2147483646;",
    "  display:flex;align-items:center;gap:8px;",
    "  background:linear-gradient(135deg,#5E2D8C 0%,#7A3CB0 100%);color:#fff;",
    "  padding:12px 18px 12px 14px;border-radius:999px;",
    "  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;",
    "  font-size:14px;font-weight:600;line-height:1;",
    "  border:none;cursor:pointer;",
    "  box-shadow:0 6px 20px rgba(94,45,140,.4),0 2px 6px rgba(0,0,0,.12);",
    "  transition:transform 180ms ease,box-shadow 180ms ease;",
    "  -webkit-font-smoothing:antialiased;",
    "}",
    "#pmi-ai-bubble:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(94,45,140,.45),0 3px 8px rgba(0,0,0,.15);}",
    "#pmi-ai-bubble:active{transform:translateY(0);}",
    "#pmi-ai-bubble svg{width:20px;height:20px;flex-shrink:0;}",
    "#pmi-ai-bubble.pmi-ai-hidden{display:none;}",

    "#pmi-ai-popup{",
    "  position:fixed;right:20px;bottom:88px;z-index:2147483647;",
    "  width:380px;height:600px;max-height:calc(100vh - 110px);",
    "  background:#fff;border-radius:16px;overflow:hidden;",
    "  box-shadow:0 20px 50px rgba(0,0,0,.25),0 6px 16px rgba(0,0,0,.12);",
    "  display:flex;flex-direction:column;",
    "  opacity:0;transform:translateY(12px) scale(.98);",
    "  transition:opacity 200ms ease,transform 200ms ease;",
    "  pointer-events:none;",
    "}",
    "#pmi-ai-popup.pmi-ai-open{opacity:1;transform:translateY(0) scale(1);pointer-events:auto;}",

    "#pmi-ai-close{",
    "  position:absolute;top:10px;right:10px;z-index:2;",
    "  width:30px;height:30px;border-radius:50%;",
    "  background:rgba(255,255,255,.18);color:#fff;",
    "  border:none;cursor:pointer;",
    "  font-size:18px;line-height:1;",
    "  display:flex;align-items:center;justify-content:center;",
    "  font-family:inherit;",
    "  transition:background 150ms ease;",
    "}",
    "#pmi-ai-close:hover{background:rgba(255,255,255,.32);}",

    "#pmi-ai-iframe{",
    "  flex:1;width:100%;height:100%;border:0;display:block;background:#fff;",
    "}",

    "@media (max-width:560px){",
    "  #pmi-ai-popup{",
    "    right:2.5vw;left:2.5vw;width:95vw;",
    "    height:80vh;max-height:80vh;bottom:88px;",
    "  }",
    "  #pmi-ai-bubble{right:16px;bottom:16px;padding:12px 16px 12px 12px;}",
    "}",
  ].join("");

  function injectStyles() {
    var style = document.createElement("style");
    style.id = "pmi-ai-styles";
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  // ---------- DOM oluşturma ----------
  function createWidget() {
    // Bubble (kayan tetikleyici buton)
    var bubble = document.createElement("button");
    bubble.id = "pmi-ai-bubble";
    bubble.setAttribute("type", "button");
    bubble.setAttribute("aria-label", "PMI Asistan'i ac");
    bubble.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
      "</svg>" +
      "<span>PMI Asistan</span>";

    // Popup
    var popup = document.createElement("div");
    popup.id = "pmi-ai-popup";
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-label", "PMI Türkiye Asistanı");

    var closeBtn = document.createElement("button");
    closeBtn.id = "pmi-ai-close";
    closeBtn.setAttribute("type", "button");
    closeBtn.setAttribute("aria-label", "Kapat");
    closeBtn.innerHTML = "&times;";

    var iframe = document.createElement("iframe");
    iframe.id = "pmi-ai-iframe";
    iframe.title = "PMI Türkiye Asistanı";
    // Iframe'i sadece ilk açılışta yükle (performans).
    iframe.dataset.src = CHAT_URL;

    popup.appendChild(closeBtn);
    popup.appendChild(iframe);

    document.body.appendChild(bubble);
    document.body.appendChild(popup);

    // ---------- Davranış ----------
    var loaded = false;
    function open() {
      if (!loaded) {
        iframe.src = iframe.dataset.src;
        loaded = true;
      }
      popup.classList.add("pmi-ai-open");
      bubble.classList.add("pmi-ai-hidden");
    }
    function close() {
      popup.classList.remove("pmi-ai-open");
      bubble.classList.remove("pmi-ai-hidden");
    }

    bubble.addEventListener("click", open);
    closeBtn.addEventListener("click", close);

    // ESC ile kapatma
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && popup.classList.contains("pmi-ai-open")) {
        close();
      }
    });
  }

  // ---------- Bootstrap ----------
  function init() {
    injectStyles();
    createWidget();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
