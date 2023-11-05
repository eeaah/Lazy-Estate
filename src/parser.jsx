import React, { CSSProperties, useEffect } from 'react';

import Papa from 'papaparse'

const csv = await fetch('./src/data/bruh.csv').then( res => res.text());

export default function ParseCSV() {
    useEffect(() => {
        const fetchParseData = async() => {
            Papa.parse(csv, {
                download: true,
                header: false,
                delimiter: ",",
                complete: ((result) => {
                    console.log(result.data)
                })
            })
        }
        fetchParseData()
    }, [])
}