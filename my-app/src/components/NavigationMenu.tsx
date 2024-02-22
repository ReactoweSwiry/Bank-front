"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
	{
		title: 'Home',
		href: '/home',
		description: 'Starting page'
	},
	{
		title: 'Accounts',
		href: '/home/accounts',
		description: 'Description for my account/accounts'
	},
	{
		title: 'Transactions',
		href: '/home/transactions',
		description: 'Transaction history'
	},
	{
		title: 'Payments & Transfers',
		href: '/home/transfers',
		description: 'Description for Payments & Transfers'
	},
	{
		title: 'Credit Cards',
		href: '/home/credit-cards',
		description: 'Description for Credit Cards'
	},
	{
		title: 'Account Services',
		href: '/home/services',
		description: 'Description for Account Services'
	},
]

export function NavigationMenuHome() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Services</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{components.map((component) => (
								<Link href={component.href} key={component.title}>
									<ListItem title={component.title}>
										{component.description}
									</ListItem>
								</Link>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/auth" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Logout
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"
