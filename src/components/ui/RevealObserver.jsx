"use client"
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    let io;

    const initIO = () => {
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
    };

    const markObserved = (el) => el.setAttribute('data-reveal-observed', 'true');
    const isObserved = (el) => el.getAttribute('data-reveal-observed') === 'true';

    const observeEl = (el) => {
      if (!el || isObserved(el)) return;
      try {
        io.observe(el);
        markObserved(el);
      } catch (e) {
        // ignore elements that can't be observed
      }
    };

    initIO();

    // Observe existing .reveal elements
    const observeAll = () => {
      const els = document.querySelectorAll('.reveal');
      els.forEach(observeEl);
    };

    observeAll();

    // Watch for newly added .reveal nodes and observe them
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.addedNodes && m.addedNodes.length) {
          m.addedNodes.forEach((node) => {
            if (node.nodeType !== 1) return;
            const el = node;
            if (el.classList && el.classList.contains('reveal')) {
              observeEl(el);
            }
            const nested = el.querySelectorAll && el.querySelectorAll('.reveal');
            if (nested && nested.length) {
              nested.forEach(observeEl);
            }
          });
        }
      }
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      if (io) io.disconnect();
    };
  }, []);

  return null;
}
