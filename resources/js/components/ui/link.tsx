import { type VariantProps } from "class-variance-authority"
import { buttonVariants } from "./button"
import { InertiaLinkProps, Link } from "@inertiajs/react"
import { cn } from "@/lib/utils"


export function LinkButton({
  className,
  variant,
  size,
  ...props
}: Omit<InertiaLinkProps, "size"> &
  VariantProps<typeof buttonVariants>) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size , className }))}
      {...props}
    />
  )
}
