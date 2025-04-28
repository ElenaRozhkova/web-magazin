'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from 'next/image';

const KartenData = () => {
    const [karten, setKarten] = useState([]);
    const [loading, setLoading] = useState(true);

    // Функция для получения данных с API
    useEffect(() => {
        axios
            .get("http://headless-wordpress-roschkowa.atwebpages.com/wp-json/wp/v2/karten")
            .then((response) => {
                setKarten(response.data); // Сохраняем данные в state
                setLoading(false); // Устанавливаем loading в false после загрузки
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
                setLoading(false); // Если ошибка, останавливаем загрузку
            });
    }, []); // Пустой массив зависимостей — значит, useEffect сработает только один раз

    // Если данные загружаются
    if (loading) {
        return <div>Loading...</div>;
    }

    // Если данные загружены, отображаем их
    return (
        <div>
            <h1>Karten</h1>
            <ul>
                {karten.map((item) => (
                    <li key={item.id}>
                        <h2>{item.title.rendered}</h2>
                        <p><strong>Subtitle:</strong> {item.acf.subtitle}</p>

                        <img
                            src={item.acf.bild_.url}
                            alt={item.acf.bild_.title}
                            style={{ width: "300px", height: "auto" }}
                        />
                        <img
                            src="https://i.postimg.cc/mgXrpbr9/ok.png"
                            alt="Test Image"
                            width="300"
                            height="200"
                        />
                        <Image
                            src="https://headless-wordpress-roschkowa.atwebpages.com/wp-content/uploads/2025/03/Vector-1-1.png"
                            alt="Vector Image"
                            width={300}
                            height={200}
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                        <p><strong>Link:</strong> <a href={item.acf.bild_.url} target="_blank" rel="noopener noreferrer">{item.link}</a></p>
                        <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default KartenData;
