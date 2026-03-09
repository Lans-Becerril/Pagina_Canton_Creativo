import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const authHeader = req.headers.get('authorization');

    if (!authHeader) {
        return new NextResponse('Auth Required.', {
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Secure Area"',
            },
        });
    }

    const auth = authHeader.split(' ')[1];
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');

    // Credenciales temporales configuradas por el usuario
    if (user === 'nigga' && pwd === 'canton2026') {
        return NextResponse.next();
    }

    return new NextResponse('Auth Required.', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
    });
}

// Opcional: Configura qué rutas deben ser protegidas
// Por defecto el middleware se ejecuta en todas las rutas, pero podemos excluir assets estáticos
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - fondos (carpetas de assets locales)
         * - videosservicios (carpetas de videos locales)
         * - logos (carpetas de logos locales)
         * - portafolio (carpetas de imagenes locales)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|fondos|videosservicios|logos|portafolio).*)',
    ],
};
