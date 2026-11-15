export const MAX_GUESTS = 50;
export const tiers = [
  { id: 'essential', name: 'Essential', label: 'Thoughtful foundations for your celebration.', perGuest: 10000, features: ['Wedding concept & planning', 'Essential décor & styling', 'Vendor coordination', 'On-the-day checklist'] },
  { id: 'signature', name: 'Signature', label: 'A little extra, thoughtfully considered.', perGuest: 25000, features: ['Everything in Essential', 'Custom theme & floral styling', 'Curated food & beverage planning', 'On-site event coordination'] },
  { id: 'premium', name: 'Premium', label: 'A considered finish, down to the detail.', perGuest: 40000, features: ['Everything in Signature', 'Statement décor & lighting', 'Elevated dining planning', 'Photography & entertainment coordination'] },
] as const;
export type TierId = typeof tiers[number]['id'];
export function estimateBudget(guests: number, tierId: TierId) {
  const count = Math.min(MAX_GUESTS, Math.max(1, Math.round(Number.isFinite(guests) ? guests : 1)));
  const tier = tiers.find((item) => item.id === tierId) ?? tiers[0];
  return { guests: count, perGuest: tier.perGuest, guestCosts: count * tier.perGuest, total: count * tier.perGuest };
}
export const currency = (amount: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);