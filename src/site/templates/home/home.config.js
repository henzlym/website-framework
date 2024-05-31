const _ = require('lodash');
const config = require(`@root/site.config.json`);
const psi = require(`@root/psi.json`);

const { analysisUTCTimestamp, id: reportId, lighthouseResult } = psi;
const { audits, categories } = lighthouseResult;

const categories_descriptions = {
	performance:
		"The Performance category in Google PageSpeed Insights measures your site's speed, interactivity, and visual stability, providing a score based on these factors. It also offers actionable suggestions to enhance user experience, SEO, and conversion rates.",
	accessibility:
		'he Accessibility category evaluates how easily users, including those with disabilities, can navigate and interact with your site, providing a score and recommendations to improve inclusivity and usability.',
	'best-practices':
		"The Best Practices category assesses your site's adherence to web development standards and security practices, offering a score and tips to enhance site reliability and safety.",
	seo: "The SEO category checks your site's adherence to search engine optimization best practices, giving a score and suggestions to improve visibility and ranking in search results."
};

const convertBracketsToLinks = (text) => {
	const linkRegex = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g;
	return text.replace(
		linkRegex,
		(match, text, url) =>
			`<a href="${url}" target="_blank" rel="noopener">${text}</a>`
	);
};

const parseString = (string) => {
	const textRegex = /`([^`]+)`/g;
	return string.replace(textRegex, (match, text) => `<code>${text}</code>`);
};

// Example usage:
const exampleText =
	'[Learn more about roles and required attributes](http://dequeuniversity.com/rules/axe/4.9/aria-required-attr)';

const getPerformanceScoreColor = (score) => {
	let className;

	if (score >= 0 && score < 50) {
		className =
			'bg-danger-subtle text-danger-emphasis border border-danger';
	} else if (score >= 50 && score < 70) {
		className =
			'bg-warning-subtle text-warning-emphasis border border-warning';
	} else {
		className = 'bg-success-subtle text-success-emphasis border-success';
	}

	return className;
};
const getPerformanceScoreCategory = (score) => {
	let category = '';

	if (score >= 0 && score < 49) {
		category = 'danger';
	} else if (score >= 50 && score < 89) {
		category = 'warning';
	} else {
		category = 'success';
	}

	return category;
};
const getAudits = (auditRefs) => {
	return auditRefs.map((auditRef) => {
		return (
			{
				...audits[auditRef.id],
				title: parseString(audits[auditRef.id].title),
				description: parseString(
					convertBracketsToLinks(audits[auditRef.id].description)
				),
				scoreCategory: getPerformanceScoreCategory(
					parseInt(audits[auditRef.id].score * 100)
				)
			} || null
		);
	});
};

/*
Get the performance lighthouseResult audits
audit groups allowed: diagnostics, metrics
*/
const getLightHousePerformanceAudit = () => {
	const {
		id,
		title,
		auditRefs,
		score: performanceScore
	} = categories.performance;
	const score = parseInt(performanceScore * 100);
	const auditsDiagnostics = auditRefs.filter(
		(auditRef) => auditRef.group == 'diagnostics'
	);
	return {
		id,
		title,
		auditRefs,
		active: 'active',
		className: `tab-${id}`,
		description: categories_descriptions['performance'],
		score,
		scoreClassName: getPerformanceScoreColor(score),
		scoreCategory: getPerformanceScoreCategory(score),
		data: {
			auditRefs: auditRefs || [],
			audits: getAudits(auditsDiagnostics)
		}
	};
};

const getLightHouseAudit = (
	category = 'accessibility',
	auditGroups = ['a11y-navigation', 'a11y-aria', 'a11y-best-practices']
) => {
	const { id, title, auditRefs, score: categoryScore } = categories[category];
	const score = parseInt(categoryScore * 100);
	const auditsDiagnostics = auditRefs.filter((auditRef) =>
		auditGroups.includes(auditRef.group)
	);
	return {
		id,
		title,
		auditRefs,
		active: 'active',
		className: `tab-${id}`,
		description: categories_descriptions[category],
		score,
		scoreClassName: getPerformanceScoreColor(score),
		scoreCategory: getPerformanceScoreCategory(score),
		data: {
			auditRefs: auditRefs || [],
			audits: getAudits(auditsDiagnostics)
		}
	};
};

const getPanels = () => {
	return [getLightHousePerformanceAudit(), getLightHouseAudit()];
};

module.exports = {
	label: 'Home',
	status: 'prototype',
	context: {
		page: {
			classes: '',
			mode: 'light'
		},
		report: {
			id: reportId,
			timestamp: analysisUTCTimestamp
		},
		panels: getPanels()
	},
	variants: []
};
