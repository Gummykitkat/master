import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered';
  colorScheme?: 'light' | 'dark';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', colorScheme = 'light', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-gray-200 bg-white text-gray-950 shadow",
        variant === 'elevated' && 'shadow-lg',
        variant === 'bordered' && 'border-2',
        colorScheme === 'dark' && 'bg-gray-900 text-white',
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: 'tight' | 'normal' | 'loose';
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, spacing = 'normal', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col",
        spacing === 'tight' && 'space-y-1',
        spacing === 'normal' && 'space-y-2',
        spacing === 'loose' && 'space-y-4',
        className
      )}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'normal' | 'large';
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, padding = 'normal', ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn(
        padding === 'none' && 'p-0',
        padding === 'normal' && 'p-6',
        padding === 'large' && 'p-8',
        className
      )} 
      {...props} 
    />
  )
)
CardContent.displayName = "CardContent"