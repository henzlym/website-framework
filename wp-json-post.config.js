const url = 'http://wordpress.framework.test/wp-json/wp/v2/posts';

function makeSynchronousRequest(url) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false); // false makes the request synchronous
	xhr.send(null);

	if (xhr.status === 200) {
		return xhr.responseText;
	}
}
const data = makeSynchronousRequest(url);
console.log(data);
module.exports = data;
