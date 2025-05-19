

// List of Tailwind bg-500 class strings (these must be hardcoded)
const tailwindBgClasses = [
	"bg-red-500", "bg-orange-500", "bg-amber-500", "bg-yellow-500", "bg-lime-500",
	"bg-green-500", "bg-emerald-500", "bg-teal-500", "bg-cyan-500", "bg-sky-500",
	"bg-blue-500", "bg-indigo-500", "bg-violet-500", "bg-purple-500", "bg-fuchsia-500",
	"bg-pink-500", "bg-rose-500", "bg-neutral-500", "bg-stone-500", "bg-gray-500",
	"bg-zinc-500", "bg-slate-500"
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
