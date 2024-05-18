const _ = require('lodash');
const moment = require('moment');
const playlists = _.reduce(
	require('@api/spotify/playlists.json').items,
	function (result, value, key) {
		const date_added = moment(_.get(value, 'item.streamStartDate', '')).format('Y');
		const duration = moment.unix(_.get(value, 'item.duration', 0)).format('mm:ss');

		result[key] = {
			title: _.get(value, 'item.title'),
			artist: _.get(value, 'item.artist.name', ''),
			album: _.get(value, 'item.album.title'),
			cover:
				'https://resources.tidal.com/images/' +
				_.get(value, 'item.album.cover').replaceAll('-', '/') +
				'/80x80.jpg',
			date_added: date_added,
			time: duration
		};
		// console.log(result);
		return result;
	},
	[]
);

module.exports = playlists;
