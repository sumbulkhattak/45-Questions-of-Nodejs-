// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
class Shirt {
    size: string;
    message: string;

    constructor(size: string = "large", message: string = "I love Pakistan") {
        this.size = size;
        this.message = message;
    }

    displayShirtInfo() {
        console.log(`Size: ${this.size}, Message: ${this.message}`);
    }
}

function make_shirt(size: string = "medium", message: string = "I love Karachi") {
    return new Shirt(size, message);
}

// Large shirt with  message
const largeShirt = make_shirt();
largeShirt.displayShirtInfo();

// Medium shirt with  message
const mediumShirt = make_shirt("medium");
mediumShirt.displayShirtInfo();

// Custom shirt with message
const customShirt = make_shirt("small", "Paksitan Zindabad");
customShirt.displayShirtInfo();