"use client";
import React, { useState, useEffect } from 'react';
import styles from '../styles/Calculator.module.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (value) => {
        if (value === '=') {
            calculateResult();
        } else if (value === 'C') {
            setInput('');
        } else if (value === 'Del') {
            handleBackspace();
        } else if (value === 'π') {
            setInput(input + Math.PI);
        } else if (value === '?') {
            setShowPopup(true);
        } else {
            setInput(input + value);
        }
    };

    useEffect(() => {
        if (showPopup) {
            const timer = setTimeout(() => {
                setShowPopup(false);
            }, 3000); 

            return () => clearTimeout(timer); 
        }
    }, [showPopup]);

    const calculateResult = () => {
        const lastCharacter = input.trim().slice(-1);
        if (!isNaN(parseFloat(lastCharacter))) {
            try {
                setInput(eval(input).toString());
            } catch (e) {
                alert(`Houve um erro no cálculo, tente novamente.`);
                setInput('')
            }
        } else {
            alert('Insira um número válido antes de calcular o resultado');
        }
    };

    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    };

    return (
        <div className={styles.calculator}>
          <input type="text" value={input} readOnly className={styles.display} />
          <div className={styles.buttons}>
            {['C', 'π', 'Del', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '?', '0', '.', '='].map((btn, idx) => (
              <button key={idx} onClick={() => handleClick(btn)} className={styles.button}>
                {btn}
              </button>
            ))}
          </div>
          <div className={`${styles.popup} ${showPopup ? styles.active : ''}`}>
            <p>Calculadora criada por Felipe dos Santos Palmeira</p>
            <p>Versão: 1.0</p>
            <button onClick={() => setShowPopup(false)}>Fechar</button>
          </div>
        </div>
      );
};

export default Calculator;