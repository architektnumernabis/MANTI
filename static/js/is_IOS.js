//script that changes bacground-attachment to scroll on iOS devices
function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

if (iOS() == true) {
    document.getElementById("header").style.backgroundAttachment = "scroll";
}