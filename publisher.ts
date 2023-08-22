
import { Queue } from "bullmq";

const notificationQueue = new Queue("sms-queue");

async function init() {
	const status = await notificationQueue.add('Sms',{
		phoneNo: '34627364232',
		message: 'You have succesfully logged in !!'
	});
	console.log('Successfully added the message into queue');
}

init();