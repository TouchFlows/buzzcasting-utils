export const minifyHtml = (html: string) => {
	return html
		.replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g, '')
		.replace(/\>\s*\</g, '><')
		.replace(/\t/g, '')
}

export const maxifyHtml = (html: string) => {
	return html.replace(/\>\</g,'>\n<');
}

export const minifyCss = (css: string) => {
	return css
		.replace(/\/\*.*\*\/|\/\*[\s\S]*?\*\/|\n|\t|\v|\s{2,}/g, '')
		.replace(/\s*\{\s*/g, '{')
		.replace(/\s*\}\s*/g, '}')
		.replace(/\s*\:\s*/g, ':')
		.replace(/\s*\;\s*/g, ';')
		.replace(/\s*\,\s*/g, ',')
		.replace(/\s*\~\s*/g, '~')
		.replace(/\s*\>\s*/g, '>')
		.replace(/\s*\+\s*/g, '+')
		.replace(/\s*\!\s*/g, '!')
}

export const maxifyCss = (css: string) => {
	return css.replace(/\,/g, ', ').replace(/\{/g, ' {\n\t').replace(/\}/g, '}\n').replace(/\;/g, ';\n\t')
}
