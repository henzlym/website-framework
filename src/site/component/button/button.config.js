const button = {
	title: 'Button',
	status: 'prototype',
	collated: false,
	context: {
		title: 'Button Text',
		classes: '',
		icon: '',
		aria_label: '',
		icon_classes: ''
	},
	variants: [
		{
			name: 'primary',
			context: {
				classes: 'btn-primary'
			}
		},
		{
			name: 'secondary',
			context: {
				classes: 'btn-secondary'
			}
		},
		{
			name: 'link',
			context: {
				classes: 'btn-link'
			}
		}
	]
};

module.exports = button;
