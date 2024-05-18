# CSS Rule of Order

```
.class_name {
	@include mixins;

	--custom-values: #{$blue};

	width: 100px;
	height: 100px;

	position: relative;
	top: 0;
	left: 0;

	align-items: center;
	border: 1px solid $black;
	border-radius: 50%;
	display: block;
	font-size: 10px;
	margin-block: 10px;
	padding-block: 10px;
	transform: translateX(10px);
	z-index: 1;

	&:before,
	&:after {

	}

	@include hover{

	}

	@media #{$min_md} {

	}
}
```

## External Packages

[Flaticon](https://www.npmjs.com/package/@flaticon/flaticon-uicons) - CSS

## Development Tools

[PostCSS Load Config](https://github.com/postcss/postcss-load-config) - CSS

## CMS Guides

[WordPress Developer Resources / CSS](https://developer.wordpress.org/advanced-administration/wordpress/css/#custom-css-in-wordpress)