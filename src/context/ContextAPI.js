import React, { useState, createContext } from "react";
import axios from "axios"

export const PowerHouse = createContext();

export const ContextFunc = ({ children }) => {

    const [menu, setMenu] = useState(false)
    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')
    const [previous, setPrevious] = useState([]);


    const Menubar = () => {
        return setMenu((prev) => !prev)
    }

    const TypingEffect = (i, NextWord) => {
        setTimeout(function () {
            setAnswer(prev => prev + " " + NextWord)
        }, 40 * i)
    }

    const loadPrompt = async (item) => {
        const prompt = item.value || item;
        setPrevious(prev => [...prev, prompt]);
        generateAnswer(prompt);
    };

    const ReloadData = () => {
        setAnswer('')
        setQuestion('')
    }

    async function generateAnswer(prompt) {
        console.log("Loading....");
        setPrevious(prev => {
            if (question && !prev.includes(question)) {
                return [...prev, question];
            }
            return prev;
        });
        setAnswer('Getting the information for you, just wait...')
        const response = await axios({
            url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAlThGbBLIN12r8WA6Em8sGNEwXjJ_atho',
            method: 'post',
            data: {
                "contents": [{
                    "parts": [{ "text": question || prompt }]
                }]
            }
        })

        let responsearr = response['data']['candidates'][0]['content']['parts'][0]['text']
        console.log(responsearr);
        let responseArry = responsearr.split('**');
        let newResponse = "";
        for (let i = 0; i < responseArry.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArry[i]
            }
            else {
                newResponse += "<b>" + responseArry[i] + "</b>"
            }
        }
        let breakText = newResponse.split('*').join('</br>');

        let codeArea = breakText.split('```');
        let newcodeArea = "";
        for (let i = 0; i < codeArea.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newcodeArea += codeArea[i]
            }
            else {
                newcodeArea += "<div className='overflow-auto h-100'  style={{width:'500px', height:'100%' }}><pre className='CodeArea' style={{ backgroundColor: '#f4f4f4', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>" + codeArea[i] + "</pre></div>"
            }
        }

        let newTypingText = newcodeArea.split(" ");
        for (let i = 0; i < newTypingText.length; i++) {
            const NextWord = newTypingText[i];
            TypingEffect(i, NextWord + '')

        }
        setQuestion('')
        setAnswer('')
    }



    return (
        <PowerHouse.Provider value={{ menu, Menubar, answer, generateAnswer, setQuestion, question, previous, setPrevious, loadPrompt,ReloadData}}>
            {children}
        </PowerHouse.Provider>
    );
};
