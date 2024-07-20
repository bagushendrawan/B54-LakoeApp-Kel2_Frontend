/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as Test1Import } from './routes/test1'
import { Route as TestImport } from './routes/test'
import { Route as IndexImport } from './routes/index'
import { Route as Test1ChildImport } from './routes/test1.child'
import { Route as SellerProdukImport } from './routes/seller/produk'
import { Route as SellerPesananImport } from './routes/seller/pesanan'
import { Route as SellerPengaturanImport } from './routes/seller/pengaturan'
import { Route as SellerDetailOrderImport } from './routes/seller/detail-order'
import { Route as SellerDashboardImport } from './routes/seller/dashboard'
import { Route as SellerAturTokoImport } from './routes/seller/atur-toko'
import { Route as SellerAddProductImport } from './routes/seller/add-product'
import { Route as BuyerDashboardImport } from './routes/buyer/dashboard'
import { Route as BuyerCheckoutImport } from './routes/buyer/checkout'
import { Route as BuyerAddCartImport } from './routes/buyer/add-cart'
import { Route as AuthRequestPasswordImport } from './routes/auth/request-password'
import { Route as AuthRegisterImport } from './routes/auth/register'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as AdminDashboardImport } from './routes/admin/dashboard'
import { Route as AuthChangePasswordTokenImport } from './routes/auth/change-password.$token'

// Create/Update Routes

const Test1Route = Test1Import.update({
  path: '/test1',
  getParentRoute: () => rootRoute,
} as any)

