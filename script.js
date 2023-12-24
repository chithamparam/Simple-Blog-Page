@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    height: 100vh;
    color: #fff;
    background-color: #202020;
    padding: 50px;
}

body .container{
    max-width: 1000px;
}

body .container header{
    background: url(bg.jpg) center / cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 400px;
    padding: 20px 50px 60px;
    border-radius: 16px;
}

body .container header .category{
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
}

body .container header .info{
    text-align: center;
}

body .container header .info .tags i{
    font-size: 18px;
    margin-right: 4px;
}

body .container header .info .tags span{
    font-size: 0.8rem;
}

body .container header .info .title{
    margin: 20px 0;
    font-size: 3rem;
    font-weight: bold;
}

body .container header .info .subtitle{
    min-width: 70%;
    margin: 0 auto 20px;
    font-size: 1rem;
}

body .details{
    display: flex;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.14);
    margin-top: 50px;
    padding: 20px 50px;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.68);
}

body .details .item .item-title{
    color: #ccc;
}

body .details .item .item-text{
    margin-top: 12px;
    font-size: 1.5rem;
}

body article{
    margin-top: 50px;
    padding-bottom: 20px;
    line-height: 1.70;
}

body article h4{
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 1.25rem;
}

body article p{
    margin-bottom: 20px;
    color: #999;
    font-size: 1.1rem;
}

body article blockquote{
    margin: 40px 0;
    background-color: #181818;
    padding: 30px;
    border-radius: 16px;
}

@media screen and (max-width: 768px) {
    
    body .container header{
        padding: 10px 20px 30px;
        min-height: 300px;
    }

    body .container header .category{
        font-size: 0.9rem;
    }

    body .container header .info .title{
        font-size: 2.2rem;
    }

    body .container header .info .subtitle{
        font-size: 0.8rem;
    }

    body .container .details {
        flex-direction: column;
    }

    body .container .details .item:not(:last-child){
        margin-bottom: 30px;
    }

}
