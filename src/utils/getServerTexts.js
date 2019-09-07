
const getText = (textId) => {
  const url = `/texts/${textId}`;
  const myRequest = new XMLHttpRequest();
  myRequest.overrideMimeType('json/text');
  return new Promise((resolve, reject) => {
		myRequest.onreadystatechange = function () {
			if (myRequest.readyState !== 4) return;
			if (myRequest.status >= 200 && myRequest.status < 300) {
        const { responseText } = myRequest;
        const realData = JSON.parse(responseText);
        resolve(realData);
			} else {
        console.log('Request failed!');
				reject({
					status: myRequest.status,
					statusText: myRequest.statusText
				});
			}
		};

    myRequest.open("GET", url);
    myRequest.send();
  });
};

export default getText;
