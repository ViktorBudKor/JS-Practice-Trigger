var text = "Я изучаю JavaScript";
text = text.slice(0,7) + "O" + text.slice(8);
text = text.slice(0,text.indexOf("JavaScript"));
text += "Frontend"
console.log(text);
