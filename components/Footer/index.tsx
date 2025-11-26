// Footer disabled — this component now renders nothing.
// This avoids breaking imports while removing the entire footer.

const Footer = () => {
    return null; // No footer is rendered
};

export default Footer;


// ==============================
// Original footer code below (kept commented for reference)
// ==============================

// import { FC } from 'react';
// import Link from 'next/link';
// import styles from './Footer.module.css';

// const SocialLink: FC<{ url: string; imgSrc: string; altText: string }> = ({
//     url,
//     imgSrc,
//     altText,
// }) => {
//     return (
//         <Link href={url} className={styles.socialLink} target='_blank' rel='noopener noreferrer'>
//             <img
//                 className={styles.socialImage}
//                 width='24px'
//                 height='24px'
//                 src={imgSrc}
//                 alt={altText}
//             />
//         </Link>
//     );
// };

// /* const Footer = () => (
//     <>
//         <PressCoverage />
//         <footer className={styles.footerContainer}>
//             ...
//         </footer>
//     </>
// );

// export default Footer; */
