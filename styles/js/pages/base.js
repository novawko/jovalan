/* ==================================================================== */
/* Import Utilities
======================================================================= */
import { charadex } from '../utilities.js';

/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {
  charadex.tools.loadIncludedFiles();
  charadex.tools.updateMeta();
  charadex.tools.loadPage('#charadex-body', 0);
});

/* ==================================================================== */
/* Fixed Automatic Scroll
======================================================================= */
  window.addEventListener("load", () => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "auto" });
        }, 100);
      }
    }
  });

/* ==================================================================== */
/* Load any specific navtabs on all of the site
======================================================================= */
$(function() {
  var hash = window.location.hash;

  if (hash != '') {
    $('.tab-pane').removeClass('active in'); // Remove 'active' from all tab panes
    $(hash).addClass('active in'); // Add 'active' to the target tab pane
    $(`a[href="${hash}"]`).tab('show'); // Show the tab linked to the hash
  }
});

/* ==================================================================== */
/* Load them STUBBORN navtabs while linking to them
======================================================================= */

$(function () {
  var $tabs  = $("ul.tabs > li");
  var $panes = $(".tab_container > .tab_content");

  function activate(i) {
    $tabs.removeClass("active").eq(i).addClass("active");
    $panes.hide().eq(i).show();
  }

  // Open by URL hash if present; otherwise default to index 1
  var idxFromHash = $tabs.find('a[href="' + location.hash + '"]').parent().index();
  activate(idxFromHash >= 0 ? idxFromHash : 1);

  $tabs.on("click", function (e) {
    e.preventDefault();
    var i = $(this).index();
    activate(i);
    history.replaceState(null, "", $(this).find("a").attr("href"));
  });
});

/* ==================================================================== */
/* Dark/Light Toggle
======================================================================= */
  $(function () {

    const bodyClass = document.body.classList;

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('toggle') == null) {
      bodyClass.add('dark');
    } if (localStorage.getItem('toggle') == 'true') {
      bodyClass.add('dark');
    }

    $(document).on("click", "#toggle", function () {
      bodyClass.contains('dark')
        ? (bodyClass.remove('dark'))
        : (bodyClass.add('dark'));
      localStorage.setItem('toggle', bodyClass.contains('dark'));
    });

  });
