import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface CustomDialogHeaderProps {
  Icon?: LucideIcon;
  title?: string;
  subTitle?: string;
  iconClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function CustomDialogHeader({
  Icon,
  title,
  subTitle,
  iconClassName,
  titleClassName,
  subtitleClassName,
}: CustomDialogHeaderProps) {
  return (
    <DialogHeader>
      <DialogTitle asChild>
        <div className="mb-2 flex flex-col items-center gap-2">
          {Icon && (
            <Icon
              size={30}
              className={cn('text-xl text-primary', iconClassName)}
            />
          )}
          {title && (
            <p className={cn('text-xl text-primary', titleClassName)}>
              {title}
            </p>
          )}
          {subtitleClassName && (
            <p
              className={cn('text-sm text-muted-foreground', subtitleClassName)}
            >
              {subTitle}
            </p>
          )}
        </div>
      </DialogTitle>
      <Separator />
    </DialogHeader>
  );
}