const TestRoute = TestImport.update({
  path: '/test',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const Test1ChildRoute = Test1ChildImport.update({
  path: '/child',
  getParentRoute: () => Test1Route,
} as any)

const SellerProdukRoute = SellerProdukImport.update({
  path: '/seller/produk',
  getParentRoute: () => rootRoute,
} as any)

const SellerPesananRoute = SellerPesananImport.update({
  path: '/seller/pesanan',
  getParentRoute: () => rootRoute,
} as any)

const SellerPengaturanRoute = SellerPengaturanImport.update({
  path: '/seller/pengaturan',
  getParentRoute: () => rootRoute,
} as any)

const SellerDetailOrderRoute = SellerDetailOrderImport.update({
  path: '/seller/detail-order',
  getParentRoute: () => rootRoute,
} as any)

const SellerDashboardRoute = SellerDashboardImport.update({
  path: '/seller/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const SellerAturTokoRoute = SellerAturTokoImport.update({
  path: '/seller/atur-toko',
  getParentRoute: () => rootRoute,
} as any)

const SellerAddProductRoute = SellerAddProductImport.update({
  path: '/seller/add-product',
  getParentRoute: () => rootRoute,
} as any)

const BuyerDashboardRoute = BuyerDashboardImport.update({
  path: '/buyer/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const BuyerCheckoutRoute = BuyerCheckoutImport.update({
  path: '/buyer/checkout',
  getParentRoute: () => rootRoute,
} as any)

const BuyerAddCartRoute = BuyerAddCartImport.update({
  path: '/buyer/add-cart',
  getParentRoute: () => rootRoute,
} as any)

const AuthRequestPasswordRoute = AuthRequestPasswordImport.update({
  path: '/auth/request-password',
  getParentRoute: () => rootRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  path: '/auth/register',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

const AdminDashboardRoute = AdminDashboardImport.update({
  path: '/admin/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const AuthChangePasswordTokenRoute = AuthChangePasswordTokenImport.update({
  path: '/auth/change-password/$token',
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
    '/test': {
      id: '/test'
      path: '/test'
      fullPath: '/test'
      preLoaderRoute: typeof TestImport
      parentRoute: typeof rootRoute
    }
    '/test1': {
      id: '/test1'
      path: '/test1'
      fullPath: '/test1'
      preLoaderRoute: typeof Test1Import
      parentRoute: typeof rootRoute
    }
    '/admin/dashboard': {
      id: '/admin/dashboard'
      path: '/admin/dashboard'
      fullPath: '/admin/dashboard'
      preLoaderRoute: typeof AdminDashboardImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/auth/register': {
      id: '/auth/register'
      path: '/auth/register'
      fullPath: '/auth/register'
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof rootRoute
    }
    '/auth/request-password': {
      id: '/auth/request-password'
      path: '/auth/request-password'
      fullPath: '/auth/request-password'
      preLoaderRoute: typeof AuthRequestPasswordImport
      parentRoute: typeof rootRoute
    }
    '/buyer/add-cart': {
      id: '/buyer/add-cart'
      path: '/buyer/add-cart'
      fullPath: '/buyer/add-cart'
      preLoaderRoute: typeof BuyerAddCartImport
      parentRoute: typeof rootRoute
    }
    '/buyer/checkout': {
      id: '/buyer/checkout'
      path: '/buyer/checkout'
      fullPath: '/buyer/checkout'
      preLoaderRoute: typeof BuyerCheckoutImport
      parentRoute: typeof rootRoute
    }
    '/buyer/dashboard': {
      id: '/buyer/dashboard'
      path: '/buyer/dashboard'
      fullPath: '/buyer/dashboard'
      preLoaderRoute: typeof BuyerDashboardImport
      parentRoute: typeof rootRoute
    }
    '/seller/add-product': {
      id: '/seller/add-product'
      path: '/seller/add-product'
      fullPath: '/seller/add-product'
      preLoaderRoute: typeof SellerAddProductImport
      parentRoute: typeof rootRoute
    }
    '/seller/atur-toko': {
      id: '/seller/atur-toko'
      path: '/seller/atur-toko'
      fullPath: '/seller/atur-toko'
      preLoaderRoute: typeof SellerAturTokoImport
      parentRoute: typeof rootRoute
    }
    '/seller/dashboard': {
      id: '/seller/dashboard'
      path: '/seller/dashboard'
      fullPath: '/seller/dashboard'
      preLoaderRoute: typeof SellerDashboardImport
      parentRoute: typeof rootRoute
    }
    '/seller/detail-order': {
      id: '/seller/detail-order'
      path: '/seller/detail-order'
      fullPath: '/seller/detail-order'
      preLoaderRoute: typeof SellerDetailOrderImport
      parentRoute: typeof rootRoute
    }
    '/seller/pengaturan': {
      id: '/seller/pengaturan'
      path: '/seller/pengaturan'
      fullPath: '/seller/pengaturan'
      preLoaderRoute: typeof SellerPengaturanImport
      parentRoute: typeof rootRoute
    }
    '/seller/pesanan': {
      id: '/seller/pesanan'
      path: '/seller/pesanan'
      fullPath: '/seller/pesanan'
      preLoaderRoute: typeof SellerPesananImport
      parentRoute: typeof rootRoute
    }
    '/seller/produk': {
      id: '/seller/produk'
      path: '/seller/produk'
      fullPath: '/seller/produk'
      preLoaderRoute: typeof SellerProdukImport
      parentRoute: typeof rootRoute
    }
    '/test1/child': {
      id: '/test1/child'
      path: '/child'
      fullPath: '/test1/child'
      preLoaderRoute: typeof Test1ChildImport
      parentRoute: typeof Test1Import
    }
    '/auth/change-password/$token': {
      id: '/auth/change-password/$token'
      path: '/auth/change-password/$token'
      fullPath: '/auth/change-password/$token'
      preLoaderRoute: typeof AuthChangePasswordTokenImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  TestRoute,
  Test1Route: Test1Route.addChildren({ Test1ChildRoute }),
  AdminDashboardRoute,
  AuthLoginRoute,
  AuthRegisterRoute,
  AuthRequestPasswordRoute,
  BuyerAddCartRoute,
  BuyerCheckoutRoute,
  BuyerDashboardRoute,
  SellerAddProductRoute,
  SellerAturTokoRoute,
  SellerDashboardRoute,
  SellerDetailOrderRoute,
  SellerPengaturanRoute,
  SellerPesananRoute,
  SellerProdukRoute,
  AuthChangePasswordTokenRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/test",
        "/test1",
        "/admin/dashboard",
        "/auth/login",
        "/auth/register",
        "/auth/request-password",
        "/buyer/add-cart",
        "/buyer/checkout",
        "/buyer/dashboard",
        "/seller/add-product",
        "/seller/atur-toko",
        "/seller/dashboard",
        "/seller/detail-order",
        "/seller/pengaturan",
        "/seller/pesanan",
        "/seller/produk",
        "/auth/change-password/$token"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/test": {
      "filePath": "test.tsx"
    },
    "/test1": {
      "filePath": "test1.tsx",
      "children": [
        "/test1/child"
      ]
    },
    "/admin/dashboard": {
      "filePath": "admin/dashboard.tsx"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx"
    },
    "/auth/register": {
      "filePath": "auth/register.tsx"
    },
    "/auth/request-password": {
      "filePath": "auth/request-password.tsx"
    },
    "/buyer/add-cart": {
      "filePath": "buyer/add-cart.tsx"
    },
    "/buyer/checkout": {
      "filePath": "buyer/checkout.tsx"
    },
    "/buyer/dashboard": {
      "filePath": "buyer/dashboard.tsx"
    },
    "/seller/add-product": {
      "filePath": "seller/add-product.tsx"
    },
    "/seller/atur-toko": {
      "filePath": "seller/atur-toko.tsx"
    },
    "/seller/dashboard": {
      "filePath": "seller/dashboard.tsx"
    },
    "/seller/detail-order": {
      "filePath": "seller/detail-order.tsx"
    },
    "/seller/pengaturan": {
      "filePath": "seller/pengaturan.tsx"
    },
    "/seller/pesanan": {
      "filePath": "seller/pesanan.tsx"
    },
    "/seller/produk": {
      "filePath": "seller/produk.tsx"
    },
    "/test1/child": {
      "filePath": "test1.child.tsx",
      "parent": "/test1"
    },
    "/auth/change-password/$token": {
      "filePath": "auth/change-password.$token.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
