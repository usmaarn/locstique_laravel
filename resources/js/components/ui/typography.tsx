import { cn } from "@/lib/utils"
import React from "react"

export function TypographyH1({className, ...props}: React.ComponentProps<"h1">) {
    return (
      <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} {...props} />
    )
}

export function TypographyH2({className, ...props}: React.ComponentProps<"h2">) {
    return (
      <h2 className={cn("scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)} {...props} />
    )
}

export function TypographyH3({className, ...props}: React.ComponentProps<"h3">) {
    return (
      <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props} />
    )
}

export function TypographyH4({className, ...props}: React.ComponentProps<"h4">) {
    return (
      <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props} />
    )
}

export function TypographyP({className, ...props}: React.ComponentProps<"p">) {
    return (
      <p className={cn("leading-7", className)} {...props} />
    )
}

export function TypographyLead({className, ...props}: React.ComponentProps<"p">) {
    return (
      <p className={cn("text-xl text-muted-foreground", className)} {...props} />
    )
}

export function TypographySmall({className, ...props}: React.ComponentProps<"small">) {
    return (
      <small className={cn("text-sm font-medium leading-none", className)} {...props} />
    )
}


export function TypographyMuted({className, ...props}: React.ComponentProps<"p">) {
    return (
      <p className={cn("text-sm text-muted-foreground", className)} {...props} />
    )
}
