import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

type AdditionalClassGroupIDs = 'text-shadow';

const twMerge = extendTailwindMerge<AdditionalClassGroupIDs>({
  extend: {
    classGroups: {
      'text-shadow': [{ 'text-shadow': [() => true] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
