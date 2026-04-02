import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { forwardRef } from "react";

const buttonVariants = cva(
  "group flex items-center justify-between w-full px-5 py-4 rounded-2xl backdrop-blur-sm transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-white/3 hover:bg-white/6",
        ghost: "bg-transparent hover:bg-white/3",
        solid: "bg-white/6 hover:bg-white/9",
      },
      border: {
        default: "border border-white/6 hover:border-white/12",
        none: "border-0",
        thick: "border-2 border-white/8 hover:border-white/16",
      },
    },
    defaultVariants: {
      variant: "default",
      border: "default",
    },
  }
);

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  showArrow?: boolean;
}

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant,
      border,
      icon,
      showArrow = true,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        className={clsx(buttonVariants({ variant, border }), className)}
        {...props}
      >
        <span className="flex items-center gap-3">
          {icon && (
            <span className="w-5 h-5 text-[#6a6a7a] group-hover:text-[#e8a87c] transition-colors duration-300 flex items-center justify-center">
              {icon}
            </span>
          )}
          <span className="text-[#e4e4e8] font-medium">{children}</span>
        </span>
        {showArrow && (
          <svg
            className="w-4 h-4 text-[#4a4a5a] group-hover:text-[#e8a87c] group-hover:translate-x-1 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </a>
    );
  }
);

Button.displayName = "Button";

export default Button;
