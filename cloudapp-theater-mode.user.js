// ==UserScript==
// @name         CloudApp Theater Mode
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  CloudApp theater mode UI redesign. Maximum size video, and move toolbox buttons into nav bar.
// @author       colder
// @homepage     https://github.com/cncolder
// @updateURL    https://github.com/cncolder/userscripts/raw/main/cloudapp-theater-mode.user.js
// @match        https://share.getcloudapp.com/*
// @icon         https://public.getcloudapp.com/packs/media/images/cloudapp-favicon-d053fc47958e1b85c892b5de0d7ac93a.png
// @grant        none
// ==/UserScript==

/* eslint-disable */

(function () {
  "use strict";

  const css = String.raw;
  const top = 248;

  const style = document.createElement("style");

  style.id = "cloudAppRedesign";
  style.textContent = css`
    #viewer-item,
    .cta-container.below {
      padding: 2px 0px !important;
    }

    .viewer-main-container .sidebar-right {
      position: absolute !important;
      left: -9999px;
    }

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
      top: ${top}px;
    }
    [data-testid="footer-actions-download"] i {
      top: ${top + 48 * 1}px;
    }
    [data-testid="action-apply-template"] {
      top: ${top + 48 * 2}px;
    }
    [data-testid="cta-menu-link"] i {
      top: ${top + 48 * 3}px;
    }
    [data-testid="viewer-annotate-link"] i {
      top: ${top + 48 * 4}px;
    }
    [data-testid="footer-actions-add-to-collection"] i {
      top: ${top + 48 * 5}px;
    }

    .analytics-section-overview[data-testid="analytics-section-overview"] {
      position: fixed;
      top: -10px;
      right: 512px;
      z-index: 1;
      margin: 0px;
      width: 256px;
      background: transparent !important;
      box-shadow: none !important;
    }
    .analytics-section {
      position: fixed;
      top: 64px;
      right: 512px;
      margin: 0px !important;
    }

    #comments-enable-form {
      position: fixed;
      top: 4px;
      right: 196px;
      z-index: 1;
      width: 256px;
    }
    #comments-enable-form .bottom-section {
      background: transparent;
      box-shadow: none;
    }

    .comments-section {
      padding: 40px !important;
    }

    #beacon-container .BeaconFabButtonFrame {
      right: 8px;
      bottom: 8px;
    }
    #beacon-container .BeaconContainer {
      right: 8px;
      bottom: 75px;
    }
  `;

  document.head.appendChild(style);
})();
