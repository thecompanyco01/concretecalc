import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  
  // Redirect old Vercel subdomain to custom domain
  if (host.includes('concretecalc.vercel.app')) {
    const url = new URL(request.url);
    url.host = 'estimateconcrete.com';
    url.protocol = 'https:';
    return NextResponse.redirect(url.toString(), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
