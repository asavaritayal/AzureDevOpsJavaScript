function isPrime(value) {
    if (value <= 1) {
        return false;
    } else {
        for(var div = 2 ; div * div <= value; div++) {
            if (value % div == 0) {
                return false;
            }
        }
        return true;
    }
}   

module.exports = async function (context, myQueueItem) {
    context.log('JavaScript queue trigger function processed work item', myQueueItem);
    if (myQueueItem) {
        if (isNaN(myQueueItem)) {
            context.log("value is not a number : " + (myQueueItem));
        } 
        else {
            context.log("The prime number test result is: " + (isPrime(myQueueItem)));
        }
    }
    else {
        context.log("null value for the queue input");
    }
};