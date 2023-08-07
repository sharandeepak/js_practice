abstract class BaseClass<T extends Interface> {
    constructor(private repository: T){
    }
    create() {
        this.repository.printHelloWorld();
    }
    abstract implementIt();
}

interface Interface {
    printHelloWorld(): void;
}

class TrainRepository implements Interface {
    printHelloWorld() {
        console.log('Hello World from TrainRepository');
    }
}

class BookingRepository implements Interface {
    printHelloWorld() {
        console.log('Booking');
    }
}

class TrainService extends BaseClass<TrainRepository> {
    implementIt() {
        throw new Error("Method not implemented.");
    }
    constructor() {
        let trainRepository = new TrainRepository();
        super(trainRepository);
    }
    
}

class BookingService extends BaseClass<BookingRepository> {
    implementIt() {
        throw new Error("Method not implemented.");
    }
    constructor() {
        let bookingRepository = new BookingRepository();
        super(bookingRepository);
    }
}

const trainService = new TrainService();
trainService.create();

const bookingService = new BookingService();
bookingService.create();
