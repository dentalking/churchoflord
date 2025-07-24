"use client";

import { Eye, Smartphone, Monitor } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  content: React.ReactNode;
}

export function PreviewModal({
  open,
  onOpenChange,
  title,
  content,
}: PreviewModalProps) {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={deviceMode === 'desktop' ? 'max-w-4xl' : 'max-w-sm'}>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                {title} 미리보기
              </DialogTitle>
              <DialogDescription>
                실제 화면에서 어떻게 보이는지 확인하세요.
              </DialogDescription>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={deviceMode === 'desktop' ? 'default' : 'outline'}
                onClick={() => setDeviceMode('desktop')}
              >
                <Monitor className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant={deviceMode === 'mobile' ? 'default' : 'outline'}
                onClick={() => setDeviceMode('mobile')}
              >
                <Smartphone className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>
        <div className={`mt-4 ${deviceMode === 'mobile' ? 'max-w-[375px] mx-auto' : ''}`}>
          <div className="border rounded-lg p-4 bg-white">
            {content}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}