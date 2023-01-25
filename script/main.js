var btnGenerate = document.getElementById('btnGenerate');

btnGenerate.addEventListener('click', generateQuote);

function generateQuote(e){
    e.preventDefault();

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '458c7745dfmshdc10e716ee7399dp199d8ajsna7355c05b2cc',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };
    
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        .then(response => response.json())
        .then(response => {
            document.getElementById('txtQuote').innerHTML = '"' + response.content + '"';
            document.getElementById('txtName').innerHTML = '- ' + response.originator.name + ' -'  ;
            console.log(response)})
        .catch(err => console.error(err));
}

