import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/shadcn';

const buttonContainerVariants = cva(
  'pointer-events-none w-full transition-[padding,_margin] duration-300',
  {
    variants: {
      variant: {
        default: '',
        'reflective-3d': '',
        destructive: '',
        outline: '',
        secondary: '',
        ghost: '',
        link: '',
      },
      size: {
        default: '',
        sm: '',
        lg: 'py-2 hover:py-0 md:hover:-mx-2',
        '2xl': 'py-3 hover:py-0 md:hover:-mx-3',
        icon: '',
      },
    },
  },
);

const buttonVariants = cva(
  'pointer-events-auto relative inline-flex w-full select-none items-center justify-center overflow-hidden whitespace-nowrap border-2 px-8 py-4 font-medium text-primary-foreground ring-offset-background transition-colors text-shadow-stroke-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-yellow-700 bg-yellow-500',
        'reflective-3d':
          'border-yellow-700 bg-yellow-500 font-new-athletic-m54 transition-[margin,_box-shadow] duration-300 before:absolute before:left-0 before:top-0 before:h-24 before:w-[calc(100%_+_10rem)] before:-translate-x-full before:-rotate-45 before:animate-button-reflect-slide before:bg-white/30 hover:shadow-button-0',
        destructive:
          'border-red-700 bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 rounded-lg px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-20 rounded-lg border-4 px-6 text-3xl shadow-yellow-800-button-8 hover:ml-2 hover:mt-4',
        '2xl':
          'h-28 rounded-2xl border-[6px] px-10 text-4xl shadow-yellow-800-button-12 hover:ml-3 hover:mt-6 md:h-32 md:text-5xl md:hover:ml-6',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const isContainerNeeded = variant === 'reflective-3d';

    const Comp = asChild ? Slot : 'button';

    return isContainerNeeded ? (
      <div className={cn(buttonContainerVariants({ variant, size }))}>
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </div>
    ) : (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
