import React, { createContext, useContext, useEffect, useState } from "react";


const NewsData = createContext();
export const NewsState = () => {
  return useContext(NewsData);
};

const Conetext = ({ children }) => {
 const [mynews, setMynews] = useState([]);
 const [Txt, setTxt] = useState("");
  const [category, setCategory] = useState("sports");

  const NewsList = (category) =>
    `https://inshorts.deta.dev/news?category=${category}`;


    useEffect(() => {
       if(category === "national") setTxt("National");
       else if (category === "sports") setTxt("Sports");
       else if (category === "technology") setTxt("Technology");
       else if (category === "politics") setTxt("Politics");
       else if (category === "science") setTxt("Science");
       else if (category === "business") setTxt("Business");
       else if (category === "entertainment") setTxt("Entertainment");
       else if (category === "automobile") setTxt("Automobile");
       else if (category === "world") setTxt("World");
       else if (category === "startup") setTxt("Startup");
    }, [category]);


  const [mode, setMode] = useState("light");
  var togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.getElementById("root").style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.getElementById("root").style.backgroundColor = "#f8f9fa";
    }
  };

  return (
    <NewsData.Provider
      value={{ togglemode, mode, category, setCategory, mynews, setMynews, NewsList, Txt}}
    >
      {children}
    </NewsData.Provider>
  );
};

export default Conetext;
