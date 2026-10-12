import { describe, expect, it } from "vitest";
import { formatCop } from "../src/lib/format";

describe("formatCop", () => {
  it("formatea un monto entero en COP sin decimales", () => {
    expect(formatCop(145000)).toBe("$\u00A0145.000");
  });

  it("formatea el cero", () => {
    expect(formatCop(0)).toBe("$\u00A00");
  });
});
