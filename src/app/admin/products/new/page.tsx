"use client";

import AdminProductForm from "@/components/admin/ProductForm";
import { useAdminAuth } from "@/hooks/use-admin-auth";

export default function AdminProductNewPage() {
  const { authenticated, loading } = useAdminAuth();

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
      </div>
    );

  if (!authenticated) return null;

  return <AdminProductForm isNew={true} />;
}
