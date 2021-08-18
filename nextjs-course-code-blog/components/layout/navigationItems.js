import Link from 'next/link';
import { Fragment } from 'react';

function NavigationItems(props) {
    const { items } = props;
    console.log(items)
    return props.items.map((item) => {
        return (
            <Fragment>
                <li>
                    <Link href={item.link}>{item.title}</Link>
                </li>
            </Fragment>
        )
    })
}

export default NavigationItems;

