(() => {
  const measurementId = document.querySelector('meta[name="roast-register-ga4-id"]')?.content.trim() || "";
  const enabled = /^G-[A-Z0-9]+$/i.test(measurementId);
  const localPreview = ["", "localhost", "127.0.0.1"].includes(window.location.hostname);
  const debug = localPreview || new URLSearchParams(window.location.search).has("analyticsDebug");
  const storageKey = `roast-register:analytics:${measurementId}`;
  const events = [];
  let sentEvents = new Set();

  if (enabled) {
    try {
      sentEvents = new Set(JSON.parse(window.sessionStorage.getItem(storageKey) || "[]"));
    } catch {
      sentEvents = new Set();
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", measurementId, { send_page_view: false });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.append(script);
  }

  function remember(eventName) {
    sentEvents.add(eventName);
    if (!enabled) {
      return;
    }

    try {
      window.sessionStorage.setItem(storageKey, JSON.stringify(Array.from(sentEvents)));
    } catch {
      return;
    }
  }

  function track(eventName, properties = {}, options = {}) {
    if (options.once && sentEvents.has(eventName)) {
      return false;
    }

    if (options.once) {
      remember(eventName);
    }

    const eventProperties = {
      page_path: window.location.pathname,
      ...properties
    };
    const event = { name: eventName, properties: eventProperties };
    events.push(event);

    document.dispatchEvent(new CustomEvent("roast-register:analytics", { detail: event }));

    if (debug) {
      console.info(`[analytics] ${eventName} ${JSON.stringify(eventProperties)}`);
    }

    if (enabled) {
      window.gtag("event", eventName, eventProperties);
    }

    return true;
  }

  window.RoastRegisterAnalytics = Object.freeze({
    enabled,
    getEvents: () => events.map((event) => ({
      name: event.name,
      properties: { ...event.properties }
    })),
    track
  });

  track("visitor", {}, { once: true });
})();
