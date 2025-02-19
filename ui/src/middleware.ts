// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Add paths that don't require authentication
const PUBLIC_PATHS = ['/login', '/sventory-logo.svg'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('session');
  const org = request.cookies.get('org');
  const isPublicPath = PUBLIC_PATHS.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  // Redirect to login if accessing protected route without token
  if (!token && !isPublicPath) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect to org selection if accessing dashboard without org
  if (token && !org && !request.nextUrl.pathname.startsWith("/select-org") && !isPublicPath) {
    return NextResponse.redirect(new URL('/select-org', request.url));
  }

  // Redirect to dashboard if accessing login page with valid token
  if (token && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};