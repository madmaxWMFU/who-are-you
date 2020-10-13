const bags = ['Тоут', 'Шоппер', 'Хобо', 'Мессенджер', 'Планшет', 'Дипломат', 'Купол', 'Сэдл', 'Мешок', 'Кисет', 'Ведро', 'Торба', 'Клатч', 'Конверт', 'Минодьер', 'Фолдовер', 'Ридикюль', 'Таблетка', 'Бокс', 'Корзинка', 'Сэтчел', 'Рюкзак', 'Слинг', 'Уикендер', 'Чемодан', 'Саквояж', 'Дафл', 'Бельтбэг', 'Муфта', 'Багет'];
const artists = ['Моне', 'Винчи', 'Гог', 'Пикассо', 'Рубенс', 'Ренуар', 'Санти', 'Рейн', 'Дали', 'Боттичелли', 'Гоген', 'Буанаротти', 'Климт', 'Мунк', 'Сезанн', 'Мане', 'Босх', 'Матисс', 'Кало', 'Гойя', ]

const nick = document.querySelector('.generate-nick');
const generateNick = document.querySelector('.btn-generate');


const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
}

const getNick = () => {
    let randomNumberArtist = randomNumber(artists.length);
    let randomNumberBag = randomNumber(bags.length);

    nick.innerText = ` ${bags[randomNumberBag]} ${artists[randomNumberArtist]}`;
}

const init = () => {
    generateNick.addEventListener("click", getNick);
}   

window.onload = function() {
    init();
}
