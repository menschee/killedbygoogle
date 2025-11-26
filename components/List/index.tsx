import { ProductWithSlug } from 'types/Product';

import Item from 'components/List/Item';
import styles from './List.module.css';
import Link from 'next/link';


// Components now use CSS modules

export const FallbackAd = () => <></>;

type Props = {
    items: ProductWithSlug[]
}
export default List;
