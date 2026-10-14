(() => {
  const measurementId = document.querySelector('meta[name="beanbound-ga4-id"]')?.content.trim() || "";
  const queue = [];

  function track(eventName, properties = {}) {
    const event = {
      event: eventName,
      properties,
      timestamp: new Date().toISOString()
    };

    queue.push(event);
    document.dispatchEvent(new CustomEvent("beanbound:analytics", { detail: event }));

    if (measurementId && typeof window.gtag === "function") {
      window.gtag("event", eventName, properties);
    }
  }

  if (measurementId) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.append(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { anonymize_ip: true });
  }

  window.BeanBoundAnalytics = Object.freeze({ track, queue });
  track("visitor", { page: "finder" });
})();
