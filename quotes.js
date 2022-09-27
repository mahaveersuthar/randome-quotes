        const quotes = document.getElementById('quotes');
        const author = document.getElementById('author');
        const btn = document.getElementById('btn');
        let realdata = "";
        const sharebtn = document.getElementById('share-btn');
        const openWhatsapp = () => {
            window.open(`whatsapp://send?text=${quotesData.text}`);
        }


        const getNewQutotes = async () => {
            let rnum = Math.floor(Math.random() * realdata.length)
            quotesData = realdata[rnum];

            quotes.innerText = `${quotesData.text}`;
            quotesData.author == null
                ? (author.innerText = "Unknown")
                : (author.innerHTML = `${quotesData.author}`);
        }
        const getQuotes = async () => {
            const api = "https://type.fit/api/quotes";
            try {
                let data = await fetch(api);
                realdata = await data.json();
                getNewQutotes();
            } catch (error) {console.log(error); }
        };
        sharebtn.addEventListener("click" ,openWhatsapp);
        btn.addEventListener("click", getNewQutotes);
        getQuotes();