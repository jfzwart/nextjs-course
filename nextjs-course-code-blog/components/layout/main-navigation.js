import Link from "next/link";
import Logo from "./logo";
import classes from './main-navigation.module.css'
import NavigationItems from "./navigationItems";

const HEADERITEMS = [
	{link: '/posts', title: 'Posts'},
	{link: '/contacts', title: 'Contacts'},
]

function MainNavigation() {
	return (
		<header className={classes.header}>
			<Link href='/'>
				<a>
					{" "}
					<Logo />
				</a>
			</Link>
			<nav>
				<ul>
					<NavigationItems items={HEADERITEMS}/>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
