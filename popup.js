function onClick(info, tab) {
  var selectionText = info.selectionText;
  console.log("selection text: " + selectionText);

  var newURL = "http://stackoverflow.com/" + selectionText;
  chrome.tabs.create({ url: newURL });
}

var id = chrome.contextMenus.create({
  "title": "Open in CAL",
  "contexts":["selection"],
  "onclick": onClick
});
