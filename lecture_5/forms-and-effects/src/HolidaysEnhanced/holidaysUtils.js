export function createYears(count, anchorYear = new Date().getFullYear()) {
	if (count < 1) return [];
	return Array.from({ length: count }, (_, i) => anchorYear - i);
}
