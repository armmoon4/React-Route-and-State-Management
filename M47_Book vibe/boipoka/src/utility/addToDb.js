const getStoredBook = () => {

    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }

}

const addToStoredDB = (id) => {

    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert('id already exist')
    } else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
    }

}

const getStoredWish = () => {

    const storedWishSTR = localStorage.getItem("wishList");

    if (storedWishSTR) {
        const storedWishData = JSON.parse(storedWishSTR);
        return storedWishData;
    } else {
        return [];
    }
}

const addToWishDB = (id) => {

    const storedWishData = getStoredWish();
    if (storedWishData.includes(id)) {
        alert('id already exists in wishlist');
    } else {
        storedWishData.push(id);
        const data = JSON.stringify(storedWishData);
        localStorage.setItem("wishList", data);
    }
}

export { addToWishDB , getStoredBook ,addToStoredDB ,getStoredWish};