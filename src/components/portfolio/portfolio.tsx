import React from "react";
import styles from "./page.module.css";
import { client } from "@/utils/configSanity";
import { PortableText } from "@portabletext/react";

interface IPortfolio {
  _id: string;
  title: string;
  description: any;
  _createdAt: string;
}

async function getData() {
  const query = `*[_type == 'portfolio']`;
  const data = await client.fetch(query);
  return data as IPortfolio[];
}

const Portfolio = async () => {
  const data = (await getData()) as IPortfolio[];
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Portfolio</h1>
      <div className={styles.items}>
        {data?.map((item) => (
          <div key={item?._id} className={styles.item}>
            <div>
              <span className={styles.title}>{item?.title}</span>
            </div>
            <div>
              <span className={styles.desc}>
                <PortableText value={item?.description} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
