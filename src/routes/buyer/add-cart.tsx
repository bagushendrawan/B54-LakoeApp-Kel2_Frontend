import { AddCartPage } from '@/buyer/pages/add-cart-page';
import { createFileRoute } from '@tanstack/react-router';
import { ProtectedRoute } from '../__root';

export const Route = createFileRoute('/buyer/add-cart')({
  component: () => (
    <ProtectedRoute>
      <Dashboard/>
    </ProtectedRoute>
  )
});

function Dashboard() {
  return (
    <>
      <AddCartPage />
    </>
  );
}