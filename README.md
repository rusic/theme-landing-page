# Rusic landing page theme

A blank Rusic theme with a dab of Sass and Coffee.

## Custom attributes

The landing page theme has the following custom attribtues available: 

- `google_analytics`
	- Default value: `<!-- GA code -->`
	- Help text: `Insert your full Google Analytics code`
- `logo`
	- Default value: `//rusic-landing-theme.s3.amazonaws.com/logo.svg`
	- Help text: `Full link to your logo`
- `heading`
	- Default value: `Our website is coming soon`
- `sub_heading`
	- Default value: `praesent ornare elit leo, non bibendum metus`
- `signup_message`
	- Default value: `Keep up to date by signing up with Twitter <em>or</em> Facebook`
	- Help text: `A message to prompt users to sign up`
- `thank_you_message`
	- Default value: `Thank you for signing up!`
	- Help text: `A message to display after they sign up`

You can output these calling them from the `space` object.

```
{{ space.attribute_name }}
```

## tl;dr


![](http://media.giphy.com/media/a2YMh46Z2ZScE/giphy.gif)