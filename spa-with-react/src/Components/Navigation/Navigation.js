import styles from './Navigation.module.css';
import Link from 'next/link'

const LINKS = [
    {href: '/', text:'Home', description: ''},
    {href: '/about', text: 'About', description: 'About EcoShare' },
    {href: '/renting', text: 'Renting', description: 'How it works' },
    {href: '/benefits', text: 'Benefits', description: 'Why use Ecoshare?'},
    {href: '/contact', text: 'Contact', description: 'Contact information for EcoShare' },
]

export default function Navigation() {
    return (<div className={styles.grid}>
           
           {/*<NavigationLink text="HEJ" href="/" description="Testar en beskrivning"/> */ }

           {LINKS.map(x => <NavigationLink key={x.href} {...x}/>)}

    </div>);
}

function NavigationLink({ text, href, description }) {
    return (<Link href={href}
        className={styles.card}>
            <h2>
                {text} <span>-&gt;</span>
            </h2>
            <p>{description}</p>
        </Link>)
}