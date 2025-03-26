if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}

document.getElementById('notifyBtn').addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        new Notification('Hello! This is a notification from your PWA.');
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification('Hello! This is a notification from your PWA.');
            }
        });
    }
});