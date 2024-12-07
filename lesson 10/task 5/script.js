//#LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається
// інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити
// в консоль, а малювати в DOM

const sessions = localStorage.getItem('sessions');
const data = sessions ? JSON.parse(sessions) : [];

data.push({
    date: new Date()
});

localStorage.setItem('sessions', JSON.stringify(data));