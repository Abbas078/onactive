import { NextRequest } from "next/server";

// Simple in-memory sliding window rate limiter
interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

/**
 * Basic rate limiting helper (windowMs: 60s, max 10 requests per IP)
 */
export function checkRateLimit(
  req: NextRequest,
  limit: number = 10,
  windowMs: number = 60 * 1000
): { success: boolean; remaining: number } {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "127.0.0.1";

  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, {
      count: 1,
      resetAt: now + windowMs,
    });
    return { success: true, remaining: limit - 1 };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0 };
  }

  record.count += 1;
  return { success: true, remaining: limit - record.count };
}

/**
 * Verify Admin Authorization Token via Bearer header or x-admin-key
 */
export function verifyAdminAuth(req: NextRequest): boolean {
  const adminApiKey = process.env.ADMIN_API_KEY;

  if (!adminApiKey) {
    // If no admin key is configured, reject all admin access for security
    return false;
  }

  const authHeader = req.headers.get("authorization");
  const xApiKey = req.headers.get("x-admin-key");

  if (xApiKey && xApiKey === adminApiKey) {
    return true;
  }

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.substring(7).trim();
    if (token === adminApiKey) {
      return true;
    }
  }

  return false;
}

/**
 * Generate human-readable clinical reference numbers
 * E.g. AGX-20241121-7B3K
 */
export function generateReferenceNumber(prefix: string = "AGX"): string {
  const today = new Date();
  const dateStr = today.toISOString().slice(0, 10).replace(/-/g, "");
  const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${dateStr}-${randomChars}`;
}

/**
 * Basic input sanitization
 */
export function sanitizeString(input: unknown): string {
  if (typeof input !== "string") return "";
  return input.trim().replace(/[<>]/g, "");
}
