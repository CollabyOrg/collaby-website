'use client';

import styles from '../styles/blogPage.module.css';
import { FC, useState, ChangeEvent } from 'react';

interface Props {}

const BlogPage: FC<Props> = ({}) => {
  const [countries, setCountries] = useState<any[] | null>(null);

  const handleTextChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${e.target.value}`
    );
    const jsonRes = await res.json();
    setCountries(jsonRes);
  };

  return (
    <>
      <div className={styles.bgImage} />
      <div className={styles.outerContainer}>
        <input
          type='text'
          placeholder='Search countries'
          onChange={handleTextChange}
        />
        {countries !== null &&
          countries.length > 0 &&
          countries.map((country, i) => {
            return (
              <div
                className={styles.countryCardContainer}
                key={country.fifa}
              >
                <span>`Common name: ${country.name.common}`</span>
                <span>`Official name: ${country.name.official}`</span>
                <span>`Region: ${country.region}`</span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default BlogPage;
