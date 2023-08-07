abstract class BaseClass<T extends Interface> {
    constructor(private repository: T){
    }
    create() {
        this.repository.printHelloWorld();
    }
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
    constructor() {
        let trainRepository = new TrainRepository();
        super(trainRepository);
    }
}

class BookingService extends BaseClass<BookingRepository> {
    constructor() {
        let bookingRepository = new BookingRepository();
        super(bookingRepository);
    }
}

const trainService = new TrainService();
trainService.create();

const bookingService = new BookingService();
bookingService.create();
