
import fs from 'fs';
import path from 'path';
import Header from "@/components/Header";
import Card from "@/components/Card";
import '@/styles/globals.scss'
import styles from './page.module.scss';
import { CardProvider } from '@/context/CardContext';



export default async function Home() {
  // Получаем данные с помощью fetch API
  const filePath = path.join(process.cwd(), 'src/data/data.json');
  const jsonData = await fs.promises.readFile(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  return (

    <>
      <Header />
      <CardProvider>
        <main className={styles.main}>
          <div className={styles.cards}>
            {data.cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </main>
      </CardProvider>
    </>


  );
}