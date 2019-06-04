window.onload = function (){
    
}

function init(){
    let httpRequest

    function requester(){
        httpRequest = new XMLHttpRequest()


        httpRequest.onreadystatechange = processContents
        httpRequest.open("GET", "http://data.fixer.io/api/latest?   access_key=23c828e6fb4613f75a56c77ffaa7dfc5&&symbols=USD,GBP,CAD")
        httpRequest.send()

    }


    function createCards(items){
        console.log(items)
        let cardDeck = document.querySelector(".container > .card-deck")
        let cards = ''

        for(let item in items){
            if(item.hasOwnProperty(item)){
                cards += `<div class="card mb-4 shadow-sm">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Free</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                    </ul>
                    <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                </div>
            </div>`
            }
        }
        cardDeck.innerHTML = cards
    }

    makeRequest()
}