import Papa from 'react-papaparse'

const csv = await fetch('./src/data/HomeBuyerInfo.csv').then( res => res.text() );

const message = () => {
        Papa.parse(csv, {
            download: true,
            complete: function(results, file) {
                console.log("Parsing complete:", results, file);
            }
        })
};

export default message;