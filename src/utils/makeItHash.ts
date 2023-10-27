import crypto from "crypto";

function MakeItHash(value: string): string {
  const randomBytes = crypto.randomBytes(16).toString("hex");
  const hash = crypto.createHash("sha256");
  hash.update(value + randomBytes);
  const digest = hash.digest("hex");
  return digest.slice(0, 16);
}

export { MakeItHash };
