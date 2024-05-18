const dropdown = {
	title: 'Dropdown',
	context: {
		icon: '',
		items: ['Action', 'Another action', 'Something else here'],
		title: 'Dropdown button',
		classes: '',
		link_classes: ''
	},
	variants: [
		{
			name: 'multilevel',
			context: {
				classes: 'dropdown--coalition',
				title: 'About Us',
				url: '/about',
				icon: '',
				items: [
					{
						label: 'Our Team',
						url: '/about/team',
						icon: 'team'
					},
					{
						label: 'Mission',
						url: '/about/mission',
						icon: 'mission'
					},
					{
						label: 'Vision',
						url: '/about/vision',
						icon: 'vision',
						children: [
							{
								label: 'Goals',
								url: '#',
								icon: ''
							},
							{
								label: 'Plans',
								url: '#',
								icon: ''
							},
							{
								label: 'Focus',
								url: '#',
								icon: ''
							}
						]
					}
				]
			}
		}
	]
};

module.exports = dropdown;
