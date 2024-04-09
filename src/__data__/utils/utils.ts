import moment from 'moment';

export const uniqueKey = (name: any, i: number) => `${name}+${i}`;

export const getDate = (date: string) => {
    const newDate = new Date(date);

    const getWeek = Math.floor(Number(date.slice(0, 2)) / 7) + 1;

    const month = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];

    const getMonth = month[Number(moment(newDate).format('M')) - 1];

    return `${moment(newDate).format('dddd')}, ${getWeek} неделя ${getMonth}, ${moment(newDate).format(
        'YYYY'
    )} года`;
};
