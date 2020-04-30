const copyText = document.getElementById("vmail-input");

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const tab = tabs[0];
  const url = new URL(tab.url)
  const domain = url.hostname
  const host = domain.split('.');
  const siteName = host.length === 3 ? host[1] : host[0];

  copyText.value = siteName + ".nchovies";
})

function copyVmailAddress() {
  const copyText2 = document.getElementById("domain");
  const output = document.getElementById("output");

  output.value = copyText.value + copyText2.innerText;
  output.select();
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + output.value);
}

document.getElementById("copy-button").onclick = copyVmailAddress;