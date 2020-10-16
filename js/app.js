const bags = ['Тоут', 'Шоппер', 'Хобо', 'Мессенджер', 'Планшет', 'Дипломат', 'Купол', 'Сэдл', 'Мешок', 'Кисет', 'Ведро', 'Торба', 'Клатч', 'Конверт', 'Минодьер', 'Фолдовер', 'Ридикюль', 'Таблетка', 'Бокс', 'Корзинка', 'Сэтчел', 'Рюкзак', 'Слинг', 'Уикендер', 'Чемодан', 'Саквояж', 'Дафл', 'Бельтбэг', 'Муфта', 'Багет'];
const artists = ['Моне', 'Винчи', 'Гог', 'Пикассо', 'Рубенс', 'Ренуар', 'Санти', 'Рейн', 'Дали', 'Боттичелли', 'Гоген', 'Буанаротти', 'Климт', 'Мунк', 'Сезанн', 'Мане', 'Босх', 'Матисс', 'Кало', 'Гойя', ]
const nickWrap = document.querySelector('.nick-generator');
const generateNick = document.querySelector('.btn-generator');

const typeWriter = new Typewriter(nickWrap, {
    loop: false,
    blinkSpeed: 50,
    cursor: "_"
});

const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
}

const deleteNick = () => {
    if(nickWrap.innerText) {
        typeWriter.deleteAll();
    }
}

const renderNick = (nick) => typeWriter.typeString(nick).pauseFor(2500).start();

const getNick = () => {
    let randomNumberArtist = randomNumber(artists.length);
    let randomNumberBag = randomNumber(bags.length);
    let newNick = `${bags[randomNumberBag]} ${artists[randomNumberArtist]}`
    deleteNick();
    renderNick(newNick);
}

const init = () => {
    generateNick.addEventListener("click", getNick);
}   

window.onload = function() {
    init();
}
