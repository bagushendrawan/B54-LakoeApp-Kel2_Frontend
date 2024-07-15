/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProfileImport } from './routes/profile'
import { Route as ProdukImport } from './routes/produk'
import { Route as PesananImport } from './routes/pesanan'
import { Route as PengirimanImport } from './routes/pengiriman'
import { Route as PengaturanImport } from './routes/pengaturan'
import { Route as MetodeImport } from './routes/metode'
import { Route as DetailOrderImport } from './routes/detail-order'
import { Route as AturTokoImport } from './routes/atur-toko'
import { Route as AdminImport } from './routes/admin'
import { Route as AddProductImport } from './routes/add-product'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

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

const DetailOrderRoute = DetailOrderImport.update({
  path: '/detail-order',
  getParentRoute: () => rootRoute,
} as any)

const AturTokoRoute = AturTokoImport.update({
  path: '/atur-toko',
  getParentRoute: () => rootRoute,
} as any)

const AdminRoute = AdminImport.update({
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any)

const AddProductRoute = AddProductImport.update({
  path: '/add-product',
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
    '/add-product': {
      id: '/add-product'
      path: '/add-product'
      fullPath: '/add-product'
      preLoaderRoute: typeof AddProductImport
      parentRoute: typeof rootRoute
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminImport
      parentRoute: typeof rootRoute
    }
    '/atur-toko': {
      id: '/atur-toko'
      path: '/atur-toko'
      fullPath: '/atur-toko'
      preLoaderRoute: typeof AturTokoImport
      parentRoute: typeof rootRoute
    }
    '/detail-order': {
      id: '/detail-order'
      path: '/detail-order'
      fullPath: '/detail-order'
      preLoaderRoute: typeof DetailOrderImport
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
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AddProductRoute,
  AdminRoute,
  AturTokoRoute,
  DetailOrderRoute,
  MetodeRoute,
  PengaturanRoute,
  PengirimanRoute,
  PesananRoute,
  ProdukRoute,
  ProfileRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/add-product",
        "/admin",
        "/atur-toko",
        "/detail-order",
        "/metode",
        "/pengaturan",
        "/pengiriman",
        "/pesanan",
        "/produk",
        "/profile"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/add-product": {
      "filePath": "add-product.tsx"
    },
    "/admin": {
      "filePath": "admin.tsx"
    },
    "/atur-toko": {
      "filePath": "atur-toko.tsx"
    },
    "/detail-order": {
      "filePath": "detail-order.tsx"
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
    }
  }
}
ROUTE_MANIFEST_END */
