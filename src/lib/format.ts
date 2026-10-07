const copFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

/** Formatea un monto entero en pesos colombianos (ej. 145000 → "$145.000"). */
export function formatCop(amountCop: number): string {
  return copFormatter.format(amountCop);
}
