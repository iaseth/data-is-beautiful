


export function toGoodId(input: string): string {
	return input
		.toLowerCase()
		.replace(/&/g, 'and')                 // replace & with 'and'
		.replace(/['"]/g, '')                 // remove apostrophes and quotes
		.replace(/[^a-z0-9]+/g, '-')          // replace non-alphanumeric sequences with hyphen
		.replace(/^-+|-+$/g, '')              // trim leading/trailing hyphens
}
