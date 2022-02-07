export const getTwoSignsDate = (dateElem) => dateElem < 10 ? `0${ dateElem}` : dateElem;

export const sortTranslationsByDate = (questions) => {
    if (!questions.length) {
        return {};
    }

    return questions.reduce((acc, question) => {
        const {
            data: {
                created_at: {
                    seconds
                }
            }
        } = question;

        const dateObj = new Date(seconds * 1000)
        const day = dateObj.getDate();
        const month = dateObj.getMonth();

        const dateNum = `${ dateObj.getFullYear() }${ getTwoSignsDate(month) }${ getTwoSignsDate(day) }`;

        if (!acc[dateNum]) {
            acc[dateNum] = {
                date: dateObj,
                items: [question]
            }
        } else {
            acc[dateNum].items.push(question);
        }

        return acc;
    },
    {});
}

