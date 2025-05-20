

// List of Tailwind bg-500 class strings (these must be hardcoded)
const tailwindBgClasses = [
	"bg-red-500", "bg-orange-500", "bg-amber-500", "bg-yellow-500", "bg-lime-500",
	"bg-green-500", "bg-emerald-500", "bg-teal-500", "bg-cyan-500", "bg-sky-500",
	"bg-blue-500", "bg-indigo-500", "bg-violet-500", "bg-purple-500", "bg-fuchsia-500",
	"bg-pink-500", "bg-rose-500", "bg-neutral-500", "bg-stone-500", "bg-gray-500",
	"bg-zinc-500", "bg-slate-500"
];

const tailwindTextClasses = [
	"text-red-500", "text-orange-500", "text-amber-500", "text-yellow-500", "text-lime-500",
	"text-green-500", "text-emerald-500", "text-teal-500", "text-cyan-500", "text-sky-500",
	"text-blue-500", "text-indigo-500", "text-violet-500", "text-purple-500", "text-fuchsia-500",
	"text-pink-500", "text-rose-500", "text-neutral-500", "text-stone-500", "text-gray-500",
	"text-zinc-500", "text-slate-500"
];

// Simple hash function to convert string to a number
function hashString(str: string): number {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = (hash << 5) - hash + str.charCodeAt(i);
		hash |= 0; // Convert to 32-bit integer
	}
	return Math.abs(hash);
}

// Returns a consistent Tailwind class string
export function getTailwindBgClass(text: string): string {
	const hash = hashString(text);
	return tailwindBgClasses[hash % tailwindBgClasses.length];
}

// Returns a consistent Tailwind class string
export function getTailwindTextClass(text: string): string {
	const hash = hashString(text);
	return tailwindTextClasses[hash % tailwindTextClasses.length];
}
