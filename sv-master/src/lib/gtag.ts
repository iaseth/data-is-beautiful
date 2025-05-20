
declare global {
	interface Window {
		dataLayer: any[];
		gtag: (...args: any[]) => void;
	}
}

export function setupGtag () {
	if (!window.gtag) {
		window.dataLayer = window.dataLayer || [];
		window.gtag = (...args: any[]) => {
			window.dataLayer.push(args);
		};
	}
}

export function afterNavigateStuff () {
	window.gtag('event', 'page_view', {
		page_path: window.location.pathname,
		page_location: window.location.href,
		page_title: document.title
	});
}
