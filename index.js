const refs = {
  form: document.querySelector("form"),
  resultRow: document.querySelector("span"),
};

const findUniqueSymbol = (word) => {
  const uniqueSymbols = [...word].filter(
    (symbol) => word.indexOf(symbol) === word.lastIndexOf(symbol)
  );
  return uniqueSymbols[0];
};

const textAnalysis = (text) => {
  const symbols = text.split(" ").map((word) => {
    if (word.includes("\n")) {
      const words = word.split("\n").map((word) => {
        return findUniqueSymbol(word);
      });
    } else {
      return findUniqueSymbol(word);
    }
  });
  return findUniqueSymbol(symbols.join(","));
};

const handleSubmit = (e) => {
  e.preventDefault();
  const text = e.currentTarget.elements[0].value;
  refs.resultRow.textContent = textAnalysis(text);
};

refs.form.addEventListener("submit", handleSubmit);
