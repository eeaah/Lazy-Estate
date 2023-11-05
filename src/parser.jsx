import React, { CSSProperties, useEffect } from 'react';
import Papa from 'papaparse'

export default function ParseCSV() {
    useEffect(() => {
        const fetchParseData = async() => {
            Papa.parse('./src/data/HomeBuyerInfo.csv', {
                download: true,
                header: false,
                complete: ((result) => {
                    console.log(result)
                })
            })
        }
        fetchParseData()
    }, [])
}