import { setYear, parseISO } from "date-fns";

/**
 * Recebe "2024-08-10" e retorna algo por exemplo "2025-08-10"
 **/

export function getFutureDate(date: string): Date {
  return setYear(parseISO(date), new Date().getFullYear() + 1);
}
