// ==UserScript==
// @name         CloudApp Theater Mode
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  CloudApp theater mode UI redesign for maximum size content, and moving toolbox buttons into the nav bar.
// @author       colder
// @homepage     https://github.com/cncolder
// @updateURL    https://github.com/cncolder/userscripts/raw/main/cloudapp-theater-mode.user.js
// @match        https://share.getcloudapp.com/*
// @icon         https://public.getcloudapp.com/packs/media/images/cloudapp-favicon-d053fc47958e1b85c892b5de0d7ac93a.png
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  /** String template string code highlights. */
  const css = String.raw;
  const buttonTop = 256;

  const style = document.createElement("style");

  style.id = "CloudAppTheaterMode";
  style.textContent = css`
    @media screen and (min-width: 600px) {
      /* Page content */
      #viewer-item,
      .cta-container.below {
        padding: 2px 0px !important;
      }
      /* Toolbox */
      .viewer-main-container .sidebar-right {
        position: absolute !important;
        left: -9999px;
      }
      /* Toolbox buttons */
      #shareDropModal i,
      [data-testid="footer-actions-download"] i,
      [data-testid="action-apply-template"],
      [data-testid="cta-menu-link"] i,
      [data-testid="viewer-annotate-link"] i,
      [data-testid="footer-actions-add-to-collection"] i {
        display: block;
        position: fixed;
        left: 20px;
        z-index: 11;
        padding: 0.5rem;
        font-size: 1rem;
        color: #4a4a4a;
      }
      [data-testid="action-apply-template"] .owner-action-label {
        display: none;
      }

      #shareDropModal i {
        top: ${buttonTop}px;
      }
      [data-testid="footer-actions-download"] i {
        top: ${buttonTop + 48 * 1}px;
      }
      [data-testid="action-apply-template"] {
        top: ${buttonTop + 48 * 2}px;
      }
      [data-testid="cta-menu-link"] i {
        top: ${buttonTop + 48 * 3}px;
      }
      [data-testid="footer-actions-add-to-collection"] i {
        top: ${buttonTop + 48 * 4}px;
      }
      [data-testid="viewer-annotate-link"] i {
        top: ${buttonTop + 48 * 5}px;
      }

      /* n views */
      .analytics-section-overview[data-testid="analytics-section-overview"] {
        position: fixed;
        top: -18px;
        right: 128px;
        z-index: 1;
        display: flex !important;
        flex-direction: column;
        margin: 0px;
        min-width: 128px;
        background: transparent !important;
        box-shadow: none !important;
      }
      /* View all analytics dropdown */
      .analytics-section {
        position: fixed;
        top: 64px;
        right: 64px;
        margin: 0px !important;
      }

      /* Anyone can comment checkbox */
      #comments-enable-form {
        position: fixed;
        top: 4px;
        right: 256px;
        z-index: 1;
      }
      #comments-enable-form .bottom-section {
        display: flex;
        flex-direction: row-reverse;
        background: transparent;
        box-shadow: none;
      }
      #comments-enable-form .bottom-section input {
        margin: 0px 8px;
      }

      .comments-section {
        padding: 24px 24px 24px 96px !important;
      }

      #beacon-container .BeaconFabButtonFrame {
        right: 8px;
        bottom: 8px;
      }
      #beacon-container .BeaconContainer {
        right: 8px;
        bottom: 75px;
      }
    }

    /* Hide toolbox buttons when height <= 700 */
    @media screen and (min-width: 600px) and (max-height: 700px) {
      #shareDropModal i,
      [data-testid="footer-actions-download"] i,
      [data-testid="action-apply-template"],
      [data-testid="cta-menu-link"] i,
      [data-testid="viewer-annotate-link"] i,
      [data-testid="footer-actions-add-to-collection"] i {
        display: none !important;
      }
    }
  `;

  document.head.appendChild(style);
})();
