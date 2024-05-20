module.exports = (Ferdium) => {
  const getMessages = () => {
    let notifications = 0

    const notificationsElement = document.querySelector(
      '[id=container]>div>div>div:nth-child(2)>div>nav>div:nth-child(5)>div'
    )

    if (notificationsElement) {
      notifications += Ferdium.safeParseInt(notificationsElement.textContent)
    }

    Ferdium.setBadge(notifications)
  }

  Ferdium.loop(getMessages)

  // Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
}
