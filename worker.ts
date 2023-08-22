import { Worker } from "bullmq";

const sendEmail = () => new Promise((res, rej) => setTimeout(()=> res(1), 5000));

const worker = new Worker('sms-queue', async (job)=> {
    console.log('sending sms to %s', job.data.phoneNo);
    await sendEmail();
    console.log('Sent SMS');
});
