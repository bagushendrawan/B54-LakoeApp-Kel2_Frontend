/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegisterImport } from './routes/register'
import { Route as ProfileImport } from './routes/profile'
import { Route as ProdukImport } from './routes/produk'
import { Route as PesananImport } from './routes/pesanan'
import { Route as PengirimanImport } from './routes/pengiriman'
import { Route as PengaturanImport } from './routes/pengaturan'
import { Route as MetodeImport } from './routes/metode'
import { Route as LoginImport } from './routes/login'
import { Route as DetailOrderImport } from './routes/detail-order'
import { Route as CheckoutImport } from './routes/checkout'
import { Route as BuyerDashboardImport } from './routes/buyer-dashboard'
import { Route as BuyerImport } from './routes/buyer'
import { Route as AturTokoImport } from './routes/atur-toko'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const RegisterRoute = RegisterImport.update({
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const ProdukRoute = ProdukImport.update({
  path: '/produk',
  getParentRoute: () => rootRoute,
} as any)

const PesananRoute = PesananImport.update({
  path: '/pesanan',
  getParentRoute: () => rootRoute,
} as any)

const PengirimanRoute = PengirimanImport.update({
  path: '/pengiriman',
  getParentRoute: () => rootRoute,
} as any)

const PengaturanRoute = PengaturanImport.update({
  path: '/pengaturan',
  getParentRoute: () => rootRoute,
} as any)

const MetodeRoute = MetodeImport.update({
  path: '/metode',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const DetailOrderRoute = DetailOrderImport.update({
  path: '/detail-order',
  getParentRoute: () => rootRoute,
} as any)

const CheckoutRoute = CheckoutImport.update({
  path: '/checkout',
  getParentRoute: () => rootRoute,
} as any)

const BuyerDashboardRoute = BuyerDashboardImport.update({
  path: '/buyer-dashboard',
  getParentRoute: () => rootRoute,
} as any)

const BuyerRoute = BuyerImport.update({
  path: '/buyer',
  getParentRoute: () => rootRoute,
} as any)

const AturTokoRoute = AturTokoImport.update({
  path: '/atur-toko',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/atur-toko': {
      id: '/atur-toko'
      path: '/atur-toko'
      fullPath: '/atur-toko'
      preLoaderRoute: typeof AturTokoImport
      parentRoute: typeof rootRoute
    }
    '/buyer': {
      id: '/buyer'
      path: '/buyer'
      fullPath: '/buyer'
      preLoaderRoute: typeof BuyerImport
      parentRoute: typeof rootRoute
    }
    '/buyer-dashboard': {
      id: '/buyer-dashboard'
      path: '/buyer-dashboard'
      fullPath: '/buyer-dashboard'
      preLoaderRoute: typeof BuyerDashboardImport
      parentRoute: typeof rootRoute
    }
    '/checkout': {
      id: '/checkout'
      path: '/checkout'
      fullPath: '/checkout'
      preLoaderRoute: typeof CheckoutImport
      parentRoute: typeof rootRoute
    }
    '/detail-order': {
      id: '/detail-order'
      path: '/detail-order'
      fullPath: '/detail-order'
      preLoaderRoute: typeof DetailOrderImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/metode': {
      id: '/metode'
      path: '/metode'
      fullPath: '/metode'
      preLoaderRoute: typeof MetodeImport
      parentRoute: typeof rootRoute
    }
    '/pengaturan': {
      id: '/pengaturan'
      path: '/pengaturan'
      fullPath: '/pengaturan'
      preLoaderRoute: typeof PengaturanImport
      parentRoute: typeof rootRoute
    }
    '/pengiriman': {
      id: '/pengiriman'
      path: '/pengiriman'
      fullPath: '/pengiriman'
      preLoaderRoute: typeof PengirimanImport
      parentRoute: typeof rootRoute
    }
    '/pesanan': {
      id: '/pesanan'
      path: '/pesanan'
      fullPath: '/pesanan'
      preLoaderRoute: typeof PesananImport
      parentRoute: typeof rootRoute
    }
    '/produk': {
      id: '/produk'
      path: '/produk'
      fullPath: '/produk'
      preLoaderRoute: typeof ProdukImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AturTokoRoute,
  BuyerRoute,
  BuyerDashboardRoute,
  CheckoutRoute,
  DetailOrderRoute,
  LoginRoute,
  MetodeRoute,
  PengaturanRoute,
  PengirimanRoute,
  PesananRoute,
  ProdukRoute,
  ProfileRoute,
  RegisterRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/atur-toko",
        "/buyer",
        "/buyer-dashboard",
        "/checkout",
        "/detail-order",
        "/login",
        "/metode",
        "/pengaturan",
        "/pengiriman",
        "/pesanan",
        "/produk",
        "/profile",
        "/register"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/atur-toko": {
      "filePath": "atur-toko.tsx"
    },
    "/buyer": {
      "filePath": "buyer.tsx"
    },
    "/buyer-dashboard": {
      "filePath": "buyer-dashboard.tsx"
    },
    "/checkout": {
      "filePath": "checkout.tsx"
    },
    "/detail-order": {
      "filePath": "detail-order.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/metode": {
      "filePath": "metode.tsx"
    },
    "/pengaturan": {
      "filePath": "pengaturan.tsx"
    },
    "/pengiriman": {
      "filePath": "pengiriman.tsx"
    },
    "/pesanan": {
      "filePath": "pesanan.tsx"
    },
    "/produk": {
      "filePath": "produk.tsx"
    },
    "/profile": {
      "filePath": "profile.tsx"
    },
    "/register": {
      "filePath": "register.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
