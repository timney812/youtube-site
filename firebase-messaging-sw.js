self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow("https://timney812.github.io/youtube-site/")
  );
});
