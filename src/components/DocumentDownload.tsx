import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "@phosphor-icons/react";
import { toast } from "sonner";

interface DocumentDownloadProps {
  documentPath?: string;
  productName: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  showIcon?: boolean;
  showText?: boolean;
}

export default function DocumentDownload({
  documentPath,
  productName,
  variant = "outline",
  size = "default",
  showIcon = true,
  showText = true,
}: DocumentDownloadProps) {
  const handleDownload = () => {
    if (!documentPath) {
      toast.error("Dokumentace není k dispozici");
      return;
    }

    try {
      // Create a link element and trigger download
      const link = document.createElement("a");
      link.href = documentPath;
      link.download = `${productName}_parametry.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success(`Stahování dokumentace pro ${productName} zahájeno`);
    } catch (error) {
      console.error("Error downloading document:", error);
      toast.error("Chyba při stahování dokumentace");
    }
  };

  // If no documentation is available, don't render the button
  if (!documentPath) {
    return null;
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleDownload}
      className="gap-2"
    >
      {showIcon && <FileText className="w-4 h-4" />}
      {showText && "Stáhnout dokumentaci"}
      {showIcon && !showText && <Download className="w-4 h-4" />}
    </Button>
  );
}
