const playlists = require(`@root/playlists.config.js`);

module.exports = {
	label: 'Tables',
	status: 'prototype',
	context: {
		head: {
			items: [
				{
					label: 'Title',
					classes: ''
				},
				{
					label: 'Artist',
					classes: ''
				},
				{
					label: 'Album',
					classes: ''
				},
				{
					label: 'Date Added',
					classes: ''
				},
				{
					label: 'Time',
					classes: ''
				}
			]
		},
		rows: {
			items: playlists
		}
	}
};
