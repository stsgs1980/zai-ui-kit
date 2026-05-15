/**
 * ZAI UI Kit - Class Name Utility
 * Combines clsx and tailwind-merge for optimal class handling
 */

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines class names with Tailwind CSS conflict resolution
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 *
 * @example
 * cn('px-4 py-2', 'px-6') // Returns 'py-2 px-6' (px-4 overridden)
 * cn('text-red-500', isActive && 'text-blue-500') // Conditional classes
 * cn(['base-class'], { 'active': isActive }) // Array and object syntax
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export default cn
