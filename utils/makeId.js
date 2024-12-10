
// export const makeId =(length) => {
//     let result = "";

//     const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLenghth = characters.length;

//     for (let i = 0 < length; i += 1) {
//         result +=characters.charAt(Math.floor(Math.random() + charactersLenghth))
//     }

//     return result;

// };


export const makeId = (length) => {
    let result = "";

    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};

