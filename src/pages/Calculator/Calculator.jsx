import React, { useState, useEffect } from 'react';
import Panell from './Panell';




function Calculator() {
  const [web, setWeb] = useState(false);
  const [seo, setSeo] = useState(false);
  const [publicitat, setPublicitat] = useState(false);
  const [numPages, setNumPages] = useState(1);
  const [numLanguages, setNumLanguages] = useState(1);

  useEffect(() => {
    const savedWeb = localStorage.getItem('web') === 'true';
    const savedSeo = localStorage.getItem('seo') === 'true';
    const savedPublicitat = localStorage.getItem('publicitat') === 'true';
    const savedNumPages = parseInt(localStorage.getItem('numPages')) || 1;
    const savedNumLanguages = parseInt(localStorage.getItem('numLanguages')) || 1;

    setWeb(savedWeb);
    setSeo(savedSeo);
    setPublicitat(savedPublicitat);
    setNumPages(savedNumPages);
    setNumLanguages(savedNumLanguages);
  }, []);



  const handleWebChange = (event) => {
    const isChecked = event.target.checked;
    setWeb(isChecked);
    localStorage.setItem('web', isChecked.toString());
  };

  const handleSeoChange = (event) => {
    const isChecked = event.target.checked;
    setSeo(isChecked);
    localStorage.setItem('seo', isChecked.toString());
  };

  const handlePublicitatChange = (event) => {
    const isChecked = event.target.checked;
    setPublicitat(isChecked);
    localStorage.setItem('publicitat', isChecked.toString());
  };

 const handleNumPagesChange = (value) => {
    setNumPages(value);
    localStorage.setItem('numPages', value.toString());
  };

  const handleNumLanguagesChange = (value) => {
    setNumLanguages(value);
    localStorage.setItem('numLanguages', value.toString());
  };

  const calcularTotal = () => {
    let total = 0;
    if (web) {
      total += 500 + numPages * numLanguages * 30;
    }
    if (seo) total += 300;
    if (publicitat) total += 200;
    return total;
  };

  return (
    <div className="App">
      <h1>Calculadora de Pressupost </h1>
      <div>
        <label>
          <input type="checkbox" checked={web} onChange={handleWebChange} />
          Pàgina web (500 €)
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={seo} onChange={handleSeoChange} />
          Campanya SEO (300 €)
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={publicitat} onChange={handlePublicitatChange} />
          Campanya de publicitat (200 €)
        </label>
      </div>
      {web && (
        <Panell
          numPages={numPages}
          numLanguages={numLanguages}
          handleNumPagesChange={handleNumPagesChange}
          handleNumLanguagesChange={handleNumLanguagesChange}
        />
      )}
      <h2>Preu total: {calcularTotal()} €</h2>

      
    </div>
  );
}

export default Calculator;