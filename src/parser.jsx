import React, { CSSProperties, useEffect } from "react";
import Papa from "papaparse";

let mincome = []
let ccpay = []
let carpay = []
let slpay = []
let appv = []
let dpay = []
let lamt = []
let mmpay = []
let cscore = []

export default function ParseCSV() {
  useEffect(() => {
    const fetchParseData = async () => {
      Papa.parse("./src/data/HomeBuyerInfo.csv", {
        download: true,
        header: false,
        complete: (result) => {
            console.log(result)
            const arr = [...result.data]
            mincome = arr.map((d) => d[1]);
            ccpay = arr.map(d => d[2]);
            carpay = arr.map(d => d[3]);
            slpay = arr.map(d => d[4]);
            appv = arr.map(d => d[5]);
            dpay = arr.map(d => d[6]);
            lamt = arr.map(d => d[7]);
            mmpay = arr.map(d => d[8]);
            cscore = arr.map(d => d[9]);
        },
      });
    };
    fetchParseData();
  }, []);
}

export {mincome, ccpay, carpay, slpay, appv, dpay, lamt, mmpay, cscore}